import { GuideIcon, LeafIcon, PeopleIcon, ShieldIcon } from "./icons";

const TRUST_BADGES = [
  { icon: LeafIcon, label: "Eco-Certified Operator" },
  { icon: ShieldIcon, label: "Safe & Insured Tours" },
  { icon: PeopleIcon, label: "Small Group Sizes" },
  { icon: GuideIcon, label: "Expert Marine Guides" },
];

export default function TrustBadges() {
  return (
    <section className="bg-ivory pb-24 sm:pb-28">
      <div className="px-6 lg:px-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border/80 bg-white p-5 text-center shadow-sm transition-colors duration-300 hover:bg-cream"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <badge.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-ink/85">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
