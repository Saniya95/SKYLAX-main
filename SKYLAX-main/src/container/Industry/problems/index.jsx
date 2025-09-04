import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import skylaxLogo from "../../../../public/assets/logoAndIcons/skylaxLogo.svg";
import { Button, ButtonGroup, Divider } from "@heroui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import apple from "../../../../public/assets/images/appleIcons.png";
import CtaGirl from "../../../../public/assets/images/graph-img.png";
import CtaGradients from "../../../../public/assets/images/pricingGradient.png";
import icon1 from "../../../../public/assets/images/pricingFeatures.png";
import Elipse from "../../../../public/assets/images/AisolElipse.png";
import gsap from "gsap";
const Problems = () => {
  const lineRefs = useRef([]);
  const contentRefs = useRef([]);
  const sectionRef = useRef(null);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (typeof window === "undefined") return;
      try {
        const mod = await import("gsap/dist/ScrollTrigger");
        const ST = mod.ScrollTrigger || mod.default;
        gsap.registerPlugin(ST);
      } catch {}
    })();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none reverse none",
        // markers: true, // remove later
      },
    });

    lineRefs.current.forEach((line, i) => {
      gsap.set(line, { width: 0 });
      const dot = line.querySelector("div");

      tl.from(dot, {
        scale: 0,
        transformOrigin: "center",
        duration: 0.5, // quick pop
        ease: "back.out(1.5)",
      })
        .to(line, {
          width: "100%",
          duration: 0.5, // faster line grow
          ease: "power2.out",
        })
        .from(
          contentRefs.current[i],
          {
            x: -30,
            opacity: 0,
            duration: 0.3, // faster content slide
            ease: "power2.out",
          },
          "-=0.10" // small overlap for speed
        );
    });
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: "40px 0px 20px 0px", sm: "80px 0px 40px 0px" },
        bgcolor: "#080707",
        minHeight: { xs: "auto", md: "720px" },
        position: "relative",
        borderBottom: "1.5px solid #5E6973",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" className="pb-8">
        {/* Download The App h1 */}
        <div className="grid grid-cols-12 items-start z-10">
          <div className="relative col-span-12 sm:col-span-3 mb-4 sm:mb-0">
            <Image src={icon1} className="relative w-auto h-auto" />
            <h5 className="absolute top-[15%] left-[2.5%] uppercase text-[14px] sm:text-[18px] font-medium">
              solutions
            </h5>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <h1 className="text-[36px] sm:text-[50px] md:text-[80px] w-full sm:w-[580px] leading-[100%] tracking-[-3%] uppercase space-[42px] bg-gradient-to-br from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular">
              problems we can solve
            </h1>
          </div>
        </div>

        {/* image */}

        {/* button */}

        <div className="grid grid-cols-12 items-start z-10 mt-[50px] sm:mt-[100px] mb-[50px] sm:mb-[100px]">
          <h4 className="col-span-12 sm:col-span-8 justify-start sm:justify-center flex text-[24px] sm:text-[32px] font_neue_montreal_regular font-normal leading-[120%] text-[#F3F6FF] pl-0 sm:pl-12 mb-4 sm:mb-0">
            Retail & E-commerce
          </h4>
          <div className="col-span-12 sm:col-span-4 flex justify-start sm:justify-end">
            <Button
              color="primary"
              variant="faded"
              className="py-3 sm:py-5 px-4 sm:px-6 text-[16px] sm:text-[18px] border-[#080707] text-[#080707] font-normal bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] flex justify-center items-center"
            >
              Get a Demo
            </Button>
          </div>
        </div>
        {/* dotted line and paragaraph */}
        {/* Dotted line */}
        {/* Line with dots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full my-8 gap-6 sm:gap-0" ref={sectionRef}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-start">
              {/* Line with centered dot */}
              <div
                className="relative w-full h-[2px] bg-[#4D637A] overflow-hidden"
                ref={(el) => (lineRefs.current[i] = el)}
              >
                <div className="absolute -top-[4px] left-0 -translate-x-1/2 w-[10px] h-[10px] bg-[#55D0FF] rounded-[1px]" />
              </div>
              <div ref={(el) => (contentRefs.current[i] = el)}>
                {/* Heading */}
                <p className="pt-8 sm:pt-14 text-[#fff] text-[18px] sm:text-[24px] leading-[120%] font-normal font_neue_montreal_regular tracking-[0.02em]">
                  {
                    [
                      "Point of sale",
                      "Data-driven decisions",
                      "Inventory management",
                      "Staff management",
                    ][i]
                  }
                </p>

                {/* Paragraph */}
                <p className="mt-2 sm:mt-4 text-[#F3F6FF80] text-[12px] sm:text-[14px] leading-[120%] font-normal font_neue_montreal_regular max-w-full sm:max-w-[223px] tracking-[0.02em]">
                  {
                    [
                      "Speed up transactions with an intuitive POS system and multiple payment options.",
                      "Gain insights with reports and analytics to boost sales, pricing, and performance.",
                      "Track stock in real time, prevent shortages, and automate reordering.",
                      "Monitor performance, manage schedules, and set permissions for efficiency.",
                    ][i]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      {/* gradient */}
      <div className="">
        <Image
          src={Elipse}
          className="absolute top-[-15px] right-0 pointer-events-none z-10 w-full sm:w-auto"
        />
      </div>
    </Box>
  );
};

export default Problems;
