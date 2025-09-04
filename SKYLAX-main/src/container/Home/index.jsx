import Image from "next/image";
import React, { useEffect, useState ,useRef} from "react";
import Banner from "./Banner";
import Whatscalyx from "./Whatscalyx";
import CommonDesign1Page from "@/components/CommonDesign1";
import SmartSol from "@/components/SmartSol";
import OurClients from "@/components/OurClients";
import SectionDivider from "@/components/SectionDivider";
import BannerMobile from "./BannerMobile";
import WhatscalyxMobile from "./WhatscalyxMobile";
import { useApi } from "@/hooks/useApi";
import { apis } from "@/utils/apis";


import { motion, useInView } from "framer-motion";
const SectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


const HomePage = () => {
  let data = "sayan"[0] + "ad";

  const { Get } = useApi();
  const { page } = apis;
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    const GetHome = async () => {
      try {
        let data = await Get(`${page}?slug=home`);
        if (data?.data) {
          setHomeData(data?.data);
        }
      } catch (error) {
        console.log(error, "_error_");
      }
    };

    GetHome();
  }, []);

  return (
    <>
      {/* desktop/laptop */}
      <div className="sm:block hidden w-full layer-section">
        <SectionWrapper>
          <Banner
            heoData={homeData?.sections?.length ? homeData?.sections[0] : {}}
          />
        </SectionWrapper>
        {/* Global overlay for sequence start */}
        <div aria-hidden className="layer-sequence-overlay" />
      </div>
  {/* subtle blend from banner into next section */}
  <SectionDivider desktopHeight="h-24" desktopOverlap="-mt-10" mobileHeight="h-16" mobileOverlap="-mt-8" />
      {/* mobile */}
      <div className="sm:hidden block w-full mb-10">
        <SectionWrapper>
          <BannerMobile />
        </SectionWrapper>
      </div>
  {/* mobile blend from banner into next section */}
  {/* handled by SectionDivider above */}
      {/* desktop/laptop */}
  <div className="sm:block hidden w-full relative z-10 layer-section">
        <div className="relative z-20">
          {/* Shared gradient wrapper to blend Whatscalyx → Explore Potential → Smart AI seamlessly */}
          <section className="relative w-full">
            <div aria-hidden className="layer-sequence-overlay" />
            <div aria-hidden className="layer-ellipse-11" />
            <div aria-hidden className="layer-gradient-plate" />
            <SectionWrapper> 
              <Whatscalyx
                aboutData={
                  Array.isArray(homeData?.sections)
                    ? {
                        first: homeData.sections[1] || {},
                        second: homeData.sections[2] || {},
                      }
                    : { first: {}, second: {} }
                }
              />
            </SectionWrapper>
            {/* Smart AI Solutions immediately after Explore Potential */}
            <SectionWrapper>
              <SmartSol />
            </SectionWrapper>
            {/* No divider here; gradient continues through */}
          </section>
          <SectionWrapper>
          <OurClients />
          </SectionWrapper>
          {/* fade between OurClients and next */}
          <SectionDivider desktopHeight="h-24" desktopOverlap="-mt-10" mobileHeight="h-16" mobileOverlap="-mt-8" />
          <SectionWrapper>
          <CommonDesign1Page />
          </SectionWrapper>
        </div>
      </div>
      {/* mobile */}
  <div className="sm:hidden block w-full layer-section">
        <div className="relative z-20">
          {/* Shared gradient wrapper on mobile; continues across sections */}
          <section className="relative w-full">
    <div aria-hidden className="layer-sequence-overlay" />
    <div aria-hidden className="layer-ellipse-11" />
            <WhatscalyxMobile />
            {/* Smart AI Solutions comes right after Explore Potential */}
            <SectionWrapper>
              <SmartSol />
            </SectionWrapper>
            {/* No divider; keep gradient flowing */}
          </section>
          <SectionWrapper>
            <OurClients />
          </SectionWrapper>
          <SectionDivider desktopHeight="h-24" desktopOverlap="-mt-10" mobileHeight="h-16" mobileOverlap="-mt-8" />
          <SectionWrapper>
            <CommonDesign1Page />
          </SectionWrapper>
        </div>
      </div>
    </>
  );
};

export default HomePage;
