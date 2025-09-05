import React from "react";
import HeroSec from "./heroSec";
import Cta from "@/common/layout/cta";
import Faq from "@/common/layout/faq";
import VideoSec from "./videoSec";
import Vision from "./vision";
import SmartSol from "@/components/SmartSol";
import Image from "next/image";
import bgOvrSlid from "../../../public/assets/images/bg-ovr-slid.png";
import OurClients from "@/components/OurClients";
import BenefitsHorizontalScroll from "./benefits";
import srt from "../../../public/assets/images/srt.png";
import spt from "../../../public/assets/images/spt.png";
import andyCopper from "../../../public/assets/images/andyCopper.png";
import MobileCta from "@/common/layout/cta/mobileCta";
import ToolsTogetherSection from "@/components/AI/ToolsTogetherSection";
const AISolutationPage = () => {
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
  ];

  return (
    <div>
      <HeroSec />
      <VideoSec />
      <div className="relative w-full h-full flex flex-col ">
        <Image
          src={"/assets/images/features-img-ovrl.png"}
          alt="graph"
          className="absolute w-full h-full"
          width={1920}
          height={1080}
        />
        <Image
          src={bgOvrSlid}
          alt="bgOvrSlid"
          className="absolute top-[30%] right-[50%] w-full h-screen rotate-90"
        />
        <div className="z-10">
          <Vision />
          {/* <hr className="w-full border-[1.5px] border-solid border-[#5e697375] relative z-10 mb-20" /> */}
          <div className="mb-20" />
        </div>
        <div className=" relative w-full h-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
          <SmartSol />
        </div>
      </div>
  {/* Tools Together section placed right after Smart AI Solutions */}
  <ToolsTogetherSection />
      <div className="relative z-10">
        <BenefitsHorizontalScroll
          sections={sections}
          heading={
            <h1
              className="stickyh w-full uppercase tracking-[-0.03em] 
             bg-[linear-gradient(300deg,_#2C3947_5.55%,_#F8F8FF_37.62%,_#F8F8FF_58.49%,_#1B2228_89.3%)] 
             bg-clip-text text-transparent font_neue_montreal_regular 
             text-center 
             text-[36px] leading-[2.5rem] 
             sm:text-[48px] sm:leading-[3rem] 
             md:text-[64px] md:leading-[4rem] 
             lg:text-[80px] lg:leading-[5rem]"
            >
              Benefits of Growth
              <br />
              with Scalyx
            </h1>
          }
        />
      </div>
      <OurClients />
      <Faq />
      {/* for mobile and desktop */}
      <div className="sm:block hidden w-full">
        <Cta />
      </div>

      {/* for mobile*/}
      <div className="sm:hidden block w-full">
        <MobileCta />
      </div>
    </div>
  );
};

export default AISolutationPage;
