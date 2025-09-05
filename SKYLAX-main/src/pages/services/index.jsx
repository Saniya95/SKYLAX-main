import React from "react";
import SEO from "@/utils/seo";
import ServicesGradientWrapper from "@/components/Gradients/ServicesGradientWrapper";
import ServicesSection from "@/components/Services/ServicesSection";

export default function ServicesIndex() {
  const sections = [
    { id: "commerce", eyebrow: "Store website", title: "COMMERCE SOLUTIONS", subtitle: "All‑in‑one tools to build, present, and grow your business online." },
    { id: "crm", eyebrow: "Chatbot", title: "CRM PLATFORM", subtitle: "All‑in‑one tools to engage customers, build loyalty, and grow relationships." },
    { id: "pos", eyebrow: "Reporting", title: "POS SYSTEMS", subtitle: "All‑in‑one tools to streamline sales and improve daily performance." },
    { id: "ops", eyebrow: "Dashboard", title: "OPERATIONS CENTER", subtitle: "All‑in‑one tools to simplify, automate, and scale operations." },
    { id: "inventory", eyebrow: "Procurement", title: "INVENTORY CONTROL", subtitle: "All‑in‑one tools to manage, track, and optimize inventory." },
  ];

  return (
    <>
      <SEO title="Services" />
      {/* Single gradient overlay spans all sections below */}
      <ServicesGradientWrapper>
        <div className="header_con py-16 sm:py-24">
          <h1 className="text-4xl sm:text-6xl font_neue_montreal_regular text-center">Our Services</h1>
        </div>
        <div className="flex flex-col divide-y divide-white/5">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <ServicesSection eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
            </div>
          ))}
        </div>
      </ServicesGradientWrapper>
    </>
  );
}
