import { MailIcon, PhoneIcon, PinIcon } from "./icons";

const ROWS = [
  {
    icon: PinIcon,
    label: "Our Location",
    lines: ["Mirissa Beach Road, Mirissa 81740,", "Sri Lanka"],
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    lines: ["+94 77 123 4567", "Mon–Sun, 7:00 AM – 6:00 PM (LKT)"],
    href: "tel:+94771234567",
  },
  {
    icon: MailIcon,
    label: "Email",
    lines: ["hello@mirissawhalesnorkel.com"],
    href: "mailto:hello@mirissawhalesnorkel.com",
  },
];

export default function ContactInfo() {
  return (
    <div className="rounded-3xl bg-ink p-8 text-ivory">
      <h2 className="text-xl font-bold tracking-tight">
        Contact Information
      </h2>

      <div className="mt-7 flex flex-col gap-6">
        {ROWS.map((row) => (
          <div key={row.label} className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
              <row.icon />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ivory/60">
                {row.label}
              </p>
              {row.href ? (
                <a
                  href={row.href}
                  className="mt-1 block text-sm leading-relaxed text-ivory/90 transition-colors hover:text-white"
                >
                  {row.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              ) : (
                <p className="mt-1 text-sm leading-relaxed text-ivory/90">
                  {row.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
