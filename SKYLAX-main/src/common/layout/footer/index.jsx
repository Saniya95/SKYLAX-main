import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import skylaxLogo from "../../../../public/assets/logoAndIcons/skylaxLogo.svg";
import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
  Select,
  SelectItem,
} from "@heroui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import footerGradient from "../../../../public/assets/images/footerGradient.png";
import MobileFooter from "../../../../public/assets/images/mobileFooter.png";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";

const Footer = ({ onLoginClick }) => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  const [websiteOpen, setWebsiteOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Mobile Footer */}
      <div className="block sm:hidden w-full bg-[#080707] min-h-screen flex flex-col justify-between mt-5 relative overflow-hidden">
        {/* Section-wide overlay like first section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,22,27,0)_0%,rgba(18,22,27,0.22)_28%,rgba(18,22,27,0.55)_68%,rgba(18,22,27,0.9)_100%)]"
        />
        <div className="flex flex-col items-center pt-8 px-4">
          <div className="sm:hidden flex w-full justify-center">
            <Link href={"/"}>
              <Image
                src={skylaxLogo}
                alt="skylaxLogo"
                className="w-[167px] h-[40px]"
              />
            </Link>
          </div>
          <p className="text-center text-[#F3F6FF80] text-[16px] mb-8 mt-4 max-w-[254px]">
            Log in to your account to enjoy the best experience with Scalyx!
          </p>
          <Button
            color="primary"
            variant="faded"
            className="w-fit py-6 px-10 mb-8 text-[18px] !border-[2px] border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent !rounded-[8px] flex justify-center items-center"
            // onClick={onLoginClick}
          >
            Login
          </Button>

          {/* Accordions */}
          <div className="w-full mb-8">
            {/* Website Accordion */}
            <button
              className="w-full flex justify-between items-center bg-[#18181B] rounded-lg px-4 py-3 mb-2 text-white text-[18px] font_neue_montreal_regular"
              onClick={() => setWebsiteOpen((v) => !v)}
            >
              <span>Website</span>
              <span className="text-[20px]">{websiteOpen ? "-" : "+"}</span>
            </button>
            {websiteOpen && (
              <ul className="pl-4 pb-4">
                <li className="py-1">
                  <Link href="#">Home</Link>
                </li>
                <li className="py-1">
                  <Link href="#">AI solution</Link>
                </li>
                <li className="py-1">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="py-1">
                  <Link href="/contact-advisor">Contact advisor</Link>
                </li>
              </ul>
            )}
            {/* Services Accordion */}
            <button
              className="w-full flex justify-between items-center bg-[#18181B] rounded-lg px-4 py-3 text-white text-[18px] font_neue_montreal_regular"
              onClick={() => setServicesOpen((v) => !v)}
            >
              <span>Services</span>
              <span className="text-[20px]">{servicesOpen ? "-" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-2">
                {/* Management */}
                <div className="mb-4 mt-4">
                  <h5 className="text-[16px] font-medium tracking-[-1%] text-[#899099] leading-[110%] font_neue_montreal_regular uppercase mb-2">
                    Management
                  </h5>
                  <ul className="">
                    <li className="py-1 text-[16px]">
                      <Link href="#">Reporting and dashboards</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Customer information database</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Work order management</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Price and markdown management</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Dashboard</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Accounting</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Staff management</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">MES</Link>
                    </li>
                  </ul>
                </div>
                {/* Commerce */}
                <div className="mb-4">
                  <h5 className="text-[16px] font-medium tracking-[-1%] text-[#899099] leading-[110%] font_neue_montreal_regular uppercase mb-2">
                    Commerce
                  </h5>
                  <ul className="">
                    <li className="py-1 text-[16px]">
                      <Link href="#">Store website</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Product catalog</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Loyalty program</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Chatbot</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">CRM</Link>
                    </li>
                  </ul>
                </div>
                {/* Inventory */}
                <div className="mb-4">
                  <h5 className="text-[16px] font-medium tracking-[-1%] text-[#899099] leading-[110%] font_neue_montreal_regular uppercase mb-2">
                    Inventory
                  </h5>
                  <ul className="">
                    <li className="py-1 text-[16px]">
                      <Link href="#">Inventory management</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Receiving management</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Supplier management</Link>
                    </li>
                    <li className="py-1 text-[16px]">
                      <Link href="#">Shipping</Link>
                    </li>
                  </ul>
                </div>
                {/* POS */}
                <div className="mb-2">
                  <h5 className="text-[16px] font-medium tracking-[-1%] text-[#F8F8FF] leading-[110%] font_neue_montreal_regular uppercase">
                    POS
                  </h5>
                </div>
              </div>
            )}
          </div>

          {/* Retail, Docs, Contact, Address, Social Media */}
          <div className="w-full grid grid-cols-2 gap-y-4 gap-x-6 mb-4 items-start">
            <div>
              <p className="text-[24px] text-[#899099] font_neue_montreal_regular mb-1">
                Retail
              </p>
              <p className="text-white text-[16px] pb-3">Jewelry & Watches</p>
              <p className="text-white text-[16px]">Coins</p>
            </div>
            <div>
              <p className="text-[24px] text-[#899099] font_neue_montreal_regular mb-1">
                Docs
              </p>
              <p className="text-white text-[16px] pb-3">Terms of service</p>
              <p className="text-white text-[16px]">Privacy policy</p>
            </div>
            <div>
              <p className="text-[24px] text-[#899099] font_neue_montreal_regular mb-1">
                Contact
              </p>
              <p className="text-white text-[16px] pb-3">info@scalyx.com</p>
              <p className="text-white text-[16px]">+1 512 327 5736</p>
            </div>
            <div>
              <p className="text-[24px] text-[#899099] font_neue_montreal_regular mb-1">
                Address
              </p>
              <p className="text-white text-[13px] leading-[120%] tracking-[-0.01rem]">
                2826 Bee Caves Rd,
                <br />
                Austin, TX 78746, USA
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[24px] text-[#899099] font_neue_montreal_regular mb-1">
                Social Media
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <Link href="#" className="text-white text-[16px]">
                  Instagram
                </Link>
                <Link href="#" className="text-white text-[16px]">
                  Facebook
                </Link>
                <Link href="#" className="text-white text-[16px]">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Country selector and copyright */}
        <div className="w-full flex flex-col items-center mt-auto pb-4 relative">
          {/* Country selector as dropdown */}
          <Select
            label={null}
            placeholder="Country"
            size="md"
            radius="md"
            variant="flat"
            color="default"
            className="w-auto min-w-[120px] text-[#F3F6FF] mb-2 !text-lg font_neue_montreal_medium"
            defaultSelectedKeys={["usa"]}
            onSelectionChange={() => {}}
            classNames={{
              trigger:
                "bg-transparent border-none shadow-none hover:bg-white/5 data-[hover=true]:bg-white/5 focus:outline-none focus:ring-0 data-[focus=true]:outline-none px-2 min-h-10",
              value: "whitespace-nowrap max-w-none text-[#F3F6FF]",
              selectorIcon: "text-[#F3F6FF]",
              popoverContent:
                "bg-[#F3F6FF] text-[#080707] rounded-xl shadow-xl border border-black/10 min-w-[160px]",
              listbox: "text-[#080707]",
            }}
          >
            <SelectItem key="usa" className="!text-lg text-[#080707]">USA</SelectItem>
            <SelectItem key="in" className="!text-lg text-[#080707]">India</SelectItem>
            <SelectItem key="uae" className="!text-lg text-[#080707]">UAE</SelectItem>
          </Select>
          <p className="text-center text-[16px] text-[#899099] font_neue_montreal_regular px-2 leading-[120%] tracking-[-0.01rem] font-normal mt-4">
            Scalyx 2024. © All rights reserved. Icons by
            <a
              href="https://www.iconfinder.com/justicon"
              target="_blank"
              rel="noopener noreferrer"
              className="underline px-1"
            >
              Paweł Kuna
            </a>{" "}
            /
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline pl-1"
            >
              CC BY 4.0
            </a>
          </p>
          {/* Gradient image at the bottom */}
          <div className="absolute left-0 bottom-[0] w-full pointer-events-none z-[1]">
            <Image
              src={MobileFooter}
              alt="footer gradient"
              className="w-full"
            />
          </div>
        </div>
      </div>
      {/* Desktop/Tablet Footer (unchanged) */}
      <div className="hidden sm:block">
        <Box sx={{ padding: "80px 0px 0px 0px", bgcolor: "#080707", position: "relative", overflow: "hidden" }}>
          {/* Section-wide overlay like first section */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,22,27,0)_0%,rgba(18,22,27,0.22)_28%,rgba(18,22,27,0.55)_68%,rgba(18,22,27,0.9)_100%)]"
          />
          <div className="pb-8 header_con">
            {/* website --- socialMedia --- contact */}
            <div className="w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="sm:block hidden w-full">
                <Link href={"/"}>
                  <Image
                    src={skylaxLogo}
                    alt="skylaxLogo"
                    width={1920}
                    height={1080}
                    className="w-[233px] h-[56px]"
                  />
                </Link>
              </div>
              <div className=" text-white p-4 ml-16">
                <ul className="p-[0px] m-[0px] list-none">
                  <li className="text-[32px] leading-[120%] tracking-[-3%] text-[#899099] font_neue_montreal_regular  pb-[20px]    ">
                    Website
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">AI solution</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]   ">
                    <Link href="/Pricing">Pricing</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]   ">
                    <Link href="/contact-advisor">Contact advisor</Link>
                  </li>
                </ul>
              </div>
              <div className=" text-white p-4 ml-8">
                <ul className="p-[0px] m-[0px] list-none">
                  <li className="text-[32px] leading-[120%] tracking-[-3%] text-[#899099] font_neue_montreal_regular  pb-[20px]    ">
                    Social Media
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">Instagram</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">Facebook</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]   ">
                    <Link href="#">LinkedIn</Link>
                  </li>
                </ul>
              </div>
              <div className=" text-white p-4 ml-8">
                <ul className="p-[0px] m-[0px] list-none">
                  <li className="text-[32px] leading-[120%] tracking-[-3%] text-[#899099] font_neue_montreal_regular  pb-[20px]    ">
                    Contact
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">info@scalyx.com</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">+1 512 327 5736</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Retail --- Docs --- Terms $ Service  */}
            <div className="w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              <div className=" text-white p-4">
                <p className="text-[16px] leading-[120%] tracking-[-3%] text-[#F3F6FF80] font_neue_montreal_regular  pb-[30px] font-normal  ">
                  Log in to your account to enjoy the
                  <br />
                  best experience with Scalyx!
                </p>
                <Button
                  color="primary"
                  variant="faded"
                  className="w-fit py-6 px-10 text-[18px] !border-[2px] border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent !rounded-[8px] flex justify-center items-center"
                  // onClick={onLoginClick}
                >
                  Login
                </Button>
              </div>
              <div className=" text-white p-4 ml-16">
                <ul className="p-[0px] m-[0px] list-none">
                  <li className="text-[32px] leading-[120%] tracking-[-3%] text-[#899099] font_neue_montreal_regular  pb-[20px]    ">
                    Retail
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">Jewelry & Watches</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">Coins</Link>
                  </li>
                  {/* <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]   ">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]   ">
                    <Link href="/contact-advisor">Contact advisor</Link>
                  </li> */}
                </ul>
              </div>
              <div className=" text-white p-4 ml-8">
                <ul className="p-[0px] m-[0px] list-none">
                  <li className="text-[32px] leading-[120%] tracking-[-3%] text-[#899099] font_neue_montreal_regular  pb-[20px]    ">
                    Docs
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">Terms of service</Link>
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">Privacy policy</Link>
                  </li>
                </ul>
              </div>
              <div className=" text-white p-4 ml-8">
                <ul className="p-[0px] m-[0px] list-none">
                  <li className="text-[32px] leading-[120%] tracking-[-3%] text-[#899099] font_neue_montreal_regular  pb-[20px]    ">
                    Address
                  </li>
                  <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[10px]">
                    <Link href="#">
                      2826 Bee Caves Rd,
                      <br />
                      Austin, TX 78746, USA
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* service Accordion */}
            <div className="w-full  grid grid-cols-1  gap-4 mt-6">
              <Accordion
                variant="bordered"
                className="bg-[#47596833] !border-none"
              >
                <AccordionItem
                  key="1"
                  aria-label="Services"
                  className="pl-4"
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <MinusIcon className="h-6 w-6 text-[#F3F6FF] rotate-90" />
                    ) : (
                      <PlusIcon className="h-6 w-6 text-[#F3F6FF]" />
                    )
                  }
                  title={
                    <span className="text-[32px] font_neue_montreal_regular  ">
                      Services
                    </span>
                  }
                >
                  <Divider className="my-4 mb-10 " />
                  {/* Managment */}
                  <div className="pb-14">
                    <h5 className="text-[24px] font-medium tracking-[-1%] text-[#899099] leading-[110.00000000000001%]  font_neue_montreal_regular uppercase ">
                      Management
                    </h5>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className=" text-white pt-8">
                        <ul className="p-[0px] m-[0px] list-none">
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Reporting and dashboards</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Customer information database</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]   ">
                            <Link href="#">Work order management</Link>
                          </li>
                        </ul>
                      </div>
                      <div className=" text-white pt-8">
                        <ul className="p-[0px] m-[0px] list-none">
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Price and markdown management</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Dashboard</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]   ">
                            <Link href="#">Accounting</Link>
                          </li>
                        </ul>
                      </div>
                      <div className=" text-white pt-8">
                        <ul className="p-[0px] m-[0px] list-none">
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Staff management</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">MES</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* commerce */}
                  <div className="pb-14">
                    <h5 className="text-[24px] font-medium tracking-[-1%] text-[#899099] leading-[110.00000000000001%]  font_neue_montreal_regular uppercase ">
                      commerce
                    </h5>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className=" text-white pt-8">
                        <ul className="p-[0px] m-[0px] list-none">
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Store website</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Product catalog</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]   ">
                            <Link href="#">Loyalty program</Link>
                          </li>
                        </ul>
                      </div>
                      <div className=" text-white pt-8">
                        <ul className="p-[0px] m-[0px] list-none">
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Chatbot</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">CRM</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* inventory */}
                  <div className="pb-14">
                    <h5 className="text-[24px] font-medium tracking-[-1%] text-[#899099] leading-[110.00000000000001%]  font_neue_montreal_regular uppercase ">
                      inventory
                    </h5>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className=" text-white pt-8">
                        <ul className="p-[0px] m-[0px] list-none">
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Inventory management</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Receiving management</Link>
                          </li>
                        </ul>
                      </div>
                      <div className=" text-white pt-8">
                        <ul className="p-[0px] m-[0px] list-none">
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Supplier management</Link>
                          </li>
                          <li className="text-[18px] leading-[120%] tracking-[-3%] text-[#F8F8FF] font_neue_montreal_regular padding-bottom-[20px] font_neue_montreal_regular pb-[15px]">
                            <Link href="#">Shipping</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Pos */}
                  <div className="">
                    <h5 className="text-[24px] font-medium tracking-[-1%] text-[#F8F8FF] leading-[110.00000000000001%]  font_neue_montreal_regular uppercase pb-6">
                      POS
                    </h5>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
            {/* All rights Reserved Div */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-4 mt-10">
              <div className="hidden lg:flex">
                {/* country selector */}
                <Select
                  label={null}
                  placeholder="Country"
                  size="md"
                  radius="md"
                  variant="flat"
                  color="default"
                  className="w-auto min-w-[120px] mr-4 !text-lg text-[#F3F6FF] font_neue_montreal_medium"
                  defaultSelectedKeys={["usa"]}
                  onSelectionChange={(key) => {
                    // handle country change if needed
                  }}
                  classNames={{
                    trigger:
                      "bg-transparent border-none shadow-none hover:bg-white/5 data-[hover=true]:bg-white/5 focus:outline-none focus:ring-0 data-[focus=true]:outline-none px-2 min-h-10",
                    value: "whitespace-nowrap max-w-none text-[#F3F6FF]",
                    selectorIcon: "text-[#F3F6FF]",
                    popoverContent:
                      "bg-[#F3F6FF] text-[#080707] rounded-xl shadow-xl border border-black/10 min-w-[160px]",
                    listbox: "text-[#080707]",
                  }}
                >
                  <SelectItem key="usa" className="!text-lg text-[#080707]">USA</SelectItem>
                  <SelectItem key="in" className="!text-lg text-[#080707]">India</SelectItem>
                  <SelectItem key="uae" className="!text-lg text-[#080707]">UAE</SelectItem>
                </Select>
              </div>
              <div className="">
                <p className="flex justify-end items-center text-[16px] font_neue_montreal_regular ">
                  Scalyx 2024. © All rights reserved. Icons by
                  <Link
                    href={
                      "https://www.figma.com/community/file/1042928259792594757"
                    }
                    target="_blank"
                    className="underline pl-2 pr-1"
                  >
                    {" "}
                    Paweł Kuna{" "}
                  </Link>{" "}
                  /
                  <Link
                    href={"https://creativecommons.org/licenses/by/4.0/"}
                    target="_blank"
                    className="underline pl-1"
                  >
                    CC BY 4.0
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={footerGradient}
              className="absolute bottom-0 left-0 w-full  pointer-events-none"
            />
          </div>
        </Box>
      </div>
    </>
  );
};

export default Footer;
