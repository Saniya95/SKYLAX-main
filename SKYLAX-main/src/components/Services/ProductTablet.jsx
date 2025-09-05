import React from "react";

// A self-contained tablet mockup with a simple e-commerce product grid UI
export default function ProductTablet({ className = "", ctaBelow = false, onCta, ctaText = "Get a Demo" }) {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Bezel */}
        <div className="relative rounded-[28px] border border-white/15 bg-[linear-gradient(180deg,rgba(20,22,26,0.9),rgba(20,22,26,0.55))] shadow-[0_40px_120px_rgba(0,0,0,0.55)] p-3">
          {/* Camera notch */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-16 h-1.5 rounded-full bg-white/10" />

          {/* Top bar */}
          <div className="flex items-center justify-between rounded-[18px] bg-[linear-gradient(180deg,rgba(34,38,49,0.9),rgba(34,38,49,0.65))] border border-white/10 px-4 py-2">
            <div className="flex items-center gap-2 text-sm text-[#B5C7D1]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#55D0FF]" />
              Product Search
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <div className="w-6 h-6 rounded-md bg-white/5" />
              <div className="w-6 h-6 rounded-md bg-white/5" />
              <div className="w-6 h-6 rounded-md bg-white/5" />
            </div>
          </div>

          {/* Content area */}
          <div className="mt-3 rounded-[18px] bg-[linear-gradient(180deg,rgba(12,14,19,0.8),rgba(12,14,19,0.6))] border border-white/10 p-4">
            {/* Filters */}
            <div className="flex items-center justify-between text-xs text-[#B5C7D1]">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-md bg-white/5">All</span>
                <span className="px-2 py-1 rounded-md bg-white/5">Watches</span>
                <span className="px-2 py-1 rounded-md bg-white/5">Rings</span>
                <span className="px-2 py-1 rounded-md bg-white/5">Necklaces</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded-md bg-white/5">Grid</span>
                <span className="px-2 py-1 rounded-md bg-white/5">Filters</span>
              </div>
            </div>

            {/* Product cards */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(23,26,33,0.85),rgba(23,26,33,0.55))] p-3">
                  <div className="aspect-square rounded-lg bg-[radial-gradient(closest-side,rgba(85,208,255,0.25),rgba(99,97,252,0.15),rgba(0,0,0,0))] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-2 text-[11px] text-[#B5C7D1] leading-tight">
                    <div className="font-medium text-white/90">Celestial Crown</div>
                    <div className="opacity-70">$2,950.00</div>
                  </div>
                  <button className="mt-2 w-full text-[11px] py-2 rounded-lg bg-gradient-to-r from-[#55D0FF] to-[#6361FC] text-[#080707] font-medium">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hands illusion using soft gradients (fallback when no hand assets) */}
        <div aria-hidden className="pointer-events-none absolute -bottom-6 left-0 right-0 h-40">
          <div className="absolute left-[-40px] bottom-0 w-44 h-40 rounded-[48px] rotate-[-8deg] bg-[radial-gradient(closest-side,rgba(99,97,252,0.45),rgba(99,97,252,0.0))] blur-md" />
          <div className="absolute right-[-40px] bottom-0 w-44 h-40 rounded-[48px] rotate-[8deg] bg-[radial-gradient(closest-side,rgba(85,208,255,0.45),rgba(85,208,255,0.0))] blur-md" />
        </div>
      </div>

      {ctaBelow && (
        <div className="mt-6">
          <button onClick={onCta} className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#55D0FF] to-[#6361FC] text-[#080707] font-semibold">
            {ctaText}
          </button>
        </div>
      )}
    </div>
  );
}
