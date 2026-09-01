import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import {
  CameraIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  PlayIcon,
  ShareIcon,
} from "./icons";

const QUICK_LINKS = [
  { label: "Our Journey", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Packages", href: "/#packages" },
  { label: "FAQ", href: "/faq" },
];

const CONTACT_ROWS = [
  {
    icon: PinIcon,
    text: "Mirissa Beach Road, Mirissa 81740, Sri Lanka",
  },
  {
    icon: PhoneIcon,
    text: "+94 77 123 4567",
    href: "tel:+94771234567",
  },
  {
    icon: MailIcon,
    text: "hello@mirissawhalesnorkel.com",
    href: "mailto:hello@mirissawhalesnorkel.com",
  },
];

const SOCIAL_LINKS = [
  { icon: CameraIcon, label: "Instagram" },
  { icon: ShareIcon, label: "Facebook" },
  { icon: PlayIcon, label: "YouTube" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Safety Practices", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#3F2A1C] text-ivory">
      <svg
        className="absolute inset-x-0 top-0 h-10 w-full -translate-y-full sm:h-14"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 60C240 10 480 100 720 80C960 60 1200 0 1440 50V100H0Z"
          fill="#3F2A1C"
        />
      </svg>

      <div className="relative z-10 px-6 py-10 sm:py-12 lg:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/images/logo.png"
                  alt="Mirissa Whale Snorkel logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="text-[1.05rem] font-semibold tracking-tight">
                Mirissa Whale Snorkel
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">
              Small group, eco-friendly whale snorkeling adventures in
              Mirissa. Respect the ocean and create memories for a lifetime.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ivory transition-colors hover:bg-white/20"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-ivory/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Get in Touch
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              {CONTACT_ROWS.map((row) => {
                const content = (
                  <span className="flex items-start gap-3">
                    <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-ivory/50" />
                    <span className="leading-relaxed text-ivory/85">
                      {row.text}
                    </span>
                  </span>
                );
                return (
                  <li key={row.text}>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="transition-colors hover:text-white"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Newsletter
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-ivory/65">
              Season updates and sighting reports, straight to your inbox.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ivory/50 sm:flex-row">
          <p>© 2026 Mirissa Whale Snorkel. All rights reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
