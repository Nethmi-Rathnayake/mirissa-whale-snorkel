import nodemailer from "nodemailer";

export const runtime = "nodejs";

const AGENCY_NOTIFICATION_EMAIL = "mirissawhalesnorkel@proton.me";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
  botcheck?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Emails a /contact form message to the agency inbox via Gmail SMTP. Sent
 * from GMAIL_USER with Reply-To set to the visitor, so replying goes straight
 * to them.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;
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

  const firstName = payload.firstName?.trim();
  const lastName = payload.lastName?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();
  const subject = payload.subject?.trim() || "Website enquiry";

  if (!firstName || !lastName || !email || !message) {
    return Response.json(
      { success: false, message: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.error("GMAIL_USER / GMAIL_APP_PASSWORD is not configured.");
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  const name = `${firstName} ${lastName}`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPassword },
    });

    await transporter.sendMail({
      from: `"Mirissa Whale Snorkel" <${gmailUser}>`,
      to: AGENCY_NOTIFICATION_EMAIL,
      replyTo: {
        name: name.replace(/[\r\n]/g, " "),
        address: email.replace(/[\r\n]/g, ""),
      },
      subject: `Contact Form: ${subject.replace(/[\r\n]+/g, " ")}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#211710;font-size:14px;line-height:1.6;">
          <h2 style="margin:0 0 12px;">New Contact Message</h2>
          <p style="margin:0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="margin:0 0 12px;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
        </div>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
