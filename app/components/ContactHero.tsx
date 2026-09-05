import Image from "next/image";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";
import Reveal from "./Reveal";

const QUICK_CONTACT = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: "(076) 487 5498",
    href: "tel:0764875498",
  },
  {
    icon: MailIcon,
    label: "Email Us",
    value: "mirissawhalesnorkal@gmail.com",
    href: "mailto:mirissawhalesnorkal@gmail.com",
  },
  {
    icon: PinIcon,
    label: "Find Us",
    value: "Mirissa Beach Road, Sri Lanka",
    href: undefined,
  },
];

export default function ContactHero() {
  return (
    <section className="relative w-full bg-ivory pb-6 sm:pb-8">
      <div className="relative h-[52vh] min-h-[400px] w-full overflow-hidden sm:h-[58vh] lg:h-[64vh]">
        <Image
          src="/images/hero-snorkelers-reef.png"
          alt="A family snorkeling together over a vibrant coral reef"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/5"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 lg:px-16 lg:pb-20">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              <MailIcon className="h-3.5 w-3.5 text-accent" />
              Get In Touch
            </span>
            <h1 className="mt-5 max-w-2xl font-inter text-[clamp(1.5rem,6.2vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white">
              Let&rsquo;s <span className="text-[#E0BF00]">Connect</span>
            </h1>
            <p className="mt-4 max-w-lg leading-relaxed text-white/80">
              Whether you have a question about our snorkeling packages, need
              assistance with a booking, or just want to say hello, our team
              is ready to help you plan your perfect ocean adventure.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={150}>
        <div className="relative z-10 mx-6 -mt-10 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border/80 bg-white shadow-lg shadow-ink/10 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mx-16 lg:max-w-3xl">
          {QUICK_CONTACT.map((item) => {
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <item.icon />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-body">
                    {item.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-ink">
                    {item.value}
                  </p>
                </div>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3.5 p-5 transition-colors hover:bg-cream"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="flex items-center gap-3.5 p-5">
                {content}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
