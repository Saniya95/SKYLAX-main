import React from "react";
import SEO from "@/utils/seo";
import ServicesGradientWrapper from "@/components/Gradients/ServicesGradientWrapper";
import Image from "next/image";

export default function CRMPage() {
  return (
    <>
      <SEO title="CRM" />
      <ServicesGradientWrapper>
        <section className="relative w-full overflow-hidden">
          {/* Background gradients */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-[25%] left-[10%] w-[620px] h-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(99,97,252,0.25),rgba(99,97,252,0.0))]" />
            <div className="absolute top-[5%] right-[5%] w-[480px] h-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(85,208,255,0.18),rgba(85,208,255,0.0))]" />
          </div>

          <div className="relative z-10 header_con pt-20 pb-16">
            {/* Top meta row (moved onto tablet as overlay on md+) */}
            <div className="hidden">
              <span className="inline-flex items-center gap-2 text-xs text-[#B5C7D1] bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-[#55D0FF]" />
                Chatbot
              </span>
              <span className="text-sm max-w-xs text-[#B5C7D1] text-right">
                All-in-one tools to engage customers, build loyalty, and grow relationships.
              </span>
            </div>

            {/* Big stacked heading - CENTERED; glass uses custom gradient */}
            <div className="mt-6 text-center -mb-4 sm:-mb-8 lg:-mb-12 relative z-20 translate-y-8 sm:translate-y-11 lg:translate-y-[52px]">
              <div className="inline-block mx-auto rounded-2xl bg-[linear-gradient(74.03deg,#1B2128_44.84%,#3B6078_84.85%)] backdrop-blur-md px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <h2 className="font_neue_montreal_regular leading-[0.95] uppercase">
                  <span className="block text-[40px] sm:text-[64px] lg:text-[84px] tracking-tight text-white/90">CRM</span>
                  <span className="block text-[48px] sm:text-[72px] lg:text-[96px] tracking-tight text-white/60">PLATFORM</span>
                </h2>
              </div>
            </div>

            {/* Center device - Context PNG */}
            <div className="-mt-6 sm:-mt-8 lg:-mt-12 flex items-center justify-center">
              <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto relative z-10">
                <Image
                  src="/804b302e2d224809788fd47928b421b557fc8620.png"
                  alt="CRM context image"
                  width={1152}
                  height={768}
                  className="w-full h-auto select-none pointer-events-none drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]"
                  priority
                />
                {/* Overlay: badge + subtitle at tablet right center on md+ */}
                <div className="hidden md:flex flex-col items-end gap-3 absolute top-1/2 -translate-y-[62%] -right-4 lg:-right-8 xl:-right-12">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/90 bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.25)]">
                    <span className="w-2 h-2 rounded-full bg-[#55D0FF]" />
                    Chatbot
                  </span>
                  <span className="text-sm md:text-base lg:text-lg max-w-[22rem] text-white/90 text-right leading-snug">
                    All-in-one tools to engage customers, build loyalty, and grow relationships.
                  </span>
                </div>
              </div>
            </div>

            {/* Right-aligned subtitle on small screens */}
            <div className="mt-6 md:hidden">
              <p className="text-sm text-[#B5C7D1] text-center">All-in-one tools to engage customers, build loyalty, and grow relationships.</p>
            </div>
          </div>
        </section>
      </ServicesGradientWrapper>
    </>
  );
}
