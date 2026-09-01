"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./icons";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          e.currentTarget.reset();
        }}
        className="flex items-center gap-2 rounded-full border border-border bg-white p-1.5 pl-5"
      >
        <input
          type="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:text-body focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-ivory transition-colors hover:bg-ink/85"
        >
          <ArrowRightIcon />
        </button>
      </form>
      <p role="status" className="mt-2 text-xs text-ivory/60">
        {submitted ? "Thanks — you're on the list." : " "}
      </p>
    </div>
  );
}
