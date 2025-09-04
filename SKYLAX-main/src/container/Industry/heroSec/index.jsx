import React from "react";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import solution from "../../../../public/assets/images/banner-vector.png";
import solution2 from "../../../../public/assets/images/banner-vector-2.png";
import { Button } from "@heroui/react";
import trp_star from "../../../../public/assets/logoAndIcons/trp_star.svg";
import Elipse from "../../../../public/assets/images/AisolElipse.png";

const HeroSec = () => {
  return (
    <Box
      sx={{
        padding: { xs: "60px 0px 60px 0px", md: "100px 0px 100px 0px" },
        bgcolor: "#000",
        position: "relative",
        overflow: "hidden ",
        zIndex: "0",
      }}
    >
      <Image
        src={Elipse}
        alt="elipse"
        width={1920}
        height={1080}
        className="w-full h-auto absolute"
      />
      <Container maxWidth="xl">
        <div className="w-full h-full relative flex items-center justify-center md:py-40 py-20">
          <div className="absolute">
            <div className="relative flex items-center justify-center">
              <Image
                src={solution}
                alt="solutionvector"
                width={1920}
                height={1080}
                className="w-full h-auto txt-img-bl-overlay txt-img-blk-dkp sm:flex hidden"
              />
              <Image
                src={solution2}
                alt="solutionvector2"
                width={1920}
                height={1080}
                className="w-full h-auto txt-img-bl-overlay txt-img-blk-dkp flex sm:hidden"
              />

              <div className="absolute top-[6%] sm:left-[2%] left-[38%] flex items-center justify-center">
                <Image
                  src={trp_star}
                  alt="star"
                  className="w-[18px] md:w-auto"
                />
                <p className="pl-[9px] text-[14px] md:text-[18px] leading-[120%] tracking-[0.01em] text-white">
                  Retail
                </p>
              </div>

              <h1 className="absolute text-[56px] sm:text-[100px] left-[5%] sm:left-[22%] top-[25%] text-center uppercase tracking-[-0.03em] bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular sm:leading-[5.9rem] leading-[3rem]">
                Jewelry &
                <br />
                watches
              </h1>
            </div>
          </div>
        </div>
        <div className="md:pl-[29%] pl-0 flex flex-col md:flex-row md:justify-between justify-center items-center md:items-end pt-2 gap-6 md:gap-0">
          <Button
            color="primary"
            variant="faded"
            className="mt-4 md:mt-14 py-4 md:py-6 px-4 md:px-6 text-[16px] md:text-[18px] text-[#080707] font-normal bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[12px] md:rounded-[16px] flex justify-center items-center"
          >
            Get a Demo
          </Button>
          <p className="md:w-[325px] w-full text-[18px] md:text-[24px] tracking-[-0.02em] leading-[120%] font-normal font_neue_montreal_regular text-[#fff] z-10 text-center md:text-left">
            We empower retailers with cutting-edge solutions that streamline
            operations.
          </p>
        </div>
      </Container>
    </Box>
  );
};

export default HeroSec;
