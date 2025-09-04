import { Container } from "@mui/material";
import React from "react";
import icon1 from "../../../../public/assets/logoAndIcons/indecate1.svg";
import Image from "next/image";
// import manInnovation from "../../../../public/assets/images/man-innovation.png";

const Vision = () => {
  return (
    <div
      className="z-10 bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Icon Section */}
          <div className="relative flex items-center md:items-start justify-start md:justify-start col-span-1 md:col-span-3">
            <div className="relative">
              <Image src={icon1} alt="vision icon" className="w-13 sm:w-16 md:w-auto" />
              <h5 className="absolute top-[15%] left-[10%] uppercase text-base sm:text-lg md:text-xl font-medium">
                vision
              </h5>
            </div>
          </div>

          {/* Text Section */}
          <div className="col-span-1 md:col-span-9">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight tracking-tight uppercase bg-gradient-to-br from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular">
              Drive innovations
            </h1>
            <p className="pt-6 sm:pt-8 text-base sm:text-lg md:text-2xl leading-relaxed tracking-wide font_neue_montreal_regular">
              We believe AI should empower businesses, making technology smarter, more intuitive,
              and seamlessly integrated into everyday operations. Our solutions are designed to
              enhance efficiency, drive innovation, and unlock new possibilities for growth.
            </p>

            {/* Optional - Team/Investor section */}
            {/* 
            <div className="flex flex-col sm:flex-row items-center sm:items-start pt-8 sm:pt-12">
              <div className="w-24 h-24 relative">
                <Image src={manInnovation} alt="Investor" className="rounded-full" />
              </div>
              <div className="sm:pl-6 text-center sm:text-left mt-4 sm:mt-0">
                <h6 className="text-base sm:text-lg text-[#F3F6FF] font-semibold leading-snug font_neue_montreal_regular">
                  Investor of Scalyx
                </h6>
                <p className="pt-1 text-sm sm:text-base font-normal leading-snug font_neue_montreal_regular text-[#899099]">
                  Takeshi Hirota
                </p>
              </div>
            </div> 
            */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Vision;
