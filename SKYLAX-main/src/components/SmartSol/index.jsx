import { Button } from "@heroui/react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import aiImg1 from "../../../public/assets/images/ai-img1.png";
import aiImg2 from "../../../public/assets/images/ai-img2.png";
import aiImg3 from "../../../public/assets/images/ai-img3.png";
import aiImg4 from "../../../public/assets/images/ai-img4.png";
import handImg from "../../../public/assets/images/hand-img.png";

const SmartSol = () => {
  const smartAI = [
    {
      image: aiImg1.src,
      cardTitle: "Smart Scalyx chatbot",
      cardMessage:
        "Move beyond reactive decision-making to proactive strategy with AI that thinks like a retail expert.",
      details: [
        { title: "Contextual understanding", message: "Process and interpret complex retail data across inventory, sales, customer behavior, and market trends." },
        { title: "Predictive analytics", message: "Anticipate market shifts, customer needs, and operational challenges before they impact your business." },
        { title: "Continuous learning", message: "Evolve and improve with every interaction, becoming more aligned with your specific retail environment." },
        { title: "Actionable insights", message: "Convert complex data patterns into clear, actionable recommendations for immediate implementation." },
      ],
    },
    {
      image: aiImg2.src,
      cardTitle: "Automation with AI agents Inventory Management",
      cardMessage:
        "Deploy a digital workforce that never sleeps, never takes breaks, and continuously improves its own performance.",
      details: [
        { title: "Autonomous task execution", message: "Eliminate repetitive work with AI agents that handle routine processes without human intervention." },
        { title: "Adaptive workflow intelligence", message: "Automatically optimize processes based on changing conditions and priorities." },
        { title: "Cross-system orchestration", message: "Connect siloed systems with AI agents that move data and trigger actions across your tech stack." },
        { title: "Exception management", message: "Intelligently route complex cases to the right human experts only when necessary." },
      ],
    },
    {
      image: aiImg3.src,
      cardTitle: "AI-driven suggestions",
      cardMessage:
        "Turn every store into a fulfillment center and every website into a showroom with Unified Stock - where your inventory works as hard as you do.",
      details: [
        { title: "Unified stock management", message: "Seamlessly blend online and in-store inventory into one powerful ecosystem." },
        { title: "Dynamic pricing intelligence", message: "Responds to market changes in real-time to protect margins." },
        { title: "Streamline operations", message: "Automating routine decisions, freeing your team to focus on strategy." },
        { title: "Enhance customer experiences", message: "Personalized recommendations that drive larger basket sizes." },
      ],
    },
    {
      image: aiImg4.src,
      cardTitle: "CRM solutions with AI",
      cardMessage:
        "Turn every interaction into an opportunity with AI that understands your customers better than the competition.",
      details: [
        { title: "Predictive customer behavior", message: "Anticipate needs and preferences before customers even express them." },
        { title: "Personalization at scale", message: "Deliver tailored experiences to every customer across all touchpoints." },
        { title: "Relationship intelligence", message: "Identify high-value customers and uncover opportunities to deepen engagement." },
        { title: "Automated journey orchestration", message: "Create seamless customer experiences that adapt in real-time." },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  return (
  <section className="relative w-full">
      {/* Background is provided by the shared parent wrapper to ensure seamless flow */}
  <div className="relative z-10 header_con lg:!mb-[-5rem] md:!mb-[-13rem]">
        <div className="flex flex-col">
          <div className="text-center max-w-[583px] my-0 mx-auto ">
            <h1 className="sm:text-[76px] text-[48px] cmn_heading font_neue_montreal_regular leading-[1] layer-title-gradient">
              Smart AI Solutions
            </h1>
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:flex relative w-full flex-col sm:flex-row items-start justify-between gap-[3%] sm:pt-14 pt-10 sm:pb-[18rem] pb-10">
            {/* Left copy + controls */}
            <div className=" sm:w-[30%] w-full sm:h-[27rem] h-[12rem] flex flex-col justify-between">
              <h2 className="w-[70%] sm:text-[43px] text-[32px] leading-[120%] sm:text-left text-center font_neue_montreal_regular">
                {smartAI[index]?.cardTitle}
              </h2>
              <div className="w-full flex flex-col gap-12">
                <p className="w-[88%] sm:text-[22px] text-lg sm:text-left text-center !font-normal text-[#F3F6FF] leading-[120%] tracking-[-2%] gap-[42.90px] font_neue_montreal_regular">
                  {smartAI[index]?.cardMessage}
                </p>
                <div className="sm:flex hidden items-center gap-6">
                  <Button
                    variant="outline"
                    className={`!min-w-16 !min-h-16 p-0 border border-solid ${index === 0 ? "border-[#899099]" : "border-[#F3F6FF]"}`}
                    onClick={() => setIndex((i) => Math.max(0, i - 1))}
                  >
                    <ArrowLeftIcon className="h-4 w-4 text-[#899099]" />
                  </Button>
                  0{index + 1}/0{smartAI.length}
                  <Button
                    variant="outline"
                    className={`!min-w-16 !min-h-16 p-0 border border-solid ${index === smartAI.length - 1 ? "border-[#899099]" : "border-[#F3F6FF]"}`}
                    onClick={() => setIndex((i) => Math.min(smartAI.length - 1, i + 1))}
                  >
                    <ArrowLeftIcon className="h-4 w-4 rotate-180 text-[#F3F6FF]" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Center image over hand with CTA */}
            <div className="sm:w-[30%] w-full relative sm:flex hidden items-center justify-center ml-2">
              <Image src={smartAI[index]?.image} alt="ai-visual" width={192} height={108} className="w-auto h-[27rem]" />
              <Image src={handImg} alt="hand-img" className="absolute bottom-[-75%] md:bottom-[-55%] 1092:right-[54%] md:right-[55%] 1241:right-[57%] 1366:right-[55.8%] -z-10 w-[90%] md:w-[90%] lg:w-[90%] xl:w-[87%]" />
              <div className="absolute bottom-[-50%] md:bottom-[-40%] z-10 w-full sm:flex hidden items-center justify-center">
                <Button color="primary" variant="faded" className="px-[58px] py-[25px] text-[17px] border-[#F3F6FF] text-[#F3F6FF] font-normal font_neue_montreal_regular bg-transparent !rounded-[16px] flex justify-center items-center">
                  Know more
                </Button>
              </div>
            </div>

            {/* Right checklist */}
            <div className="sm:w-[33%] w-full flex-col gap-3 items-start sm:flex hidden sm:my-0 my-8">
              {smartAI[index]?.details.map((val, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckIcon className="h-6 w-6 text-[#6952FD] mt-1" />
                  <div className="w-full flex flex-col gap-3">
                    <h2 className="sm:text-[22px] text-lg font_neue_montreal_regular text-[#F3F6FF]">{val.title}</h2>
                    <p className="text-[15px] tracking-[-1%] font_neue_montreal_regular text-[#899099] w-[87%]">{val.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stacked cards */}
          <div className="sm:hidden w-full">
            <div ref={containerRef} className="relative w-full z-10 mt-5 mb-10">
              <div className="sticky top-20 z-10 px-4 pt-5">
                <h2 className="text-[24px] leading-[120%] text-center font_neue_montreal_regular">{smartAI[index]?.cardTitle}</h2>
                <p className="text-[14px] text-[#F3F6FF] leading-[120%] text-center mt-2 font_neue_montreal_regular">{smartAI[index]?.cardMessage}</p>
              </div>
        {smartAI.map((v, i) => (
                <div key={i} className="mobileCard relative h-auto flex flex-col items-center justify-center px-4 py-6">
                  <div className="w-full max-w-md p-[1.5px] rounded-2xl bg-[linear-gradient(180deg,rgba(85,208,255,0.35),rgba(99,97,252,0.28))]">
                    <div className="rounded-2xl bg-[linear-gradient(180deg,rgba(20,22,26,0.8),rgba(20,22,26,0.45))] p-5 shadow-xl border border-[#2A2C3D] flex flex-col gap-5">
                      {v.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckIcon className="h-6 w-6 text-[#6952FD] mt-1 shrink-0" />
                          <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-medium text-[#F3F6FF] font_neue_montreal_regular">{detail.title}</h2>
                            <p className="text-sm text-[#899099] font_neue_montreal_regular">{detail.message}</p>
                          </div>
                        </div>
                      ))}
                      <div className="sm:hidden flex flex-col w-full gap-5">
                        <Button color="primary" variant="faded" className="w-full py-6 px-6 text-[18px] border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent !rounded-[16px] flex justify-center items-center">Know more</Button>
                        <div className="w-full flex flex-col items-center justify-center gap-1">
                          <span>{`0${String(i + 1).padStart(2, "0")}/0${String(smartAI.length).padStart(2, "0")}`}</span>
                          <span className="text-[#F3F6FF80]">Swipe to explore</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSol;
