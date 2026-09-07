"use client";

import { useState } from "react";
import Link from "next/link";
import DatePickerField from "./DatePickerField";
import TimePickerField from "./TimePickerField";
import { ArrowRightIcon } from "./icons";

const WEB3FORMS_ACCESS_KEY = "2c890c93-9ee1-403d-93fd-cce148e2e4d6";

const fieldClasses =
  "w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-body/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const labelClasses =
  "text-xs font-semibold uppercase tracking-[0.1em] text-body";

export default function BookingForm({ packageName }: { packageName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border/80 bg-white p-8 text-center shadow-sm sm:p-10">
        <h1 className="text-2xl font-bold tracking-tight">
          Booking Confirmed
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-body">
          Thanks — your booking for{" "}
          <span className="font-semibold text-ink">{packageName}</span> has
          been successfully received and confirmed. We&rsquo;ll arrange your
          pickup and meeting at the confirmed date, time and location, and
          we&rsquo;ve sent a confirmation email with your booking details.
        </p>
        <Link
          href="/packages"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ink/85"
        >
          Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border/80 bg-white p-8 shadow-sm sm:p-10">
      <h2 className="text-lg font-semibold tracking-tight">Your Details</h2>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setErrorMessage("");

          if (!bookingDate || !bookingTime) {
            setErrorMessage("Please select a booking date and time.");
            return;
          }

          setSending(true);

          const form = e.currentTarget;
          const formData = new FormData(form);
          const payload = Object.fromEntries(formData.entries());

          // 1. Notify the agency with the full booking details via Web3Forms.
          // This must run client-side: Web3Forms' free-tier API rejects
          // server-to-server submissions.
          const web3FormData = new FormData(form);
          web3FormData.append("access_key", WEB3FORMS_ACCESS_KEY);
          web3FormData.append(
            "subject",
            `New Booking Received - Mirissa Whale Snorkel`
          );

          try {
            const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: web3FormData,
            });
            const result = await response.json();

            if (!response.ok || !result.success) {
              setErrorMessage(
                result.message || "Something went wrong. Please try again."
              );
              return;
            }

            // 2. Send the customer their confirmation email. This goes through
            // our own server route, since it needs a real SMTP credential that
            // must never reach the browser. A failure here shouldn't block the
            // booking itself — the agency has already been notified above.
            try {
              await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });
            } catch (error) {
              console.error("Customer confirmation email request failed:", error);
            }

            setSubmitted(true);
            form.reset();
            setBookingDate("");
            setBookingTime("");
          } catch {
            setErrorMessage("Something went wrong. Please try again.");
          } finally {
            setSending(false);
          }
        }}
        className="mt-8 flex flex-col gap-6"
      >
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-package" className={labelClasses}>
              Package
            </label>
            <input
              id="booking-package"
              name="package"
              type="text"
              readOnly
              value={packageName}
              className={`${fieldClasses} cursor-not-allowed text-body`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-name" className={labelClasses}>
              Name
            </label>
            <input
              id="booking-name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-country" className={labelClasses}>
              Country
            </label>
            <input
              id="booking-country"
              name="country"
              type="text"
              required
              placeholder="United Kingdom"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-contact" className={labelClasses}>
              Contact Number
            </label>
            <input
              id="booking-contact"
              name="contactNumber"
              type="tel"
              required
              placeholder="+44 7000 000000"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-email" className={labelClasses}>
              Email Address
            </label>
            <input
              id="booking-email"
              name="email"
              type="email"
              required
              placeholder="jane.doe@example.com"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-adults" className={labelClasses}>
              Number of Adults
            </label>
            <input
              id="booking-adults"
              name="adults"
              type="number"
              min={1}
              required
              placeholder="2"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-children" className={labelClasses}>
              Number of Children
            </label>
            <input
              id="booking-children"
              name="children"
              type="number"
              min={0}
              placeholder="0"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-passport" className={labelClasses}>
              Passport Number
            </label>
            <input
              id="booking-passport"
              name="passportNumber"
              type="text"
              placeholder="A1234567"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-hotel" className={labelClasses}>
              Hotel Name
            </label>
            <input
              id="booking-hotel"
              name="hotelName"
              type="text"
              placeholder="Where are you staying?"
              className={fieldClasses}
            />
          </div>
          <DatePickerField
            id="booking-date"
            name="bookingDate"
            label="Booking Date"
            value={bookingDate}
            onChange={setBookingDate}
          />
          <TimePickerField
            id="booking-time"
            name="bookingTime"
            label="Booking Time"
            value={bookingTime}
            onChange={setBookingTime}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="booking-requests" className={labelClasses}>
            Additional Requests / Questions
          </label>
          <textarea
            id="booking-requests"
            name="additionalRequests"
            rows={4}
            placeholder="Anything else we should know?"
            className={`${fieldClasses} resize-none`}
          />
        </div>

        {errorMessage && (
          <p role="alert" className="text-sm text-red-600">
            {errorMessage}
          </p>
        )}

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending..." : "Submit Booking"}
            <ArrowRightIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
