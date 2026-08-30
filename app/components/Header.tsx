"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon, UserIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience" },
  { label: "Packages", href: "/#packages" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function isLinkActive(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  return path === "/" ? pathname === "/" : pathname === path;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5">
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
          <span className="text-[1.05rem] font-semibold leading-tight tracking-tight">
            Mirissa Whale
            <br className="hidden sm:block" /> Snorkel
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-ink/80 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors hover:text-ink ${
                isLinkActive(pathname, link.href)
                  ? "border-b-2 border-ink pb-1 text-ink"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/#packages"
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-ink/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-border"
          >
            <UserIcon />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-ivory px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-ink/80">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 transition-colors hover:bg-cream hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <Link
              href="/#packages"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-ink px-6 py-2.5 text-center text-sm font-medium text-ivory transition-colors hover:bg-ink/85"
            >
              Book Now
            </Link>
            <button
              type="button"
              aria-label="Account"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-ink"
            >
              <UserIcon />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
