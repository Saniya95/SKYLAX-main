import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import skylaxLogo from "../../../../public/assets/logoAndIcons/skylaxLogo.svg";
import { Button, ButtonGroup, Divider } from "@heroui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import apple from "../../../../public/assets/images/appleIcons.png";
import graphImg from "../../../../public/assets/images/graph-img.png";
import CtaGradients from "../../../../public/assets/images/pricingGradient.png";
import icon1 from "../../../../public/assets/logoAndIcons/indecate1.svg";
import highMargin from "../../../../public/assets/logoAndIcons/highMargin.svg";
import bgOvrSlid from "../../../../public/assets/images/bg-ovr-slid.png";

const Pricing = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

  return (
    <div className="p-[80px_0px_0px_0px] bg-gradient-to-tl from-[#08070700] via-[#08070767] to-[#08070700] min-h-[920px] relative z-20">
      {/* Section-wide overlay like first section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,22,27,0)_0%,rgba(18,22,27,0.22)_28%,rgba(18,22,27,0.55)_68%,rgba(18,22,27,0.9)_100%)]"
      />
      <div className="!pb-28 relative z-20 bg-[#08070700] header_con">
        {/* Download The App h1 */}
        <div className="grid grid-cols-12 items-start z-10">
          <div className="col-span-3 flex relative">
            <div className="feat-sec-cl">
              <div className="sub-title">
                <span className="font_neue_montreal_medium">Pricing</span>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            {/* <h1 className="text-[80px] w-[580px] leading-[100%] tracking-[-3%] uppercase space-[42px] bg-gradient-to-br from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular">
              Scale Your Business
            </h1> */}
            <h1 className="sm:text-[78px] text-[48px] uppercase tracking-[-0.03em] leading-[100%] bg-[linear-gradient(320deg,_#6d777f_24.55%,_#F8F8FF_37.62%,_#F8F8FF_58.49%,_#6d777f_110.3%)] bg-clip-text text-transparent font_neue_montreal_regular">
              Scale Your
              <br />
              Business
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-11 pt-[180px] z-10">
          <p className="col-span-2 text-[24px] font_neue_montreal_regular leading-[120%] tracking-[-2%] space-[42.90px] text-[#F3F6FF]">
            Of net profit for a small start-up business.
          </p>
        </div>

        {/* image */}

        {/* <div className=""> */}
        {/* <div className="absolute right-0 bottom-[-4rem] w-[83%]"> */}
        <div className="absolute right-0 top-0 w-[83%]  md:w-[70%]">
          <Image src={graphImg} alt="graphImg" className="w-full" />
        </div>
        <div className="absolute right-[3%] top-[8%]">
          <h5 className="uppercase text-[#899099] font_neue_montreal_regular font-medium tracking-[-1%] leading-[110%] pb-3 ">
            To
          </h5>
          <span className="text-[40px] font_neue_montreal_regular tracking-[-3%] leading-[110%]">
            +15%
          </span>
        </div>
        <div className="absolute left-[30%] top-[77%]">
          <h5 className="uppercase text-[#899099] font_neue_montreal_regular font-medium tracking-[-1%] leading-[110%] pb-3 ">
            from
          </h5>
          <span className="text-[40px] font_neue_montreal_regular tracking-[-3%] leading-[110%]">
            5%
          </span>
        </div>
        <div className="absolute right-[3%] bottom-[15%]">
          {/* <Image
            src={highMargin}
            alt="highMargin"
            width={192}
            height={108}
            className="w-[350px] h-[244px]"
          /> */}
        </div>
        <div className="absolute right-[1.3%] top-[65%] pln-txt-abs">
          <p
            className="w-[310px] h-[145px] font_neue_montreal_regular text-[#F3F6FF] 
            text-[22px] leading-[120%] tracking-[-0.02rem] space-[42.9px] font-normal"
          >
            Focus on high-margin <br /> products and efficient <br /> operations
            for growth. Choose <br /> the right plan to expand opportunities.
          </p>
        </div>
        {/* </div> */}

        {/* button */}

        <div className="grid grid-cols-12 items-end h-full z-10">
          <div className="relative col-span- pt-[150px]">
            <Button
              color="primary"
              variant="faded"
              className="mt-14 w-56 h-16 !text-[18px] text-[#080707] font_neue_montreal_medium bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[16px] flex justify-center items-center !border-none"
            >
              View pricing
            </Button>
          </div>
          <div className="col-span-9"></div>
        </div>
      </div>
      {/* gradient */}
      <div className="">
        <Image
          src={CtaGradients}
          className="absolute top-[-15%] right-0 pointer-events-none z-20"
        />
        {/* <Image
        src={bgOvrSlid}
        alt="bgOvrSlid"
        className="absolute bottom-[-20rem] left-[-31%] z-20 rotate-[354deg] h-[100%]"
      /> */}
      </div>
    </div>
  );
};

export default Pricing;
