import { MailIcon, WhatsAppIcon } from "./icons";

const FLOATING_CONTACTS = [
  {
    icon: WhatsAppIcon,
    label: "Chat on WhatsApp",
    href: "https://wa.me/94764875498",
    external: true,
    className: "bg-[#25D366] hover:bg-[#1DAF54]",
  },
  {
    icon: MailIcon,
    label: "Email us",
    href: "mailto:mirissawhalesnorkal@gmail.com",
    external: false,
    className: "bg-accent hover:bg-accent-dark",
  },
];

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {FLOATING_CONTACTS.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          aria-label={contact.label}
          title={contact.label}
          target={contact.external ? "_blank" : undefined}
          rel={contact.external ? "noopener noreferrer" : undefined}
          className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-black/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-black/30 ${contact.className}`}
        >
          <contact.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}
