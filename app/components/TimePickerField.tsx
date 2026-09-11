"use client";

import { useAnimatedPopover } from "./useAnimatedPopover";

const fieldClasses =
  "w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-left text-sm text-ink placeholder:text-body/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const labelClasses = "text-xs font-semibold uppercase tracking-[0.1em] text-body";

function buildTimeSlots() {
  const slots: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots;
}

const TIME_SLOTS = buildTimeSlots();

function formatDisplay(value: string) {
  const [h, m] = value.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

type TimePickerFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (time: string) => void;
};

export default function TimePickerField({
  id,
  name,
  label,
  value,
  onChange,
}: TimePickerFieldProps) {
  const { containerRef, panelRef, mounted, visible, placement, toggle, close } =
    useAnimatedPopover();

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
          {value ? formatDisplay(value) : "Select time"}
        </button>
        <input type="hidden" name={name} value={value} />

        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 z-30 w-px -translate-x-1/2 bg-accent/50 transition-all duration-300 ease-out ${
            placement === "top" ? "bottom-full" : "top-full"
          } ${visible ? "h-2 opacity-100" : "h-0 opacity-0"}`}
        />

        {mounted && (
          <div
            ref={panelRef}
            className={`absolute left-0 z-30 max-h-64 w-40 overflow-y-auto rounded-2xl border border-border bg-white p-2 shadow-xl transition-all duration-300 ease-out ${
              placement === "top"
                ? "bottom-full mb-2 origin-bottom"
                : "top-full mt-2 origin-top"
            } ${
              visible
                ? "translate-y-0 scale-y-100 opacity-100"
                : placement === "top"
                  ? "translate-y-1 scale-y-95 opacity-0"
                  : "-translate-y-1 scale-y-95 opacity-0"
            }`}
          >
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => {
                  onChange(slot);
                  close();
                }}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  value === slot
                    ? "bg-accent text-white"
                    : "text-ink hover:bg-cream"
                }`}
              >
                {formatDisplay(slot)}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
