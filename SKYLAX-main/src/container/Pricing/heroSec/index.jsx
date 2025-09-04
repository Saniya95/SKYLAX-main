import React from "react";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import solution from "../../../../public/assets/images/Pricing-vector.png";
import solutionMobile from "../../../../public/assets/images/Pricing-vector-mob.png";
import { Button } from "@heroui/react";
import crown from "../../../../public/assets/images/crown.png";
import Elipse from "../../../../public/assets/images/features-img-ovrl.png";

const HeroSec = () => {
  return (
    <Box
      sx={{ padding: "100px 0px 60px 0px", position: "relative", zIndex: "0" }}
    >
      <Container maxWidth="xl">
        <div className="flex justify-center items-center relative">
          <Image
            src={solution}
            alt="solutionvector"
            className="w-[768px] sm:flex hidden"
          />
          <Image
            src={solutionMobile}
            alt="solutionvector"
            className="w-[auto] sm:hidden flex"
          />

          <div className="absolute sm:top-[86%] top-[8%] sm:left-[2.5%] left-[25%] flex items-center justify-center">
            <Image src={crown} alt="star" className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] " />
            <p className="pl-[9px] sm:text-[18px] text-[16px] leading-[120%] tracking-[0.01em] text-white">
              Scalable plans
            </p>
          </div>

          <h1 className="absolute sm:top-[35%] top-[40%] sm:left-[32%] left-[15%] text-[56px] sm:text-[56px] md:text-[56px] lg:text-[110px] leading-[90%] font-normal uppercase font_neue_montreal_regular tracking-[-0.03em] sm:max-w-[720px] max-w-[100%] bg-gradient-to-r from-[#3B6078] via-[#F8F8FF] to-[#1B2128] bg-clip-text text-transparent">
            Pricing
          </h1>
        </div>

        <div className="sm:pl-[29%] pl-[0%] text-center sm:text-left flex justify-end items-end pt-2">
          <p className="sm:w-[325px] w-[100%] sm:text-[24px] text-[18px] tracking-[-0.02em] leading-[120%] font-normal font_neue_montreal_regular text-[#fff] z-10">
            Select the ideal plan for your business and upgrade as you expand.
          </p>
        </div>
      </Container>

      {/* ✅ Image contained within Box */}
      {/* <div className="absolute top-[-80px] right-0  z-[-2] ">
    <Image src={Elipse} alt="elipse" className="w-full pointer-events-none" />
  </div> */}
    </Box>
  );
};

export default HeroSec;
