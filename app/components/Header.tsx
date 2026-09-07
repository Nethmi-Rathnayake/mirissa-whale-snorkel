"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function getActiveLabel(pathname: string) {
  if (pathname.startsWith("/packages")) return "Packages";

  const routeMatch = NAV_LINKS.find((link) => pathname === link.href);
  return routeMatch?.label ?? null;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeLabel = getActiveLabel(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 lg:px-16">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <span className="relative h-11 w-[66px] shrink-0 sm:h-12 sm:w-[72px]">
            <Image
              src="/images/logo.png"
              alt="Mirissa Whale Snorkel logo"
              fill
              sizes="72px"
              className="object-contain"
            />
          </span>
          <span className="hidden truncate text-sm font-semibold leading-tight tracking-tight text-ink sm:inline lg:text-[1.05rem]">
            Mirissa Whale Snorkel
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-12">
          <nav className="flex items-center gap-1 text-sm font-bold">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full border px-4 py-2 transition-colors duration-100 active:scale-95 ${
                  link.label === activeLabel
                    ? "border-ink bg-ink text-ivory"
                    : "border-transparent text-ink/80 hover:border-border hover:bg-white hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/packages"
            className="rounded-full bg-[#3F2A1C] px-6 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-[#3F2A1C]/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3F2A1C]"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-cream px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-bold text-ink/80">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-full border px-4 py-3 transition-colors duration-100 active:scale-95 ${
                  link.label === activeLabel
                    ? "border-ink bg-ink text-ivory"
                    : "border-transparent hover:border-border hover:bg-white hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/packages"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-[#3F2A1C] px-6 py-3 text-center text-sm font-medium text-ivory transition-colors hover:bg-[#3F2A1C]/85"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
