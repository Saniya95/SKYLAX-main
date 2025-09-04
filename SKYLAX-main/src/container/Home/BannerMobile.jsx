import Image from "next/image";
import React from "react";
import trp_star from "../../../public/assets/logoAndIcons/trp_star.svg";
import heroTab from "../../../public/assets/mobileImages/heroTab.png";
import handOverlay from "../../../public/assets/images/handOverlay.png";
import banner from "../../../public/assets/mobileImages/banner2.svg";
import aboutOvrl from "../../../public/assets/images/about-ovrl.png";
import { Container } from "@mui/material";
import { Button, Input } from "@heroui/react";
import AppleIcon from "@mui/icons-material/Apple";
import abt_img_2 from "../../../public/assets/images/abt-img-2.png";
import arrowDrop from "../../../public/assets/logoAndIcons/arrowDrop.svg";

const BannerMobile = () => {
  return (
    <div className="relative flex flex-col w-full py-4">
      <Image
        src={aboutOvrl}
        alt="aboutOvrl"
        className="absolute w-full h-[94%]"
      />
      <div className="flex flex-col items-center gap-6">
        <div className="relative px-9 flex items-center justify-center">
          <Image
            src={banner}
            alt="banner"
            width={1920}
            height={1080}
            className="w-full h-full"
          />
          <div className="absolute top-3 flex flex-col gap-3 items-center">
            <div className="flex gap-4">
              <Image src={trp_star} alt={"trp_star"} />
              <p className="font_neue_montreal_medium text-base">
                AI-solutions
              </p>
            </div>
            <h1 className="w-[70%] text-[56px] text-center uppercase tracking-[-0.03em] bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular leading-[100%]">
              scale your Business
            </h1>
          </div>
        </div>
        <p className="font_neue_montreal_regular w-[90%] text-lg text-[#F3F6FF] text-center">
          All-in-one AI-powered retail management system for seamless
          operations.
        </p>
        <div className="w-[90%] flex flex-col items-center gap-2 mt-6">
          <Input
            variant="solid"
            className="!w-full !bg-[#47596833] !rounded-2xl py-1 custom_gradient_bg"
            name="email"
            placeholder="What's your email?"
          />
          <Button
            color="primary"
            variant="faded"
            className="w-full h-12 text-[18px] border-none text-[#080707] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-2xl flex justify-center items-center font_neue_montreal_medium capitalize relative"
          >
            Get started now
          </Button>
        </div>
        <div className="bg-gradient-to-t from-[#080707] via-[#080707dd] to-[#08070700] z-30 flex flex-col items-center gap-2">
          <Image
            src={arrowDrop}
            alt="arrowDrop"
            className="mt-9 cursor-pointer"
            onClick={() => {
              // Smooth scroll to the next section
              const nextSection = document.querySelector(".scrll_there");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
          <Image
            src={abt_img_2}
            alt="abt_img"
            width={1920}
            height={1080}
            className="w-[90%] mb-[8rem] scrll_there"
          />
          <div className="absolute bottom-[3rem] flex flex-col justify-between gap-6 w-[90%] items-center p-6 rounded-2xl z-30 bg-[linear-gradient(65.85deg,_#1B2128_31.56%,_#3B6078_82.41%)]">
            <p className="text-[#F3F6FF] text-base leading-[110%] text-center font_neue_montreal_medium uppercase">
              All-in-one control for sales,
              <br />
              stock & service
            </p>
            <Button
              color="primary"
              variant="faded"
              className="w-[244px] h-16 text-[18px] border-none text-[#080707] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-2xl flex justify-center items-center font_neue_montreal_medium capitalize relative"
            >
              <AppleIcon className="mb-1" />
              Download The App
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#080707] via-[#080707dd] to-[#08070700] relative mt-[-16.5rem] w-full flex justify-center">
        <Image
          src={handOverlay}
          alt="handOverlay"
          className="w-full h-[350px] z-20"
        />
        <div className="absolute bottom-0 z-30 flex flex-col items-center justify-center gap-6">
          {/* <p className="font_neue_montreal_regular w-[90%] text-lg text-[#F3F6FF] text-center">
            All-in-one AI-powered retail management system for seamless
            operations.
          </p> */}
          {/* <Container maxWidth={"xl"}>
            <Button
              color="primary"
              variant="faded"
              className="w-full py-6 px-8 text-[18px] border-none text-[#080707] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] flex justify-center items-center font_neue_montreal_medium"
            >
              <AppleIcon />
              &nbsp;Download the App
            </Button>
          </Container> */}
        </div>
      </div>
    </div>
  );
};

export default BannerMobile;
