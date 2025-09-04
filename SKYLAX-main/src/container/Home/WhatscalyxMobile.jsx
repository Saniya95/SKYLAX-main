import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import indecate1 from "../../../public/assets/logoAndIcons/indecate1.svg";
import indecate2 from "../../../public/assets/logoAndIcons/indecate2.svg";
import ExploreCard from "@/components/ExploreCard";
import SmartSol from "@/components/SmartSol";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";

const WhatscalyxMobile = () => {
  const exploreCard = [
    {
      image: "/assets/logoAndIcons/icon1.svg",
      name: "Smart inventory management",
      message: "Effortlessly manage products, variants, and stock...",
    },
    {
      image: "/assets/logoAndIcons/icon2.svg",
      name: "Powerful webpage tools",
      message: "Build an AI-driven store with Scalyx...",
    },
    {
      image: "/assets/logoAndIcons/icon3.svg",
      name: "Customer relationship management",
      message: "Maximize sales with Scalyx CRM...",
    },
    {
      image: "/assets/logoAndIcons/icon4.svg",
      name: "Comprehensive reporting & Analytics",
      message: "Get real-time insights into sales...",
    },
    {
      image: "/assets/logoAndIcons/icon5.svg",
      name: "Accounting & Financial tracking",
      message: "Keep your finances in check with Scalyx...",
    },
    {
      image: "/assets/logoAndIcons/icon6.svg",
      name: "Efficient staff & Workflow management",
      message: "Our AI-driven system streamlines operations...",
    },
    {
      image: "/assets/logoAndIcons/icon7.svg",
      name: "Price & Markdown management",
      message: "Automatically adjust prices, apply discounts...",
    },
    {
      image: "/assets/logoAndIcons/icon8.svg",
      name: "Webpage shop integration",
      message: "Sync inventory, update prices, and manage orders...",
    },
  ];

  const containerRef = useRef(null);
  const total = exploreCard.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current index from scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.floor(latest * total);
    setCurrentIndex(Math.min(index, total - 1));
  });

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* About */}
      <div className=" sm:sticky top-10 w-full px-4 py-6 flex flex-col items-start gap-4">
        <div className="w-full relative mb-2">
          <Image src={indecate1} alt="indecate" />
          <p className="absolute top-[12%] left-[6%] text-base uppercase">
            About
          </p>
        </div>
        <h1 className="text-2xl font-bold uppercase tracking-tight bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#F8F8FF] bg-clip-text text-transparent font_neue_montreal_regular w-full">
          What is scalyx?
        </h1>
        <p className="text-base text-[#899099] font_neue_montreal_regular leading-snug">
          We are a high-end all-in-one retail management system...
        </p>
      </div>

      <div className="my-10"></div>

  {/* Features Section (inherits background from parent for seamless flow) */}
<div className="w-full flex flex-col">

  {/* Sticky Header */}
  <div className=" sticky top-10 z-20 bg-cover bg-center">
    <div className="w-full px-4 sm:px-2 sm:py-3 py-6 flex flex-col items-center sm:gap-2 gap-4">
      <div className="w-full relative flex items-center justify-center mb-2">
        <Image src={indecate2} alt="indecate" />
        <p className="absolute top-[12%] left-1/3 text-base uppercase">
          features
        </p>
      </div>
      <h1 className=" text-2xl sm:text-xl font-bold text-center uppercase tracking-tight bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#F8F8FF] bg-clip-text text-transparent font_neue_montreal_regular w-full">
        Explore Potential
      </h1>
      <p className="text-base sm:text-small text-center text-[#F3F6FF] font-normal font_neue_montreal_regular leading-snug">
        Features that make your business processes more efficient.
      </p>
    </div>
  </div>

  {/* Scroll Cards */}
  <div
    ref={containerRef}
    className="relative w-full sm:mt-[-10]"
    style={{ height: `${total * 100}vh` }}
  >
    {exploreCard.map((card, i) => {
      const start = i / total;
      const end = (i + 1) / total;

      const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
      const scale = useTransform(scrollYProgress, [start, end], [1, 0.95]);
      const y = useTransform(scrollYProgress, [start, end], [0, 90]);

      return (
        <motion.div
          key={i}
          className="sticky top-[120px] h-screen  sm:h-[90vh] flex flex-col  items-center justify-start py-[165px] "
          style={{ opacity, scale, y }}
        >
          <ExploreCard
            cardclassName="w-full max-w-[90vw] px-4"
            v={card}
            i={i}
          />
           <div className="w-full sm:hidden flex flex-col items-center justify-center gap-1 mt-8">
    <span>{`${String(currentIndex + 1).padStart(2, "0")}/${String(total).padStart(2, "0")}`}</span>
    <span className="text-[#F3F6FF80]">Scroll to explore</span>
  </div>
        </motion.div>
      );
    })}
  </div>

  {/* Indicator */}
 
</div>


      <div className="my-20"></div>
      <SmartSol />
    </div>
  );
};

export default WhatscalyxMobile;
