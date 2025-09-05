import Image from "next/image";
import React, { useEffect, useState } from "react";
import trp_star from "../../../public/assets/logoAndIcons/trp_star.svg";
import heroTab from "../../../public/assets/images/heroTab.png";
import handOverlay from "../../../public/assets/images/handOverlay.png";
import aboutOvrl from "../../../public/assets/images/about-ovrl.png";
import abt_img_2 from "../../../public/assets/images/abt-img-2.png";
import { Container } from "@mui/material";
import { Button, Input } from "@heroui/react";
import AppleIcon from "@mui/icons-material/Apple";
import arrowDrop from "../../../public/assets/logoAndIcons/arrowDrop.svg";

const Banner = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props?.heoData);
  }, [props?.heoData]);

  return (
    <div className="flex flex-col bg-[url(/assets/images/about-ovrl.png)] bg-cover bg-center bg-no-repeat relative">
      {/* Top-left gradient overlay (only gradient per reference) */}
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        {/* Primary purple glow in the extreme left corner */}
        <div className="absolute -top-[12%] -left-[14%] w-[1100px] h-[1100px] rounded-full 
          bg-[radial-gradient(closest-side,rgba(99,97,252,0.48),rgba(99,97,252,0.14),rgba(8,7,7,0))]" />
        {/* Soft blue accent slightly inward from the corner */}
        <div className="absolute top-[6%] left-[10%] w-[760px] h-[760px] rounded-full 
          bg-[radial-gradient(closest-side,rgba(85,208,255,0.32),rgba(85,208,255,0.10),rgba(8,7,7,0))]" />
        {/* Horizontal fade to keep right side darker like the ref */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,7,0.0)_0%,rgba(8,7,7,0.15)_55%,rgba(8,7,7,0.35)_80%,rgba(8,7,7,0.55)_100%)]" />
      </div>
      <div className="relative z-[1]">
        <div className="header_con">
          <div className="w-full h-full relative flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center gap-6">
              <div className="relative flex items-center justify-center ml-[140px]">
                <Image
                  src="/assets/logoAndIcons/partical1.svg"
                  className="w-16 h-16 absolute top-[3%] -left-[4.5%]"
                  alt="partical1"
                  width={192}
                  height={108}
                />
                <Image
                  src="/assets/images/home_banner_2.svg"
                  className="w-auto h-auto txt-img-bl-overlay txt-img-blk-dkp mt-[6%]"
                  alt="home_banner_2"
                  width={1920}
                  height={1080}
                />
                <h1 className="absolute text-[110px] right-[16%] top-[28%] text-center uppercase tracking-[-0.03em] bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular leading-[6.2rem] bannerHeading">
                  {/* {data?.content?.title} */} Scale Your Business
                </h1>
                <div className="absolute right-[2%] bottom-[16%] flex gap-4">
                  <Image src={trp_star} alt={"trp_star"} />
                  <p className="">AI-solutions</p>
                </div>
              </div>

              <p className="w-[36%] text-2xl text-center font_neue_montreal_regular tracking-[-0.02em] leading-7">
                All-in-one AI-powered retail management system for seamless
                operations.
              </p>

              <div className="w-[43%] flex items-center gap-2 mt-10">
                <Input
                  variant="solid"
                  className="!w-full !bg-[#47596833] !rounded-2xl py-1 custom_gradient_bg"
                  name="email"
                  placeholder="What's your email?"
                />
                <Button
                  color="primary"
                  variant="faded"
                  className="w-[200px] h-12 text-[18px] border-none text-[#080707] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-2xl flex justify-center items-center font_neue_montreal_medium capitalize relative"
                >
                  Get started now
                </Button>
              </div>
              <Image
                src={arrowDrop}
                alt="arrowDrop"
                className="mt-9 cursor-pointer"
                onClick={() => {
                  // Smooth scroll to the next section
                  const nextSection = document.querySelector('.scrll_there');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </div>

            <div className="flex flex-col items-center relative">
              <Image
                src={abt_img_2}
                alt="abt_img"
                width={1920}
                height={1080}
                className="w-full mb-[8rem] scrll_there"
              />

              <div className="absolute bottom-[3rem] flex justify-between w-[80%] items-center p-6 rounded-2xl z-20 bg-[linear-gradient(65.85deg,_#1B2128_31.56%,_#3B6078_82.41%)]">
                <p className="text-[#F3F6FF] text-lg leading-[110%] font_neue_montreal_medium uppercase">
                  All-in-one control for
                  <br />
                  sales, stock & service
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
        </div>
        {/* <div className="absolute bottom-44 pl-[0px] z-20 w-full flex items-center justify-center">
          <Button
            color="primary"
            variant="faded"
            className="w-[244px] h-16 text-[18px] border-none text-[#080707] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-2xl flex justify-center items-center font_neue_montreal_medium capitalize relative"
          >
            <AppleIcon className="mb-1" />
            Download The App
          </Button>
        </div> */}
        <Image
          src={handOverlay}
          alt="handOverlay"
          className="w-full h-auto absolute bottom-[-1px] z-10"
        />
      </div>
    </div>
  );
};

export default Banner;
