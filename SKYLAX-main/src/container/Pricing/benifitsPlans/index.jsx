"use client";
import { Box, Container } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import icon1 from "../../../../public/assets/images/pricingFeatures.png";
import Image from "next/image";
import { Button, Divider } from "@heroui/react";
import faqGradients from "../../../../public/assets/images/BenefitsEllipse.png";
import gsap from "gsap";

const BenifitPlans = (props) => {
  const features = props.features;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const contentRefs = useRef([]);
  const imageRefs = useRef([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    itemRefs.current.forEach((el) => {
      if (!el) return;
      gsap.set(el, { backgroundColor: "transparent", scale: 1 });
    });

    contentRefs.current.forEach((el) => {
      if (!el) return;
      if (isMobile) {
        gsap.set(el, { height: "auto", opacity: 1 });
      } else {
        gsap.set(el, { height: 0, opacity: 0 });
      }
    });

    imageRefs.current.forEach((el) => {
      if (!el) return;
      if (isMobile) {
        gsap.set(el, { opacity: 1, y: 0 });
      } else {
        gsap.set(el, { opacity: 0, y: 10 });
      }
    });
  }, [isMobile]);

  const handleMouseEnter = (index) => {
    if (isMobile) return;
    setHoveredIndex(index);

    // Item hover style
    gsap.to(itemRefs.current[index], {
      scale: 1.01,
      backgroundColor: "rgba(255,255,255,0.025)",
      boxShadow: "0px 4px 30px rgba(255, 255, 255, 0.05)",
      filter: "blur(0.2px)",
      duration: 0.4,
      ease: "power2.out",
    });

    // Expand text
    gsap.to(contentRefs.current[index], {
      height: "auto",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Show image
    gsap.to(imageRefs.current[index], {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (isMobile) return;
    setHoveredIndex(null);

    gsap.to(itemRefs.current[index], {
      scale: 1,
      backgroundColor: "transparent",
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      filter: "blur(0px)",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(contentRefs.current[index], {
      height: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });

    gsap.to(imageRefs.current[index], {
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <Box
      sx={{
        padding: "100px 0px",
        bgcolor: "#000",
        borderBottom: "1.5px solid #5E6973",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <div className="grid grid-cols-12 items-start gap-6 md:gap-10">
          <div className="relative col-span-12 md:col-span-3">
            <Image src={icon1} className="relative" alt="benefits icon" />
            <h5 className="absolute top-[15%] left-[3.5%] uppercase text-[14px] sm:text-[16px] md:text-[18px] font-medium text-white">
              benefits
            </h5>
          </div>
          <div className="col-span-12 md:col-span-9 w-full md:w-[818px]">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[80px] w-full md:w-[818px] leading-[110%] md:leading-[100%] tracking-[-0.02em] md:tracking-[-3%] uppercase bg-gradient-to-br from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular">
              {props?.heading}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 pt-2">
          <div className="col-span-12 flex flex-col items-start pt-4 md:pt-6 gap-y-1.5 w-full">
            {features?.length
              ? features.map((faq, idx) => (
                  <React.Fragment key={faq.number}>
                    <div
                      ref={(el) => (itemRefs.current[idx] = el)}
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={() => handleMouseLeave(idx)}
                      className="grid grid-cols-12 items-start md:items-center cursor-pointer py-4 px-2 rounded-xl transition-all duration-700 "
                    >
                      {/* Number + Title */}
                      <div className="col-span-12 md:col-span-9 flex md:justify-center md:mr-[60px]">
                        <div className="text-[#A3A3A3] text-[14px] sm:text-[15px] md:text-[16px] font-semibold select-none mr-4 md:mr-[200px] min-w-[32px] md:min-w-[40px] font_neue_montreal_regular leading-[140%] md:leading-[110%] tracking-[-0.02em] md:tracking-[-0.03em]">
                          {faq.number}
                        </div>
                        <div>
                          <div className="text-white text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-normal leading-[140%] md:leading-[110%] tracking-[-0.02em] md:tracking-[-0.03em] font_neue_montreal_regular">
                            {faq.title}
                          </div>
                          <div
                            ref={(el) => (contentRefs.current[idx] = el)}
                            className="md:overflow-hidden text-[#A3A3A3] text-[14px] sm:text-[16px] md:text-[18px] mt-1.5 pt-3 md:pt-6 font_neue_montreal_regular leading-[140%] md:leading-[120%] tracking-[-0.02em]"
                          >
                            {faq.content}
                          </div>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="col-span-12 md:col-span-3 flex justify-start md:justify-center items-start md:items-center mt-3 md:mt-0">
                        <div
                          ref={(el) => (imageRefs.current[idx] = el)}
                          className="p-2 md:p-4 rounded-2xl"
                        >
                          <Image
                            src={faq?.image}
                            alt="benefit icon"
                            width={180}
                            height={48}
                            className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    {idx !== features.length - 1 && (
                      <div className="h-[1px] w-full bg-[#5E6973]"></div>
                    )}
                  </React.Fragment>
                ))
              : null}
          </div>
        </div>
      </Container>

      <Image
        src={props?.bgImage ? props?.bgImage : faqGradients}
        className={`absolute ${
          props?.bgImage ? "top-[40%]" : "top-[0%]"
        } right-0 w-full h-full pointer-events-none z-10`}
      />
    </Box>
  );
};

export default BenifitPlans;
