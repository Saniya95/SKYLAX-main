import React from "react";
import Image from "next/image";

// Replicates the "TOOLS THAT WORK TOGETHER" section with gradient bg and three neon cards
export default function ToolsTogetherSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Seamless gradient background */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        {/* base gradient blend */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B0C10_0%,#1F2A44_35%,rgba(31,42,68,0.85)_60%,rgba(31,42,68,0)_100%)]" />
        {/* teal/blue radial glows */}
        <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(85,208,255,0.20),rgba(85,208,255,0))] blur-2xl" />
        <div className="absolute -bottom-24 right-1/5 w-[640px] h-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(99,97,252,0.18),rgba(99,97,252,0))] blur-2xl" />
      </div>

  <div className="header_con pt-20 sm:pt-24 lg:pt-28 pb-28 sm:pb-40 lg:pb-56">
        {/* Title */}
        <h2 className="text-center font_neue_montreal_regular tracking-tight uppercase leading-[0.9]">
          <span className="block text-[32px] sm:text-[56px] lg:text-[72px] text-[#C9D1D9]">TOOLS THAT WORK</span>
          <span className="block text-[40px] sm:text-[64px] lg:text-[88px] text-white">TOGETHER</span>
        </h2>

  {/* Cards grid */}
  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Card 1: Smart Suggestions (image) */}
          <GlowCard>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-[#0F1420]/60">
                <Image
                  src="/image.png"
                  alt="Smart Suggestions"
                  width={512}
                  height={442}
                  className="w-full h-auto block"
                  priority
                />
              </div>

              <CardCopy
                subtitle="Automate and personalize at scale"
                description="AI updates inventory, pricing, and suggests products — chatbot sells 24/7."
              />
            </div>
          </GlowCard>

          {/* Card 2: Sales Trend (image) */}
          <GlowCard>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-[#0F1420]/60">
                <Image
                  src="/image (1).png"
                  alt="Sales Trend"
                  width={512}
                  height={442}
                  className="w-full h-auto block"
                />
              </div>

              <CardCopy
                subtitle="Gain insights that drive smart growth"
                description="Get smart metrics on sales, team performance, and top products."
              />
            </div>
          </GlowCard>

          {/* Card 3: Product Customization (image) */}
          <GlowCard>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-[#0F1420]/60">
                <Image
                  src="/image (2).png"
                  alt="Product Customization"
                  width={512}
                  height={442}
                  className="w-full h-auto block"
                />
              </div>

              <CardCopy
                subtitle="From bridal to bespoke, delight all"
                description="Offer layaway options, custom sizes, engraving, and gifting personalization — all directly in your platform."
              />
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

function GlowCard({ children }) {
  return (
    <div className="group relative rounded-2xl transition-colors duration-300">
      <div className="rounded-2xl bg-[#0B0F18]/90 backdrop-blur-sm p-5 sm:p-6 h-full">
        {children}
      </div>
      {/* Outer ambient glow on hover (keeps the vibe without any visible border) */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300 bg-[radial-gradient(closest-side,rgba(85,208,255,0.18),rgba(85,208,255,0))]" />
    </div>
  );
}

function Bubble({ children, align = "left", tone = "base", ...props }) {
  const base = "px-3 py-2 text-xs rounded-lg border inline-block max-w-[80%]";
  const side = align === "right" ? "ml-auto text-right" : "";
  const palette =
    tone === "alt"
      ? "bg-[#111827] border-white/10 text-white/80"
      : "bg-white/[0.03] border-white/10 text-white/80";
  return (
    <div className={`${base} ${side} ${palette}`} {...props}>
      {children}
    </div>
  );
}

function CardCopy({ subtitle, description }) {
  return (
    <div>
      <h3 className="text-white/90 text-base sm:text-lg font_neue_montreal_medium">{subtitle}</h3>
      <p className="mt-1 text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
