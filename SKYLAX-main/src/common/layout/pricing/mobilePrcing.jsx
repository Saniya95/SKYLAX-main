import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import skylaxLogo from "../../../../public/assets/logoAndIcons/skylaxLogo.svg";
import { Button, ButtonGroup, Divider } from "@heroui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import apple from "../../../../public/assets/images/appleIcons.png";
import CtaGirl from "../../../../public/assets/images/mobileArrow.png";
import CtaGradients from "../../../../public/assets/images/phonePicingGardient.png";
import icon1 from "../../../../public/assets/logoAndIcons/indecate1.svg";
import highMargin from "../../../../public/assets/images/pricingBox.png";

const MobilePricing = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

  return (
    <Box
      sx={{
        padding: "80px 0px 50px 0px",
        bgcolor: "#080707",
        minHeight: "920px",
        position: "relative",
        borderBottom: "1.5px solid #5E6973",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" className="pb-8 relative !px-0">
        {/* Download The App h1 */}

        <div className="flex justify-center">
          <Image src={icon1} className="relative" />
          <h5 className=" absolute top-[1.5%] left-[34%] uppercase text-[18px] font-medium">
            Pricing
          </h5>
        </div>

        <div className="pt-14">
          <h1 className="text-[48px]  leading-[100%] tracking-[-0.03rem] uppercase space-[42px] bg-gradient-to-br from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular text-center ">
            Scale Your Business
          </h1>
        </div>

        <div className="pt-8">
          <p className="col-span-2 text-[18px] font_neue_montreal_regular leading-[120%] tracking-[-2%] space-[42.90px] text-[#F3F6FF] text-center">
            Of net profit for a small start-up business.
          </p>
        </div>

        {/* image */}

        {/* <div className=""> */}
        <div className="relative">
          <div className=" pt-[5rem]  ">
            <Image src={CtaGirl} alt="CtaGirl" className="w-full pl-2" />
          </div>
          {/* gradient image */}
          <Image
            src={CtaGradients}
            className="absolute bottom-[-470px] right-[2px] pointer-events-none z-10"
          />
          {/* right 15+ */}
          <div className="absolute right-[5%] bottom-[36%]">
            <h5 className="uppercase text-[#899099] font_neue_montreal_regular font-medium tracking-[-1%] leading-[110%] pb-3 ">
              To
            </h5>
            <span className="text-[30px] font_neue_montreal_regular tracking-[-3%] leading-[110%]">
              +15%
            </span>
          </div>
          {/* growth point */}
          <div className="absolute right-[54%] bottom-[37%]">
            <h5 className=" text-[#F3F6FF] font_neue_montreal_regular font-normal tracking-[0.01rem] leading-[120%] pb-3 text-[16px] space-[42.9px] ">
              Growth point
            </h5>
          </div>
          {/* left  from 5+  */}

          <div className="absolute left-[4%] bottom-[-18%]">
            <h5 className="uppercase text-[#899099] font_neue_montreal_regular font-medium tracking-[-1%] leading-[110%] pb-3 ">
              from
            </h5>
            <span className="text-[30px] font_neue_montreal_regular tracking-[-3%] leading-[110%]">
              5%
            </span>
          </div>
        </div>

        {/* pricing box */}

        <div className="mt-[7rem] flex justify-center relative">
          <Image
            src={highMargin}
            alt="highMargin"
            className="w-[350px] h-[160px] "
          />

          <p
            className=" absolute  font_neue_montreal_regular  text-[#F3F6FF] 
            text-[18px] leading-[120%] tracking-[-0.02rem] space-[42.9px] font-normal top-12 left-[4.3rem]"
          >
            Focus on high-margin products and <br /> efficient operations for
            growth. <br /> Choose the right plan to expand <br />
            opportunities.
          </p>
        </div>

        {/* button */}

        <div className="relative pt-12 px-[16px] ">
          <Button
            color="primary"
            variant="faded"
            className="mt-2 py-6 px-10 text-[16px] text-[#151515] font-semibold bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[16px] flex justify-center items-center w-full leading-[136%] font_neue_montreal"
          >
            View pricing
          </Button>
        </div>

        {/* focus on margin box */}
        {/* <div className="absolute right-[3%] bottom-[15%]">
              <Image
                src={highMargin}
                alt="highMargin"
                width={192}
                height={108}
                className="w-[350px] h-[244px]"
              />
            </div>
            <div className="absolute right-[1.3%] top-[62.5%]">
              <p
                className="w-[310px] h-[145px] font_neue_montreal_regular  text-[#F3F6FF] 
            text-[22px] leading-[120%] tracking-[-0.02rem] space-[42.9px] font-normal"
              >
                Focus on high-margin <br /> products and efficient <br />{" "}
                operations for growth. Choose <br /> the right plan to expand
                opportunities.
              </p>
            </div>
          {/* </div> */}

        {/* button */}
      </Container>
      {/* gradient */}
      <div className="relative"></div>
    </Box>
  );
};

export default MobilePricing;
