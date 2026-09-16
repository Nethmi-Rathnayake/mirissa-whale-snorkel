import type { PriceInfo } from "../lib/packages";

export default function PriceDisplay({ price }: { price: PriceInfo }) {
  if (price.kind === "flat") {
    return (
      <>
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-body">
          Price
        </p>
        <span className="mt-1 block text-4xl font-bold tracking-tight">
          <span className="mr-1 align-top text-lg font-semibold text-body">
            USD
          </span>
          {price.price}
        </span>
        <p className="mt-1 text-xs uppercase tracking-[0.1em] text-body">
          {price.unit}
        </p>
        {price.note && (
          <p className="mt-3 text-sm leading-relaxed text-ink/85">
            {price.note}
          </p>
        )}
      </>
    );
  }

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-body">
        Total Price
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {price.tiers.map((tier) => (
          <li
            key={tier.persons}
            className="flex items-center justify-between rounded-xl bg-cream/70 px-4 py-2.5"
          >
            <span className="text-sm text-ink/85">{tier.persons}</span>
            <span className="text-lg font-bold tracking-tight">
              <span className="mr-1 text-xs font-semibold text-body">
                USD
              </span>
              {tier.price}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-left text-sm leading-relaxed text-ink/85">
        {price.note}
      </p>
    </>
  );
}
