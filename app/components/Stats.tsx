const STATS = [
  { value: "98%", label: "Sighting Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "Eco", label: "Certified Tours" },
  { value: "Max 6", label: "Guests Per Boat" },
];

export default function Stats() {
  return (
    <section className="border-b border-border/70 bg-cream/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-12 sm:py-14 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-border">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 text-center lg:px-4"
          >
            <span className="text-3xl font-bold tracking-tight sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-body">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
