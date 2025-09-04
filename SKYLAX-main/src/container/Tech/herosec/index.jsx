import React from "react";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import solution from "../../../../public/assets/images/techVector.png";
import solutionMob from "../../../../public/assets/images/techVectorMob.png";
import { Button } from "@heroui/react";
import pdfVector from "../../../../public/assets/images/pdfVector.png";
import Elipse from "../../../../public/assets/images/AisolElipse.png";

const HeroSec = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        position: "relative",
        overflow: "hidden ",
        zIndex: "0",
      }}
      className="sm:py-[100px] py-[25px] px-0"
    >
      <Image
        src={Elipse}
        alt="elipse"
        width={1920}
        height={1080}
        className="w-full h-auto absolute"
      />
      <Container maxWidth="xl">
        <div className="w-full h-full relative flex items-center justify-center py-40">
          <div className="absolute">
            <div className="relative flex items-center justify-center">
              <Image
                src={solution}
                alt="solutionvector"
                width={1920}
                height={1080}
                className="sm:flex hidden w-full h-auto txt-img-bl-overlay txt-img-blk-dkp"
              />

              <Image
                src={solutionMob}
                alt="solutionvector"
                width={1920}
                height={1080}
                className="flex sm:hidden w-full h-auto txt-img-bl-overlay txt-img-blk-dkp"
              />

              <div className="absolute top-[6%] sm:left-[2%] left-[30%] flex items-center justify-center">
                <Image src={pdfVector} alt="star" className="sm:w-[18px] w-[16px] h-auto" />
                <p className="sm:pl-[12px] pl-[6px] sm:text-[18px] text-[16px] leading-[120%] tracking-[0.01em] text-white">
                  Document
                </p>
              </div>

              <h1 className="absolute sm:text-[110px] text-[56px] sm:left-[22%] left-[0%] top-[25%] sm:text-left text-center uppercase tracking-[-0.03em] bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular leading-[90%]">
              Our Privacy Policy
              </h1>
            </div>
          </div>
        </div>
        
      </Container>

      {/* ✅ Image contained within Box */}
      {/* <div className="absolute top-0 right-0 w-full z-[-1] ">
        <Image
          src={Elipse}
          alt="elipse"
          className="w-full pointer-events-none"
        />
      </div> */}
    </Box>
  );
};

export default HeroSec;
