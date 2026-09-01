import Image from "next/image";
import { DataIcon, LeafIcon } from "./icons";

const FEATURES = [
  {
    icon: LeafIcon,
    title: "Carbon Neutral Operations",
    description:
      "We offset all emissions from our vessels through local mangrove reforestation projects.",
  },
  {
    icon: DataIcon,
    title: "Data Collection",
    description:
      "During every trip, our biologists collect vital acoustic and visual data shared with global marine databases.",
  },
];

export default function AboutSustainability() {
  return (
    <section className="bg-cream/60 py-24 sm:py-28">
      <div className="grid gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Protecting what we love.
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            A percentage of every booking directly funds local marine
            research and community education programs in Mirissa. We adhere
            to the strictest global guidelines for cetacean interactions to
            ensure our presence never disturbs their natural behaviour.
          </p>

          <div className="mt-10 flex flex-col gap-7">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                  <feature.icon />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-body">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
            <Image
              src="/images/turtle.jpg"
              alt="A sea turtle gliding through clear Mirissa waters"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl">
            <Image
              src="/images/coral-reef.jpg"
              alt="Sunrays streaming through the ocean over a vivid coral reef"
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
