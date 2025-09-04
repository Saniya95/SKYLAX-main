import React from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import solution from "../../../../public/assets/images/banner-vector.png";
import { Button } from "@heroui/react";
import trp_star from "../../../../public/assets/logoAndIcons/trp_star.svg";
import Elipse from "../../../../public/assets/images/AisolElipse.png";
import bgtext from "../../../../public/assets/images/bgtext.png";

const HeroSec = () => {
  return (
    <div
      style={{
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
        zIndex: "0",
        backgroundColor: "#000",
      }}
      className="md:pt-24 md:pb-32 pt-16 pb-20"
    >
      {/* Background Elipse */}
      <Image
        src={Elipse}
        alt="elipse"
        width={1920}
        height={1080}
        className="w-full h-auto absolute top-0 left-0 z-0"
        priority
      />

      <Container maxWidth="xl" className="relative z-10">
        {/* Main Content */}
        <div className="w-full flex flex-col items-center justify-center md:pt-24 pb-16 relative">
          <div className="relative flex items-center justify-center w-full">
            {/* Desktop image */}
            <Image
              src={solution}
              alt="solutionvector"
              width={1920}
              height={1080}
              className="w-full h-auto hidden md:block"
              priority
            />

            {/* Mobile image */}
            <Image
              src={bgtext}
              alt="bgtext"
              width={1920}
              height={1080}
              className="w-full h-auto block md:hidden"
              priority
            />

            {/* Star Label */}
            <div
              className="
                           absolute flex items-center
                           top-[9%] left-[30%]             
                           sm:top-[8%] sm:left-[8%]      
                           md:top-[2%] md:left-[1%]    
                           lg:top-[2%] lg:left-[1%]     
                           xl:top-[3%] xl:left-[2%]
                           
                           "
            >
              <Image
                src={trp_star}
                alt="star"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-10 lg:w-12 lg:h-12"
              />
              <p className="pl-2 text-xs sm:text-sm md:text-sm lg:text-xl leading-[120%] tracking-[0.01em] text-white">
                AI-powered tools
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
        absolute uppercase tracking-[-0.03em]
        bg-[linear-gradient(300.27deg,_#cbcbcb_2.03%,_#F8F8FF_40.42%,_#F8F8FF_65.38%,_#1B2228_102.26%)]
        bg-clip-text text-transparent font_neue_montreal_regular text-left leading-tight md:leading-[5.9rem]

        left-[18%] top-[25%] text-[2.5rem]        /* Mobile default */
        sm:left-[12%] sm:top-[24%] sm:text-[2.5rem] /* ≥640px */
        md:left-[27%] md:top-[23%] md:text-[4rem]   /* ≥768px */
        lg:left-[22%] lg:top-[25%] lg:text-[5.5rem] /* ≥1024px */
        xl:left-[25%] xl:top-[27%] xl:text-[6.5rem] /* ≥1280px */
      "
            >
              Innovative
              <br />
              AI-Solutions
            </h1>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0 pt-4 md:pl-[29%]">
          <Button
            color="primary"
            variant="faded"
            className="px-8 py-4 text-base sm:px-12 sm:py-6 sm:text-lg border-none text-[#080707] font_neue_montreal_medium bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[12px] md:rounded-[16px] flex justify-center items-center"
          >
            Get a Demo
          </Button>
          <p className="max-w-xs sm:max-w-sm md:max-w-[325px] text-base sm:text-lg md:text-xl tracking-[-0.02em] leading-[130%] font-normal font_neue_montreal_regular text-[#fff] text-center md:text-left">
            Unlock growth and efficiency with AI solutions to elevate your
            business.
          </p>
        </div>
      </Container>
 {/* ✅ Image contained within div */}
      {/* <div className="absolute top-0 right-0 w-full z-[-1] ">
        <Image
          src={Elipse}
          alt="elipse"
          className="w-full pointer-events-none"
        />
      </div> */}   
       </div>
  );
};

export default HeroSec;
