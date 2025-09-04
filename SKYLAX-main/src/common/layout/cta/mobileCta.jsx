import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import skylaxLogo from "../../../../public/assets/logoAndIcons/skylaxLogo.svg";
import { Button, ButtonGroup, Divider } from "@heroui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import vector from "../../../../public/assets/images/phoneCta.png";
import apple from "../../../../public/assets/images/appleIcons.png";
import CtaGirl from "../../../../public/assets/images/CtaGirl.png";
import CtaGradients from "../../../../public/assets/images/mobCtaEl.png";
import AppleIcon from "@mui/icons-material/Apple";

const MobileCta = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

  return (
    <Box
      sx={{
        padding: "52px 0px 50px 0px",
        bgcolor: "transparent",
        backgroundImage: `url(${vector.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "910px",
        position: "relative",
        zIndex: "10",
        overflow:"hidden"
      }}
    >
      {/* Section-wide overlay like first section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,22,27,0)_0%,rgba(18,22,27,0.22)_28%,rgba(18,22,27,0.55)_68%,rgba(18,22,27,0.9)_100%)]"
      />
      {/* Ambient blue spotlight behind overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute top-[2%] left-[10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(85,208,255,0.22),rgba(85,208,255,0.08),rgba(8,7,7,0))]" />
        <div className="absolute top-[18%] right-[12%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(99,97,252,0.16),rgba(99,97,252,0.06),rgba(8,7,7,0))]" />
      </div>
      <Container maxWidth="xl" className="pb-8 ">
        {/* Download The App h1 */}
        <div className="flex justify-center items-start ">
          <h1
            className="text-white text-center text-[48px] max-w-[600px] font-normal uppercase 
          tracking-[0.03rem] leading-[100%] font_neue_montreal_regular"
          >
            Download The app!
          </h1>
        </div>
        {/* grow your Buisness */}
        <div className="flex justify-center pt-[60px] text-[#899099] text-[16px] font-normal font_neue_montreal_regular leading-[120%] flex-col w-full  ">
          <h5 className="text-center text-[16px] tracking-[-0.01rem]">
            Grow your business!
          </h5>
          <p className="pt-6 text-[24px]  text-[#F3F6FF] leading-[120%] gap-[42.90px] font_neue_montreal_regular text-center tracking-[-0.03rem] w-full mx-auto max-w-[308px] ">
            Improve your business today with our smart solutions.
          </p>
        </div>
        {/* Download the app */}

        <div className="flex justify-center items-center flex-col pt-[50px] z-10 mb-[20px]">
          <div className=" w-full z-10 ">
            <h5 className="text-[16px] text-[#899099] font-normal leading-[120%] tracking-[-1%] text-center mx-auto max-w-[250px]">
              Optimize your business processes in a short period of time.
            </h5>

            <Button
              color="primary"
              variant="faded"
              className="my-9 py-7 px-10 text-[16px] text-[#151515] font-semibold bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[16px] flex justify-center items-center w-full leading-[135%] "
            >
              <AppleIcon sx={{pb:"3px"}} />
              &nbsp;Download the App
            </Button>
          </div>
        </div>
        {/* cta girl Image */}

        <div className="absolute bottom-[-55%] left-[0%] h-full z-999">
          <Image src={CtaGirl} alt="ctagirlImage" />
        </div>
      </Container>
      <div className="">
        <Image
          src={CtaGradients}
          className="absolute bottom-0 left-0 w-full  pointer-events-none z-[-10]"
        />
      </div>
    </Box>
  );
};

export default MobileCta;
