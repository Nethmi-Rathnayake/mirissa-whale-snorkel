"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./icons";

const fieldClasses =
  "w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-body/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const labelClasses =
  "text-xs font-semibold uppercase tracking-[0.1em] text-body";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-3xl border border-border/80 bg-white p-8 shadow-sm sm:p-10">
      <h2 className="text-2xl font-bold tracking-tight">Send a Message</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          e.currentTarget.reset();
        }}
        className="mt-8 flex flex-col gap-6"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="first-name" className={labelClasses}>
              First Name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              required
              placeholder="Jane"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="last-name" className={labelClasses}>
              Last Name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              required
              placeholder="Doe"
              className={fieldClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane.doe@example.com"
            className={fieldClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className={labelClasses}>
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Booking Inquiry"
            className={fieldClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="How can we help you?"
            className={`${fieldClasses} resize-none`}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ink/85"
          >
            Send Message
            <ArrowRightIcon />
          </button>
          {submitted && (
            <p role="status" className="text-sm text-body">
              Thanks — we&rsquo;ll be in touch shortly.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
