import Image from "next/image";
import { ShieldIcon } from "./icons";

const CREW = [
  {
    image: "/images/coral-reef.jpg",
    alt: "Colourful coral reef bathed in sunlight",
    name: "Dr. Anya Peiris",
    role: "Lead Marine Biologist",
  },
  {
    image: "/images/dsd-fish-school-blue-water.png",
    alt: "A school of reef fish drifting over open blue water",
    name: "Malik Fernando",
    role: "Lead Snorkel Guide",
  },
  {
    image: "/images/dolphins.jpg",
    alt: "A pod of dolphins swimming just beneath the surface",
    name: "Chamila De Silva",
    role: "Expert Spotter",
  },
];

export default function AboutCrew() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <div className="px-6 text-center lg:px-16">
        <span className="text-[17px] font-bold uppercase tracking-[0.18em] text-accent">
          The Crew
        </span>
        <h2 className="mt-3 font-inter text-[clamp(1.5rem,6.2vw,3.75rem)] font-bold tracking-tight">
          Meet The Experts Guiding Your Journey{" "}
          <span className="text-[#1C86C9]">Into The Blue.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-4 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-16">
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl lg:min-h-0">
          <Image
            src="/images/whale-tails-aerial.jpg"
            alt="Aerial view of two whales surfacing side by side"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute bottom-0 left-0 p-7 text-white sm:p-8">
            <p className="text-lg font-semibold">Capt. Rohan Silva</p>
            <p className="text-sm text-white/80">Master Mariner &amp; Founder</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
              With over 30 years navigating the Indian Ocean, Rohan&rsquo;s
              intimate knowledge of local currents and marine life behaviour
              ensures both safety and unparalleled sightings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {CREW.slice(0, 2).map((member) => (
            <CrewCard key={member.name} member={member} />
          ))}

          <div className="flex flex-col justify-center gap-3 rounded-3xl bg-cream p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink">
              <ShieldIcon />
            </span>
            <p className="text-base font-semibold">Safety First</p>
            <p className="text-sm leading-relaxed text-body">
              Our entire crew is certified in advanced marine rescue and
              first aid. We maintain a 3:1 guest-to-guide ratio.
            </p>
          </div>

          <CrewCard member={CREW[2]} />
        </div>
      </div>
    </section>
  );
}

function CrewCard({
  member,
}: {
  member: { image: string; alt: string; name: string; role: string };
}) {
  return (
    <div className="relative min-h-[200px] overflow-hidden rounded-3xl">
      <Image
        src={member.image}
        alt={member.alt}
        fill
        sizes="(min-width: 1024px) 22vw, 45vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <p className="text-sm font-semibold">{member.name}</p>
        <p className="text-xs text-white/80">{member.role}</p>
      </div>
    </div>
  );
}
