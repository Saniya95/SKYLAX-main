import Image from "next/image";
import React from "react";
import shopingBag from "../../../public/assets/logoAndIcons/shopingBag.svg";
import tsBannerTab from "../../../public/assets/images/tsBannerTab.png";
import handOverlay from "../../../public/assets/images/handOverlay.png";
import aboutOvrl from "../../../public/assets/images/about-ovrl.png";
import { Container } from "@mui/material";
import { Button } from "@heroui/react";
import AppleIcon from "@mui/icons-material/Apple";

const Banner = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={aboutOvrl}
        alt="aboutOvrl"
        width={1920}
        height={1080}
        className="w-full mac1:h-[140vh] h-[155vh]"
      />
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="absolute xl:left-[15%] left-[5%] bottom-[95vh]">
          <div className="relative flex items-center justify-center">
            <Image
              src="/assets/images/tsBanner.svg"
              className="w-auto h-auto txt-img-bl-overlay txt-img-blk-dkp "
              alt="home_banner"
              width={1920}
              height={1080}
            />
            <h1 className="absolute text-[110px] left-[20%] top-[25%] text-center uppercase tracking-[-0.03em] bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular leading-[5.9rem]">
              Product Catalog
            </h1>
            <div className="flex items-center gap-2 absolute left-[3%] top-[3%]">
              <Image src={shopingBag} alt={"trp_star"} />
              <p className="pt-0.5 font_neue_montreal_medium text-lg">
                Commerce
              </p>
            </div>
          </div>
        </div>
        <div className="z-10 absolute lg:-bottom-[0px] bottom-[100px] flex-grow-0 w-full">
          <div className="relative w-full">
            <Image
              src={handOverlay}
              alt="handOverlay"
              className="absolute -top-[48vh] w-full h-auto"
            />
            <div className="absolute bottom-10 z-10 w-[92%] flex items-center justify-center">
              <Button
                color="primary"
                variant="faded"
                className="py-6 px-8 text-[18px] border-none text-[#080707] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] flex justify-center items-center font_neue_montreal_medium"
              >
                <AppleIcon />
                &nbsp;Download the App
              </Button>
            </div>
            <Image
              src={tsBannerTab}
              alt="tsBannerTab"
              width={1920}
              height={1080}
              className="mac2:w-[90%] w-[80%] h-auto absolute mac2:top-[-95vh] mac1:top-[-100vh] top-[-100vh] left-[5%]"
            />
          </div>
        </div>
        <div className="absolute mac2:right-[-12%] right-5 bottom-[80vh] z-20 w-full mac2:text-4xl text-lg">
          <Container maxWidth="xl" className="flex justify-end">
            Build and grow your
            <br />
            online business
            <br />
            effortlessly with our
            <br />
            smart website builder.
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
