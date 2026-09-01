"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon, UserIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "/", hash: "" },
  { label: "Packages", href: "/packages", hash: "" },
  { label: "Gallery", href: "/#gallery", hash: "#gallery" },
  { label: "About", href: "/about", hash: "" },
  { label: "FAQ", href: "/faq", hash: "" },
  { label: "Contact", href: "/contact", hash: "" },
];

function getActiveLabel(pathname: string, hash: string) {
  if (pathname.startsWith("/packages")) return "Packages";

  const routeMatch = NAV_LINKS.find(
    (link) => link.href !== "/" && !link.href.includes("#") && pathname === link.href
  );
  if (routeMatch) return routeMatch.label;

  if (pathname !== "/") return null;
  return NAV_LINKS.find((link) => link.hash === hash)?.label ?? "Home";
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const activeLabel = getActiveLabel(pathname, hash);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 lg:px-16">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/images/logo.png"
              alt="Mirissa Whale Snorkel logo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="whitespace-nowrap text-[1.05rem] font-semibold leading-tight tracking-tight">
            Mirissa Whale Snorkel
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-12">
          <nav className="flex items-center gap-5 text-sm font-[705] text-ink/80 xl:gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setHash(link.hash)}
                className={`transition-colors hover:text-ink ${
                  link.label === activeLabel
                    ? "border-b-2 border-ink pb-1 text-ink"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
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
        <div className="border-t border-border/70 bg-cream px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1 text-sm font-[705] text-ink/80">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setHash(link.hash);
                  setOpen(false);
                }}
                className={`rounded-lg px-2 py-2.5 transition-colors hover:bg-cream hover:text-ink ${
                  link.label === activeLabel ? "bg-cream text-ink" : ""
                }`}
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
