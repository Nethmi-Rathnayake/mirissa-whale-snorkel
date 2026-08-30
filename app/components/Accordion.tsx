"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import type { PackageSection } from "../lib/packages";
import { ChevronDownIcon, CheckIcon } from "./icons";

export default function Accordion({ items }: { items: PackageSection[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(
    items.find((item) => item.defaultOpen)?.id ?? null
  );

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && items.some((item) => item.id === hash)) {
        setOpenId(hash);
        requestAnimationFrame(() => {
          document
            .getElementById(hash)
            ?.scrollIntoView({ block: "start", behavior: "smooth" });
        });
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [items]);

  return (
    <div className="flex flex-col divide-y divide-border/70 border-t border-border/70">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;

        return (
          <div key={item.id} id={item.id} className="scroll-mt-28">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-lg font-semibold tracking-tight">
                  {item.title}
                </span>
                <ChevronDownIcon
                  className={`shrink-0 text-body transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              hidden={!isOpen}
              className="pb-6 pr-8 text-sm leading-relaxed text-body"
            >
              {item.kind === "paragraph" && item.body && <p>{item.body}</p>}

              {item.kind === "list" && item.items && (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {item.items.map((entry) => (
                    <li
                      key={entry}
                      className="flex items-center gap-2.5 text-ink/85"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <CheckIcon />
                      </span>
                      {entry}
                    </li>
                  ))}
                </ul>
              )}

              {item.kind === "chips" && item.items && (
                <div className="flex flex-wrap gap-2.5">
                  {item.items.map((entry) => (
                    <span
                      key={entry}
                      className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink/85"
                    >
                      {entry}
                    </span>
                  ))}
                </div>
              )}

              {item.cta && (
                <Link
                  href={item.cta.href}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ink/85"
                >
                  {item.cta.label}
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
