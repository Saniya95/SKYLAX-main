import { Box, Container, Switch } from "@mui/material";
import React from "react";
import Reactangle from "../../../public/assets/images/Rectangle.svg";
import ProfileGradient from "../../../public/assets/images/Profile-Gradients.png";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import ProfileSubscription from "@/common/layout/profilesubs-sidebar";
const SubscriptionPage = () => {
  const features = [
    "Store website & Product catalog",
    "Receiving & Inventory management",
    "Chatbot",
    "Shipping",
    "Customer database & CRM",
    "Dashboard",
    "POS",
    "Staff & Supplier management",
  ];
  return (
    <>
      <Box
        sx={{
          padding: " 20px 0px 60px 0px",
          bgcolor: "#000",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <div className=" text-white py-12 ">
            <div className="grid grid-cols-12 gap-16 items-start">
              <div className="col-span-12 md:col-span-3 rounded-lg mt-[-1.6rem] space-y-4 max-w-[340px] relative">
                <ProfileSubscription/>
               
              </div>

              <div className="col-span-12 md:col-span-9  ">
                <div className="  space-y-6 ">
                  <h2 className="text-[#fff] mt-0 text-[18px] font_neue_montreal_regular leading-[120%] tracking-[-0.01rem] space-[42.9px] font-semibold">
                    Subscription Plan
                  </h2>
                  <p className="text-gray-400 text-[16px] font_neue_montreal_regular">
                    Current subscription. Click 'Change Plan' to update
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 bg-[#1C1F26] p-6 rounded-[16px] border border-[#475968] flex flex-col gap-4">
                      <div>
                        <h3 className="text-white text-[32px] font-normal font_neue_montreal_regular leading-[120%] tracking-[-0.03rem] space-[42.9px]">
                          Pro
                        </h3>
                        <p className="text-[#A1A1AA] mt-1 text-[16px] font_neue_montreal_regular leading-[120%] tracking-[-0.01rem] space-[42.9px]">
                          For big feature-enhanced businesses
                        </p>
                      </div>

                      <div>
                        <p className="text-white text-[32px] font-normal font_neue_montreal_regular leading-[120%] tracking-[-0.03rem] space-[42.9px]">
                          $1,599{" "}
                          <span className="text-[#A1A1AA] mt-1 text-[16px] font_neue_montreal_regular leading-[120%] tracking-[-0.01rem] space-[42.9px]">/ Month</span>
                        </p>
                      </div>

                      <div className="w-full h-px bg-[#2C2F36]"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <p className="text-[#A1A1AA] mt-1 text-[16px] font_neue_montreal_regular leading-[120%] tracking-[-0.01rem] space-[42.9px]">
                            Billed Monthly
                          </p>
                          <p className="text-[#A1A1AA] mt-1 text-[16px] font_neue_montreal_regular leading-[120%] tracking-[-0.01rem] space-[42.9px]">
                            Renews: 16.05.2025
                          </p>
                        </div>
                        <button className="bg-transparent border border-white text-white text-[16px] px-4 py-2 rounded-md hover:bg-white hover:text-[#1C1F26] transition font_neue_montreal_regular">
                          Change Plan
                        </button>
                      </div>
                    </div>

                    {/* right side card */}

                    <div className="md:col-span-8 bg-[#1C1F26] p-6 rounded-[16px] border border-[#475968]">
                      <h4 className="text-white text-[18px] font-semibold mb-4 font_neue_montreal_regular leading-[120%] space-[42.9px]">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-2 gap-y-4 gap-x-6 text-white text-[16px] font_neue_montreal_regular">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[16px] leading-[120%] font-normal tracking-[-0.01rem] space-[42.9px]">
                            <CheckIcon className="w-5 h-5 text-[#3E6EFF] " />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* reset pass */}

                <div className="bg-[#1C1F26] border border-[#475968]/20 rounded-[20px] p-4 flex items-center justify-between mt-4 mb-4">
                  <div>
                    <h4 className="text-white text-sm font-semibold font_neue_montreal_regular text-[18px] mt-1 font_neue_montreal_regular leading-[120%]  tracking-[-0.01rem] pb-1">
                      Additional Features
                    </h4>
                    <p className="text-white text-[16px] mt-1 font_neue_montreal_regular leading-[120%] font-normal tracking-[-0.01rem] flex items-center ">
                    <CheckIcon className="w-5 h-5 text-[#3E6EFF] mr-2" />  MES (+$500 / Month)
                    </p>
                  </div>
                </div>

                {/*  two factor authentication */}

                <div className="bg-[#1C1F26] border border-[#475968] rounded-[20px] px-6 py-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-white text-[18px] font-semibold leading-[120%] tracking-[-0.01rem] pb-2 font_neue_montreal_regular">
                      Cancel Subscription
                    </h4>
                    <p className="text-[#A1A1AA] text-[16px] leading-[120%] tracking-[-0.01rem] font-normal font_neue_montreal_regular">
                      You’ll keep access until the end of the billing period,
                      and won’t be charged again.
                    </p>
                  </div>
                  <button className="bg-transparent text-white border border-white-100 hover:bg-gray-700 px-4 py-3 rounded-[8px] text-[16px] font_neue_montreal_regular font-semibold leading-[135%]">
                    Cancel Subscription
                  </button>
                </div>

                {/* button groups reset and save changes  */}
              </div>
            </div>
          </div>
        </Container>
        <div className="">
          <Image
            src={ProfileGradient}
            className="absolute top-0 left-0 w-full  pointer-events-none"
          />
        </div>
      </Box>
    </>
  );
};

export default SubscriptionPage;