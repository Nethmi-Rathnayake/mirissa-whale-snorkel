import NewsletterForm from "./NewsletterForm";

const QUICK_LINKS = [
  { label: "Our Journey", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Where We Are", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Safety Practices", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-cream/60">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0 4-2 6 0" />
                  <path d="M4 20c1.5 1 3 1 4.5 0S12 19 14 20s3 1 4.5 0" />
                  <path d="M15 5c1.5 0 4 1.5 4 5-2 .5-4.5-.5-5.5-2.5C12.5 5.5 13.5 5 15 5Z" />
                </svg>
              </span>
              <span className="text-[1.05rem] font-semibold tracking-tight">
                Mirissa Whale Snorkel
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              Small group, eco-friendly whale snorkeling adventures in
              Mirissa. Respect the ocean and create memories for a lifetime.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-body">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ink/85 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-body">
              Legal
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ink/85 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-body">
              Newsletter
            </h3>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-xs text-body">
          © 2026 Mirissa Whale Snorkel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
