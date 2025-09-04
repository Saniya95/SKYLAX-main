import React from "react";
import businessGrowth from "../../../public/assets/images/businessGrowth.svg";
import Image from "next/image";
import { Container } from "@mui/material";
import { motion } from "framer-motion";

const BusinessGrowth = () => {
  return (
    <div className="bg-[url(/assets/images/cnt-img-left.png)] w-full h-full bg-cover bg-center bg-no-repeat">
      <Container maxWidth="xl" className="py-[7.5rem]">
        <div className="w-full flex flex-col items-center gap-16">
          <h1 className="w-[80%] text-[80px] right-[16%] top-[25%] text-center uppercase tracking-[-0.03em] bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular leading-[5.9rem]">
            Business growth insights
          </h1>
          <div className="w-full relative">
            <Image
              src={businessGrowth}
              alt="businessGrowth"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
            <div className="w-full h-[80%] absolute top-[10%] flex gap-[1%]">
              {/* <div className="w-[33%] h-full text-center flex flex-col items-center justify-between px-[1rem] py-[3.75rem]"> */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-[33%] h-full text-center flex flex-col items-center justify-between px-[1rem] py-[3.75rem]"
              >
                <h2 className="ml-8 font_neue_montreal_regular text-[2em] text-[#F3F6FF]">
                  Set up & Customize
                </h2>
                <p className="ml-8 w-[80%] font_neue_montreal_regular text-base text-[#899099]">
                  Easily customize the system—import customer data, set up
                  loyalty programs, and automate marketing.
                </p>
              </motion.div>
              {/* </div> */}
              <div className="w-[33%] h-full text-center flex flex-col items-center justify-between px-[1rem] py-[3.75rem]">
                <h2 className="font_neue_montreal_regular text-[2em] text-[#F3F6FF]">
                  Engage & Sell anywhere
                </h2>
                <p className="w-[80%] font_neue_montreal_regular text-base text-[#899099]">
                  Use mobile for transactions, digital receipts, and real-time
                  sales tracking. Automate marketing to boost engagement.
                </p>
              </div>
              {/* <div className="w-[33%] h-full text-center flex flex-col items-center justify-between px-[1rem] py-[3.75rem]"> */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  // boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.05)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-[33%] h-full text-center flex flex-col items-center justify-between px-[1rem] py-[3.75rem]"
              >
                <h2 className="mr-8 font_neue_montreal_regular text-[2em] text-[#F3F6FF]">
                  Retain customers
                </h2>
                <p className="mr-8 w-[80%] font_neue_montreal_regular text-base text-[#899099]">
                  Manage loyalty programs, automate rewards, and offer
                  personalized promotions to boost sales.
                </p>
              </motion.div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BusinessGrowth;
