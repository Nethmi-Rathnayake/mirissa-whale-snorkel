import nodemailer from "nodemailer";

export const runtime = "nodejs";

type BookingPayload = {
  package?: string;
  name?: string;
  country?: string;
  contactNumber?: string;
  email?: string;
  adults?: string;
  children?: string;
  passportNumber?: string;
  hotelName?: string;
  bookingDate?: string;
  bookingTime?: string;
  additionalRequests?: string;
  botcheck?: string;
};

const REQUIRED_FIELDS = [
  "package",
  "name",
  "country",
  "contactNumber",
  "email",
  "adults",
  "bookingDate",
  "bookingTime",
] as const satisfies readonly (keyof BookingPayload)[];

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || !m || !d) return dateStr;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatTime(timeStr: string) {
  const [h, m] = timeStr.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return timeStr;
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

function guestSummary(adults: string, children?: string) {
  const childCount = Number(children ?? 0) || 0;
  const adultLabel = `${adults} Adult${Number(adults) === 1 ? "" : "s"}`;
  if (childCount <= 0) return adultLabel;
  return `${adultLabel}, ${childCount} Child${childCount === 1 ? "" : "ren"}`;
}

async function sendTelegramNotification(text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID is not configured.");
    return false;
  }

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );
  const result = await response.json();

  if (!response.ok || !result.ok) {
    console.error("Telegram notification rejected:", result);
    return false;
  }

  return true;
}

/**
 * Sends the customer's "Booking Confirmed" email via Gmail SMTP, a separate
 * internal "New Booking Received" email to the agency's own Gmail inbox
 * (same GMAIL_USER account, so the customer never sees it), and notifies
 * the agency's Telegram chat — all three run concurrently and independently
 * (one failing doesn't block the others or the booking UI from showing
 * success).
 *
 * The Web3Forms agency-email notification is sent separately, client-side,
 * directly to Web3Forms — its free-tier API rejects server-to-server calls
 * ("Use our API in client side or contact support with server IP address
 * (Pro plan is required)"), so it can't be moved here. The customer email,
 * internal email, and Telegram message all need real secrets (SMTP
 * credential, bot token) that must never reach the browser, so they run
 * here instead.
 */
export async function POST(request: Request) {
  let payload: BookingPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot: bots fill this hidden field. Pretend success without sending anything.
  if (payload.botcheck) {
    return Response.json({ success: true });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!payload[field]) {
      return Response.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }
  }

  const {
    package: packageName,
    name,
    country,
    contactNumber,
    email,
    adults,
    children,
    passportNumber,
    hotelName,
    bookingDate,
    bookingTime,
    additionalRequests,
  } = payload as Required<
    Pick<
      BookingPayload,
      | "package"
      | "name"
      | "country"
      | "contactNumber"
      | "email"
      | "adults"
      | "bookingDate"
      | "bookingTime"
    >
  > &
    BookingPayload;

  const formattedDate = formatDate(bookingDate);
  const formattedTime = formatTime(bookingTime);
  const guests = guestSummary(adults, children);
  const pickupLocation =
    hotelName?.trim() || "Not provided — to be confirmed with guest";

  const detailRows: [string, string][] = [
    ["Package", packageName],
    ["Booking Date", formattedDate],
    ["Booking Time", formattedTime],
    ["Number of Guests", guests],
    ["Pickup Location", pickupLocation],
    ["Country", country],
    ["Contact Number", contactNumber],
    ["Passport Number", passportNumber || "Not provided"],
    ["Additional Requests / Questions", additionalRequests || "None"],
  ];

  const telegramText = [
    "🐋 New Booking Received",
    "",
    ...detailRows.map(([label, value]) => `${label}: ${value}`),
    "",
    `Customer: ${name} (${email})`,
  ].join("\n");

  const internalDetailRows: [string, string][] = [
    ["Customer Name", name],
    ["Customer Email", email],
    ...detailRows,
  ];

  const [emailResult, internalEmailResult, telegramResult] =
    await Promise.allSettled([
      sendCustomerConfirmationEmail({ name, email, detailRows }),
      sendInternalBookingNotification({ detailRows: internalDetailRows }),
      sendTelegramNotification(telegramText),
    ]);

  const emailOk = emailResult.status === "fulfilled" && emailResult.value;
  const internalEmailOk =
    internalEmailResult.status === "fulfilled" && internalEmailResult.value;
  const telegramOk =
    telegramResult.status === "fulfilled" && telegramResult.value;

  if (emailResult.status === "rejected") {
    console.error("Customer confirmation email failed:", emailResult.reason);
  }
  if (internalEmailResult.status === "rejected") {
    console.error("Internal booking notification email failed:", internalEmailResult.reason);
  }
  if (telegramResult.status === "rejected") {
    console.error("Telegram notification failed:", telegramResult.reason);
  }

  return Response.json({
    success: emailOk,
    emailSent: emailOk,
    internalEmailSent: internalEmailOk,
    telegramSent: telegramOk,
  });
}

async function sendCustomerConfirmationEmail({
  name,
  email,
  detailRows,
}: {
  name: string;
  email: string;
  detailRows: [string, string][];
}) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.error("GMAIL_USER / GMAIL_APP_PASSWORD is not configured.");
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPassword },
    });

    const textBody = [
      `Hi ${name},`,
      "",
      "Your booking has been successfully received and confirmed. Our team will arrange your pickup and meeting at the confirmed date, time and location below.",
      "",
      ...detailRows.map(([label, value]) => `${label}: ${value}`),
      "",
      "If anything above needs to change, just reply to this email and we'll sort it out.",
      "",
      "See you soon,",
      "Mirissa Whale Snorkel",
    ].join("\n");

    const htmlRows = detailRows
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding:10px 16px;border-bottom:1px solid #e6ddcf;color:#6c6259;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;">${label}</td>
            <td style="padding:10px 16px;border-bottom:1px solid #e6ddcf;color:#211710;font-size:14px;">${value}</td>
          </tr>`
      )
      .join("");

    const htmlBody = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#faf7f2;padding:32px 16px;">
        <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e6ddcf;">
          <div style="background:#3F2A1C;padding:24px 28px;">
            <p style="margin:0;color:#faf7f2;font-size:18px;font-weight:700;">Mirissa Whale Snorkel</p>
          </div>
          <div style="padding:28px;">
            <h1 style="margin:0 0 12px;color:#211710;font-size:20px;">Booking Confirmed</h1>
            <p style="margin:0 0 16px;color:#6c6259;font-size:14px;line-height:1.6;">
              Hi ${name}, your booking has been successfully received and confirmed.
              Our team will arrange your pickup and meeting at the confirmed date, time and location below.
            </p>
            <table style="width:100%;border-collapse:collapse;margin-top:8px;">
              ${htmlRows}
            </table>
            <p style="margin:20px 0 0;color:#6c6259;font-size:13px;line-height:1.6;">
              If anything above needs to change, just reply to this email and we&rsquo;ll sort it out.
            </p>
          </div>
        </div>
      </div>`;

    await transporter.sendMail({
      from: `"Mirissa Whale Snorkel" <${gmailUser}>`,
      to: email,
      subject: "Booking Confirmed - Mirissa Whale Snorkel",
      text: textBody,
      html: htmlBody,
    });

    return true;
  } catch (error) {
    console.error("Customer confirmation email failed:", error);
    return false;
  }
}

/**
 * Notifies the agency's own inbox of a new booking. Sent from and to the
 * same Gmail account (GMAIL_USER) already used for the customer email, so
 * it needs no extra secrets or env vars — reusing GMAIL_USER as the
 * recipient also means this stays in sync if that address ever changes.
 */
async function sendInternalBookingNotification({
  detailRows,
}: {
  detailRows: [string, string][];
}) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.error("GMAIL_USER / GMAIL_APP_PASSWORD is not configured.");
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPassword },
    });

    const textBody = [
      "A new booking has been received.",
      "",
      ...detailRows.map(([label, value]) => `${label}: ${value}`),
    ].join("\n");

    const htmlRows = detailRows
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding:10px 16px;border-bottom:1px solid #e6ddcf;color:#6c6259;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;">${label}</td>
            <td style="padding:10px 16px;border-bottom:1px solid #e6ddcf;color:#211710;font-size:14px;">${value}</td>
          </tr>`
      )
      .join("");

    const htmlBody = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#faf7f2;padding:32px 16px;">
        <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e6ddcf;">
          <div style="background:#3F2A1C;padding:24px 28px;">
            <p style="margin:0;color:#faf7f2;font-size:18px;font-weight:700;">Mirissa Whale Snorkel</p>
          </div>
          <div style="padding:28px;">
            <h1 style="margin:0 0 12px;color:#211710;font-size:20px;">New Booking Received</h1>
            <table style="width:100%;border-collapse:collapse;margin-top:8px;">
              ${htmlRows}
            </table>
          </div>
        </div>
      </div>`;

    await transporter.sendMail({
      from: `"Mirissa Whale Snorkel" <${gmailUser}>`,
      to: gmailUser,
      subject: "New Booking Received - Mirissa Whale Snorkel",
      text: textBody,
      html: htmlBody,
    });

    return true;
  } catch (error) {
    console.error("Internal booking notification email failed:", error);
    return false;
  }
}
