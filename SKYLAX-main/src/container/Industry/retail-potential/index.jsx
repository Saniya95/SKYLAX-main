import Image from "next/image";
import React, { useRef, useState } from "react";
import indecate2 from "../../../../public/assets/logoAndIcons/indecate2.svg";
import ExploreCard from "@/components/ExploreCard";
import { Button } from "@heroui/react";
import { Container } from "@mui/material";


const RetailPotential = () => {
  const exploreCard = [
    {
      image: "/assets/logoAndIcons/icon1.svg",
      name: "Smart inventory management",
      message:
        "Effortlessly manage products, variants, and stock across all sales channels. Get real-time updates and track inventory seamlessly with customized RFIDs.",
    },
    {
      image: "/assets/logoAndIcons/icon2.svg",
      name: "Powerful webpage tools",
      message:
        "Build an AI-driven store with Scalyx—seamless E-Commerce, smart management, and full integration for online and in-store growth.",
    },
    {
      image: "/assets/logoAndIcons/icon3.svg",
      name: "Customer relationship management",
      message:
        "Maximize sales with Scalyx CRM—track pipelines, analyze behavior, and boost engagement with data-driven insights.",
    },
    {
      image: "/assets/logoAndIcons/icon4.svg",
      name: "Comprehensive reporting & Analytics",
      message:
        "Get real-time insights into sales, inventory, and staff performance with advanced dashboards, helping business owners make data-driven decisions.",
    },
    {
      image: "/assets/logoAndIcons/icon5.svg",
      name: "Accounting & Financial tracking",
      message:
        "Keep your finances in check with Scalyx. From automated invoicing to tax compliance, our system ensures a smooth, transparent financial workflow.",
    },

    {
      image: "/assets/logoAndIcons/icon6.svg",
      name: "Efficient staff & Workflow management",
      message:
        "Our AI-driven system streamlines operations, tracks performance, and automates payroll, ensuring seamless workforce management.",
    },
    {
      image: "/assets/logoAndIcons/icon7.svg",
      name: "Price & Markdown management",
      message:
        "Automatically adjust prices, apply discounts, update in bulk, control profit margins, and track performance with AI-driven insights.",
    },
    {
      image: "/assets/logoAndIcons/icon8.svg",
      name: "Webpage shop integration",
      message:
        "Sync inventory, update prices, and manage orders seamlessly with Scalyx's AI-powered online store integration.",
    },
  ];

  const containerRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault(); // Stop normal vertical scroll
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <>
      <div className="bg-[url(/assets/images/graph-overlay.png)] w-full h-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
       
        <Container
          maxWidth="xl"
          className="pt-20 md:pt-40 pb-10 md:pb-20 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start px-4 sm:px-6 md:px-8"
        >
          <div className="w-full md:w-[25%] relative mb-8 md:mb-0">
            <Image src={indecate2} alt="indecate" />
            <p className="absolute top-[12%] left-[6%] text-lg uppercase">
              features
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full md:w-[85%] gap-6 md:gap-0">
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] uppercase tracking-[-0.03em] bg-[linear-gradient(300deg,_#2C3947_5.55%,_#F8F8FF_37.62%,_#F8F8FF_58.49%,_#1B2228_89.3%)] bg-clip-text text-transparent font_neue_montreal_regular leading-[3rem] md:leading-[4rem] lg:leading-[5rem] text-center md:text-left">
            unlock retail potential
            </h1>
            <p className="text-[18px] md:text-[24px] text-[#F3F6FF] font-normal font_neue_montreal_regular tracking-[3%] leading-[120%] text-center md:text-left max-w-[500px] md:max-w-none">
              Features that make your business processes more efficient.
            </p>
          </div>
        </Container>
      </div>

      <div className="relative w-full h-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
        <Image
          src={"/assets/images/features-img-ovrl.png"}
          alt="graph"
          className="absolute w-full h-full"
          width={1920}
          height={1080}
        />
        <div className="pb-20 w-full flex sm:flex-row flex-col-reverse items-end justify-between">
          <Container maxWidth="xl" className="!w-[30%] sm:flex hidden">
            <Button
              color="primary"
              variant="faded"
              className="mt-14 py-6 px-9 text-[18px] text-[#080707] font-normal bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[16px] flex justify-center items-center"
            >
              Get a Demo
            </Button>
          </Container>
          <div
            ref={containerRef}
            onWheel={handleWheel}
            className="z-10 w-full h-auto overflow-x-auto flex gap-4"
          >
            {exploreCard?.map((v, i) => (
              <div key={i} className="sm:w-full w-[90%] h-full">
                <ExploreCard v={v} i={i} cardclassName={`!w-[30rem] sm:!h-[35rem] !h-[25rem]`} />
              </div>
            ))}
          </div>
        </div>

        {/* smart AI Solutions */}
        
        
      </div>
    </>
  );
};

export default RetailPotential;
