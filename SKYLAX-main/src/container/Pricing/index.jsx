import React from "react";
import HeroSec from "./heroSec";
import Cta from "@/common/layout/cta";
import Faq from "@/common/layout/faq";
import Plans from "./plans";
import BenifitPlans from "./benifitsPlans";
import ComparePlanFeatures from "./CompareFeatures";
import Elipse from "../../../public/assets/images/features-img-ovrl.png";
import AccordionImage from "../../../public/assets/logoAndIcons/priceBenifits.svg";
import AccordionImage1 from "../../../public/assets/logoAndIcons/priceBenifits1.svg";
import AccordionImage2 from "../../../public/assets/logoAndIcons/priceBenefits2.svg";

const Pricing = () => {
  let features = [
    {
      number: "01",
      title: "Scalability",
      content:
        "Various plans cater to different business needs, from basic inventory management to advanced enterprise solutions.",
      image: AccordionImage,
    },
    {
      number: "02",
      title: "Comprehensive features",
      content:
        "Gain access to a full suite of tools, including analytics, automation, reporting, and real-time collaboration, all in one seamless platform.",
      image: AccordionImage1,
    },
    {
      number: "03",
      title: "Automation & Efficiency",
      content:
        "Streamline your workflow with automated processes that save time, reduce errors, and enhance productivity. Focus on what matters most while our system handles the rest.",
      image: AccordionImage2,
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[url(/assets/images/features-img-ovrl.png)] bg-cover bg-no-repeat rounded-t-xl">
        <HeroSec />
        <Plans />
        {/* <hr className="border-[#5e697375] w-full border-[1.5px]" /> */}
        <h1 className="py-16 text-[48px] sm:text-[48px] md:text-[48px] lg:text-[80px] text-center lg:w-[818px] w-[100%] leading-[100%] tracking-[-3%] uppercase space-[42px] bg-gradient-to-br from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular">
          Compare plan features
        </h1>
      </div>
      <ComparePlanFeatures />
      <BenifitPlans heading={"Unlock Benefits with Every Plan"} features={features} />
      <Faq />
      <Cta />
    </div>
  );
};

export default Pricing;
