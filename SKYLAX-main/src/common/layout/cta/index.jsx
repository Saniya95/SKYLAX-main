import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import skylaxLogo from "../../../../public/assets/logoAndIcons/skylaxLogo.svg";
import { Button, ButtonGroup, Divider } from "@heroui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import vector from "../../../../public/assets/images/Vector.svg";
import apple from "../../../../public/assets/images/appleIcons.png";
import CtaGirl from "../../../../public/assets/images/cta-img-center.png";
import CtaGradients from "../../../../public/assets/images/cta-gradients.png";
import AppleIcon from "@mui/icons-material/Apple";

const Cta = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

  return (
    <Box
      sx={{
        padding: { xs: "40px 0px 0px 0px", md: "80px 0px 0px 0px" },
        bgcolor: "transparent",
        backgroundImage: `url(${vector.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: "600px", sm: "700px", md: "900px" },
        position: "relative",
        zIndex: "10",
        overflow: "hidden",
      }}
    >
      {/* Section-wide overlay like first section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,22,27,0)_0%,rgba(18,22,27,0.22)_28%,rgba(18,22,27,0.55)_68%,rgba(18,22,27,0.9)_100%)]"
      />
      {/* Ambient blue tones behind the overlay (no green) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute top-[-10%] left-1/4 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(85,208,255,0.22),rgba(85,208,255,0.08),rgba(8,7,7,0))]" />
        <div className="absolute top-[5%] left-1/2 h-[560px] w-[560px] -translate-x-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(99,97,252,0.16),rgba(99,97,252,0.06),rgba(8,7,7,0))]" />
      </div>
      <Container maxWidth="xl" className="pb-8 sm:h-auto h-[130vh]">
        {/* Download The App h1 */}
        <div className="flex justify-center sm:pt-4 pt-8">
          <h1 className="text-white text-center text-[48px] sm:text-[80px] sm:max-w-[600px] max-w-[300px] font-normal uppercase tracking--tight leading-[100%] font_neue_montreal_regular">
            Download The app!
          </h1>
        </div>
        {/* grow your Buisness */}
        <div className="flex sm:items-start items-center justify-start pt-[40px] md:pt-[80px] text-[#899099] text-[16px] font-normal font_neue_montreal_regular leading-[120%] flex-col">
          <h5>Grow your business!</h5>
          <p className="pt-6 md:pt-10 text-[24px] md:text-[32px] max-w-[310px] text-[#F3F6FF] leading-[120%] gap-[42.90px] font_neue_montreal_regular sm:text-left text-center">
            Improve your business today with our smart solutions.
          </p>
        </div>
        {/* Download the app */}

        <div className="flex justify-end items-end flex-col pt-[50px] md:pt-[100px] z-10">
          <div className="z-10 sm:w-auto w-full flex flex-col items-center sm:items-start gap-10 md:gap-20">
            <h5 className="max-w-[250px] text-[14px] md:text-[16px] text-[#899099] font-normal leading-[120%] tracking-[-1%] text-center sm:text-left gap-[42.91px]">
              Optimize your business processes in a short period of time.
            </h5>
            <Button
              color="primary"
              variant="faded"
              className="w-full sm:w-56 h-12 md:h-16 text-[16px] md:text-[18px] border-none text-[#080707] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-2xl flex justify-center items-center font_neue_montreal_medium"
            >
              <AppleIcon />
              &nbsp;Download the App
            </Button>
          </div>
        </div>
        {/* cta girl Image */}

        <div className="absolute bottom-0 left-0 md:left-[25%] w-full flex justify-center md:block">
          <Image 
            src={CtaGirl} 
            alt="ctagirlImage" 
            className="w-auto h-auto max-h-[300px] sm:max-h-[400px] md:max-h-none"
          />
        </div>
      </Container>
      <div className="">
        <Image
          src={CtaGradients}
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          alt="cta-gradients"
        />
      </div>
    </Box>
  );
};

export default Cta;
