import React from "react";

import Cta from "@/common/layout/cta";
import Faq from "@/common/layout/faq";
import OurClients from "@/components/OurClients";

import BenefitsHorizontalScroll from "../AISolution/benefits";
import Plans from "../Pricing/plans";
import Problems from "./problems";
import HeroSec from "./heroSec";
import Whatscalyx from "../Home/Whatscalyx";
import RetailPotential from "./retail-potential";
import srt from "../../../public/assets/images/srt.png";
import spt from "../../../public/assets/images/spt.png";
import andyCopper from "../../../public/assets/images/andyCopper.png";

const Industryy = () => {
  let sections = [
    {
      title: "Section 1",
      name: "Boost efficiency instantly",
      message:
        "Automate repetitive tasks and streamline operations with AI-driven solutions designed to save time and reduce workload.",
      bgImage: "/assets/images/footerGradient.png",
      image: `${srt.src}`,
    },
    {
      title: "Section 2",
      name: "Make smarter decisions",
      message:
        "Use AI suggestions on inventory, sales, and trends to optimize restocking, pricing, and promotions—boost efficiency and profits effortlessly.",
      bgImage: "/assets/images/footerGradient.png",
      image: `${andyCopper.src}`,
    },
    {
      title: "Section 3",
      name: "Enhance customer connections",
      message:
        "Leverage AI to manage inquiries, personalize interactions, and streamline workflows—keeping customers engaged and boosting satisfaction.",
      bgImage: "/assets/images/footerGradient.png",
      image: `${spt.src}`,
    },
    // Add more sections as needed
  ];

  return (
    <div>
      <HeroSec />
      <RetailPotential />
      <div className="sm:pt-[150px] pt-[0px]">
        <BenefitsHorizontalScroll
          nobg={true}
          sections={sections}
          heading={
            <h1 className="stickyh sm:pt-20 pt-10 w-full sm:text-[80px] text-[48px] uppercase tracking-[-0.03em] bg-[linear-gradient(300deg,_#2C3947_5.55%,_#F8F8FF_37.62%,_#F8F8FF_58.49%,_#1B2228_89.3%)] bg-clip-text text-transparent font_neue_montreal_regular sm:leading-[5rem] leading-[1] text-center">
              tools that
              <br />
              work together
            </h1>
          }
        />
      </div>
      <Problems />
      <div className="sm:pt-[50px] pt-[25px]">
        <div className="flex justify-center">
          <h2 className="text-center sm:text-[80px] text-[48px] uppercase tracking-[-0.03em] bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#F8F8FF] bg-clip-text text-transparent font_neue_montreal_regular max-w-[800px] sm:leading-[100%] leading-[1] font-normal">
            Select the ideal plan for you
          </h2>
        </div>

        <Plans />
      </div>

      <OurClients />
      <Faq />
      <Cta />
    </div>
  );
};

export default Industryy;
