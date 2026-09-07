"use client";

import { useState } from "react";
import { ChevronRightIcon } from "./icons";
import { useAnimatedPopover } from "./useAnimatedPopover";

const fieldClasses =
  "w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-left text-sm text-ink placeholder:text-body/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const labelClasses = "text-xs font-semibold uppercase tracking-[0.1em] text-body";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDisplay(date: Date) {
  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

type DatePickerFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (isoDate: string) => void;
};

export default function DatePickerField({
  id,
  name,
  label,
  value,
  onChange,
}: DatePickerFieldProps) {
  const { containerRef, mounted, visible, toggle, close } =
    useAnimatedPopover();
  const today = startOfDay(new Date());
  const selected = value ? startOfDay(new Date(value)) : null;
  const [viewMonth, setViewMonth] = useState(() => selected ?? today);

  const monthStart = new Date(
    viewMonth.getFullYear(),
    viewMonth.getMonth(),
    1
  );
  const startWeekday = monthStart.getDay();
  const daysInMonth = new Date(
    viewMonth.getFullYear(),
    viewMonth.getMonth() + 1,
    0
  ).getDate();

  const cells: (Date | null)[] = [
    ...Array.from({ length: startWeekday }, () => null),
    ...Array.from(
      { length: daysInMonth },
      (_, i) => new Date(viewMonth.getFullYear(), viewMonth.getMonth(), i + 1)
    ),
  ];

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          id={id}
          onClick={toggle}
          className={fieldClasses}
        >
          {selected ? formatDisplay(selected) : "Select date"}
        </button>
        <input type="hidden" name={name} value={value} />

        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 top-full z-30 w-px -translate-x-1/2 bg-accent/50 transition-all duration-300 ease-out ${
            visible ? "h-2 opacity-100" : "h-0 opacity-0"
          }`}
        />

        {mounted && (
          <div
            className={`absolute left-0 top-full z-30 mt-2 w-72 origin-top rounded-2xl border border-border bg-white p-4 shadow-xl transition-all duration-300 ease-out ${
              visible
                ? "translate-y-0 scale-y-100 opacity-100"
                : "-translate-y-1 scale-y-95 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous month"
                onClick={() =>
                  setViewMonth(
                    new Date(
                      viewMonth.getFullYear(),
                      viewMonth.getMonth() - 1,
                      1
                    )
                  )
                }
                className="flex h-8 w-8 items-center justify-center rounded-full text-body transition-colors hover:bg-cream hover:text-ink"
              >
                <ChevronRightIcon className="rotate-180" />
              </button>
              <p className="text-sm font-semibold text-ink">
                {MONTH_NAMES[viewMonth.getMonth()]} {viewMonth.getFullYear()}
              </p>
              <button
                type="button"
                aria-label="Next month"
                onClick={() =>
                  setViewMonth(
                    new Date(
                      viewMonth.getFullYear(),
                      viewMonth.getMonth() + 1,
                      1
                    )
                  )
                }
                className="flex h-8 w-8 items-center justify-center rounded-full text-body transition-colors hover:bg-cream hover:text-ink"
              >
                <ChevronRightIcon />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase text-body">
              {WEEKDAYS.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1">
              {cells.map((day, index) => {
                if (!day) return <span key={`empty-${index}`} />;
                const isPast = day < today;
                const isSelected =
                  selected && day.getTime() === selected.getTime();
                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    disabled={isPast}
                    onClick={() => {
                      onChange(toISODate(day));
                      close();
                    }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                      isSelected
                        ? "bg-accent text-white"
                        : isPast
                          ? "cursor-not-allowed text-body/30"
                          : "text-ink hover:bg-cream"
                    }`}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
