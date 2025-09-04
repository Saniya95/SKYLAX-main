import React from "react";
import BenifitPlans from "../Pricing/benifitsPlans";
import BenefitsHorizontalScroll from "../AISolution/benefits";
import Problems from "../Industry/problems";
import OurClients from "@/components/OurClients";
import Faq from "@/common/layout/faq";
import Cta from "@/common/layout/cta";
import Pricing from "@/common/layout/pricing";
import BusinessGrowth from "@/components/BusinessGrowth";
import ScalableBusinessSolutions from "@/components/ScalableBusinessSolutions";
import techIntegration from "../../../public/assets/images/techIntegration.png";
import automatedMarketing from "../../../public/assets/images/automatedMarketing.png";
import inventoryManagement from "../../../public/assets/images/inventoryManagement.png";
import smartDesignBuilder from "../../../public/assets/images/smartDesignBuilder.png";
import faqGradients from "../../../public/assets/images/graph-mobil-only.png";
import csfw from "../../../public/assets/images/csfw.png";
import ssyb from "../../../public/assets/images/ssyb.png";
import stwao from "../../../public/assets/images/stwao.png";
import Banner from "./Banner";

// ssyb.png
// stwao.png
// csfw.png

const TemplateService = () => {
  let features = [
    {
      number: "01",
      title: "Smart  design builder",
      content:
        "Intuitive design builder that works seamlessly across devices, including tablets and smartphones for in-store and on-the-go sales. Website builders offer SEO tools, social media integration, email marketing, and ad campaign support.",
      image: smartDesignBuilder,
    },
    {
      number: "02",
      title: "Automated marketing",
      content:
        "Utilize email, SMS, direct mail, and targeted promotions to connect with customers and boost sales. Customer segmentation for targeted promotions.",
      image: automatedMarketing,
    },
    {
      number: "03",
      title: "Inventory management",
      content:
        "Real-time stock tracking updates inventory across sales channels, while low-stock alerts help with timely reordering, and SKU management simplifies product organization.",
      image: inventoryManagement,
    },
    {
      number: "04",
      title: "Tech integration",
      content:
        "Connect payment gateways, shipping providers, and analytics tools, streamlining operations and enhancing the customer experience.",
      image: techIntegration,
    },
  ];

  let sections = [
    {
      title: "Section 1",
      name: "Save time with AI optimizations",
      message:
        "Automate tasks like auto-filling inventory with AI tools to streamline operations and grow your business.",
      bgImage: "/assets/images/footerGradient.png",
      image: `${stwao.src}`,
      knowMore: true,
    },
    {
      title: "Section 2",
      name: "Customizable solutions for website",
      message:
        "Create and customize your website easily with flexible, user-friendly tools for a seamless shopping experience.",
      bgImage: "/assets/images/footerGradient.png",
      image: `${csfw.src}`,
    },
    {
      title: "Section 3",
      name: "Simplify & Scale your business",
      message:
        "Manage sales, marketing, and customer engagement in one platform with real-time insights, automation, and seamless integrations for hassle-free growth.",
      bgImage: "/assets/images/footerGradient.png",
      image: `${ssyb.src}`,
    },
    // Add more sections as needed
  ];

  return (
    <div>
      <Banner />
      <div className="relative z-20">
        <BenifitPlans
          heading={
            <>
              empower
              <br />
              your business
            </>
          }
          features={features}
          bgImage={faqGradients}
        />
        <BusinessGrowth />
        <BenefitsHorizontalScroll
          nobg={true}
          sections={sections}
          contentClass={`gap-8`}
          heading={
            <h1 className="stickyh pt-20 w-full text-[80px] uppercase tracking-[-0.03em] bg-[linear-gradient(300deg,_#2C3947_5.55%,_#F8F8FF_37.62%,_#F8F8FF_58.49%,_#1B2228_89.3%)] bg-clip-text text-transparent font_neue_montreal_regular leading-[5rem] text-center">
              tools that
              <br />
              work together
            </h1>
          }
        />
        <ScalableBusinessSolutions />
        <Problems />
        <OurClients />
        <Pricing />
        <Faq />
        <Cta />
      </div>
    </div>
  );
};

export default TemplateService;
