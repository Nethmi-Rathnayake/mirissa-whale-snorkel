const STATS = [
  { value: "98%", label: "Sighting Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "Eco", label: "Certified Tours" },
  { value: "Max 6", label: "Guests Per Boat" },
];

export default function Stats() {
  return (
    <section className="border-b border-border/70 bg-cream">
      <div className="grid grid-cols-2 gap-y-8 px-6 py-16 sm:py-20 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-border lg:px-16">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 text-center lg:px-4"
          >
            <span className="text-3xl font-[705] tracking-tight text-accent sm:text-4xl">
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
