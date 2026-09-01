"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import type { FaqCategory } from "../lib/faq";
import { ArrowRightIcon, ChevronDownIcon, LifeBuoyIcon } from "./icons";

export default function FaqExplorer({
  categories,
}: {
  categories: FaqCategory[];
}) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  function toggleQuestion(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="grid gap-10 px-6 pb-24 pt-16 sm:pb-28 lg:grid-cols-[280px_1fr] lg:gap-12 lg:px-16">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-3xl border border-border/80 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight">Categories</h2>
          <nav className="mt-4 flex flex-col gap-1">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeId === category.id
                    ? "bg-accent text-white"
                    : "text-ink/75 hover:bg-cream hover:text-ink"
                }`}
              >
                {category.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 rounded-3xl bg-ink p-6 text-ivory">
          <div className="flex items-start gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
              <LifeBuoyIcon />
            </span>
            <div>
              <p className="text-sm font-semibold">Need More Help?</p>
              <p className="mt-1 text-sm leading-relaxed text-ivory/70">
                Our team is available 24/7.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
          >
            Contact Support
            <ArrowRightIcon />
          </Link>
        </div>
      </aside>

      <div className="flex flex-col gap-16">
        {categories.map((category, index) => (
          <div key={category.id} id={category.id} className="scroll-mt-28">
            <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {category.title}
              </h2>
              <span className="text-sm font-semibold text-body">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {category.questions.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openIds.has(item.id)}
                  onToggle={() => toggleQuestion(item.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { id: string; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className="rounded-2xl border border-border/70 bg-white shadow-sm">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-sm font-semibold text-ink sm:text-base">
            {item.question}
          </span>
          <ChevronDownIcon
            className={`shrink-0 text-body transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div id={panelId} hidden={!isOpen} className="px-6 pb-5">
        <p className="text-sm leading-relaxed text-body">{item.answer}</p>
      </div>
    </div>
  );
}
