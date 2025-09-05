import React from "react";
import ProductTablet from "./ProductTablet";

export default function ServicesSection({
  eyebrow = "Store website",
  title = "COMMERCE SOLUTIONS",
  subtitle = "All‑in‑one tools to build, present, and grow your business online.",
  onCta,
  ctaText = "Get a Demo",
}) {
  // Split title to emphasize the second word lighter
  const words = String(title).split(" ");
  const first = words.slice(0, -1).join(" ");
  const last = words.slice(-1).join(" ");

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background handled by page wrapper; add subtle local wash */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[25%] left-[10%] w-[620px] h-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(99,97,252,0.25),rgba(99,97,252,0.0))]" />
        <div className="absolute top-[5%] right-[5%] w-[480px] h-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(85,208,255,0.18),rgba(85,208,255,0.0))]" />
      </div>

      <div className="relative z-10 header_con pt-20 pb-16">
        {/* Top meta row */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs text-[#B5C7D1] bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-[#55D0FF]" />
            {eyebrow}
          </span>
          <span className="hidden md:block text-sm max-w-xs text-[#B5C7D1] text-right">
            {subtitle}
          </span>
        </div>

        {/* Big stacked heading - CENTERED */}
        <div className="mt-6 text-center">
          <h2 className="font_neue_montreal_regular leading-[0.95] uppercase">
            <span className="block text-[40px] sm:text-[64px] lg:text-[84px] tracking-tight text-white/90">{first}</span>
            <span className="block text-[48px] sm:text-[72px] lg:text-[96px] tracking-tight text-white/60">{last}</span>
          </h2>
        </div>

        {/* Center device */}
        <div className="mt-8 flex items-center justify-center">
          <ProductTablet ctaBelow onCta={onCta} ctaText={ctaText} />
        </div>

        {/* Right-aligned subtitle on small screens */}
        <div className="mt-6 md:hidden">
          <p className="text-sm text-[#B5C7D1] text-center">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
