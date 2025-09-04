import { Box, Container, Divider } from "@mui/material";
import React from "react";

const PrivacyContent = () => {
  return (
    <div>
      <Box sx={{ padding: { xs: "40px 0px", md: "80px 0px" }, bgcolor: "#14181B", borderRadius: "16px" }}>
        <Container maxWidth="xl">
          <div className="text-white py-6 md:py-12">
            <div className="grid grid-cols-12 gap-4 md:gap-16 items-start">
              <div className="col-span-12 md:col-span-3 bg-[#1C1F26] rounded-lg p-4 md:p-6 space-y-3 md:space-y-4 mx-auto md:mx-0 w-full max-w-[340px]">
                <h3 className="text-[20px] md:text-[24px] font-normal leading-[120%] tracking-[0.02rem] font_neue_montreal_regular">Our Contacts</h3>
                <Divider
                  sx={{
                    my: 2,
                    mx: -3,
                    backgroundColor: "#5E6973",
                    height: "1.5px"
                  }}
                />
                <div>
                  <p className="text-[16px] md:text-[18px] text-gray-500 font_neue_montreal_regular leading-[110%] tracking-[-0.01rem] pb-2 font-semibold">EMAIL</p>
                  <p className="text-[16px] md:text-[18px] font_neue_montreal_regular font-semibold leading-[120%] tracking-[0%]">info@scalyx.com</p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-gray-500 font_neue_montreal_regular leading-[110%] tracking-[-0.01rem] pb-2 font-semibold">PHONE</p>
                  <p className="text-[16px] md:text-[18px] font_neue_montreal_regular font-semibold leading-[120%] tracking-[0%]">+1 512 327 5736</p>
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] text-gray-500 font_neue_montreal_regular leading-[110%] tracking-[-0.01rem] pb-2 font-semibold">ADDRESS</p>
                  <p className="text-[16px] md:text-[18px] font_neue_montreal_regular font-semibold leading-[120%] tracking-[0%]">
                    2826 Bee Caves Rd, Austin, TX 78746, USA
                  </p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-9 space-y-4 md:space-y-6 mt-6 md:mt-0">
                <div className="pb-6 md:pb-10">
                <p className="text-[16px] md:text-[18px] text-gray-400 font_neue_montreal_regular font-semibold leading-[110%] tracking-[-0.01rem] pb-4 md:pb-8">EFFECTIVE DATE: 10.01.2025</p>
                <p className="max-w-[960px] text-[18px] md:text-[24px] font-normal leading-[120%] font_neue_montreal_regular tracking-[-0.02rem] text-[#F3F6FF]">
                Scalyx ("we," "us," or "our") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to the terms outlined in this Privacy Policy.
                </p>
                </div>
        
               {/* how we collect information */}

                <div className="pb-4 md:pb-6">
                <h2 className="text-[32px] md:text-[48px] font-normal font_neue_montreal_regular leading-[110%] tracking-[-0.03rem] pb-3 md:pb-4">Information we collect</h2>
                <p className="text-[18px] md:text-[24px] pb-4 md:pb-7 font-normal leading-[120%] tracking-[-0.02rem]">
                  We may collect the following types of information:
                </p>
                <ul className="list-decimal list-outside space-y-2 text-gray-300 text-sm max-w-[970px] ml-4">
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4">
                    <strong className="text-[#fff]">Personal information:</strong> Name, email address, phone number, mailing address, and other contact details when you register, subscribe, or communicate with us.
                  </li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4">
                   <strong className="text-[#fff]">Account information:</strong> Username, password, and other security details for account creation.
                  </li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4">
                  <strong className="text-[#fff]">Usage data:</strong> Information about how you interact with our Services, including IP address, browser type, operating system, and device identifiers.
                  </li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4">
                  <strong className="text-[#fff]">Cookies and Tracking technologies:</strong> We use cookies, web beacons, and similar tracking technologies to enhance user experience and analyze traffic.
                  </li>
                  
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4">
                  <strong className="text-[#fff]">Payment information:</strong> If you make a purchase, we collect payment details, such as credit card information, through a secure third-party payment processor.
                  </li>
                </ul>
                </div>
                
                {/* how we use information */}

                <div className="pb-4 md:pb-6">
                <h2 className="text-[32px] md:text-[48px] font-normal font_neue_montreal_regular leading-[110%] tracking-[-0.03rem] pb-3 md:pb-4">
                  How we use your information
                </h2>
                <p className="text-[18px] md:text-[24px] pb-4 md:pb-7 font-normal leading-[120%] tracking-[-0.02rem]">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside">
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]">To provide, maintain, and improve our Services.</li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]" >To personalize user experience and provide customer support.</li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]">To send updates, newsletters, and promotional materials (you may opt out at any time).</li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]">To process payments and transactions securely.</li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]">To analyze trends and optimize our platform’s performance.</li>
                </ul>
                </div>
                
                {/* How to share your Information  */}
                 
                <div className="pb-4 md:pb-6">
                <h2 className="text-[32px] md:text-[48px] font-normal font_neue_montreal_regular leading-[110%] tracking-[-0.03rem] pb-3 md:pb-4">How we share your information</h2>
                <p className="text-[18px] md:text-[24px] pb-4 md:pb-7 font-normal leading-[120%] tracking-[-0.02rem] max-w-[970px]">
                We do not sell your personal data. However, we may share your information in the following cases:
                </p>
                <ul className="list-decimal list-outside space-y-2 text-gray-300 text-sm max-w-[970px] ml-4">
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4">
                  <span className="text-[#fff] font-bold"> Service providers:</span> With third-party vendors who assist with our operations, such as hosting, analytics, and customer support.
                  </li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4">
                   <strong className="text-[#fff]">Legal requirements:</strong> If required by law or to protect our legal rights.
                  </li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4">
                  <strong className="text-[#fff]">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets.
                  </li>
                 
                </ul>
                </div>


                {/* Data Security  */}

                <div className="pb-4 md:pb-6">
                <h2 className="text-[32px] md:text-[48px] font-normal font_neue_montreal_regular leading-[110%] tracking-[-0.03rem] pb-4 md:pb-8">Data security</h2>
                <p className="text-[16px] md:text-[18px] pb-4 md:pb-7 font-normal leading-[120%] tracking-[-0.02rem] max-w-[970px]">
                We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and take precautions to protect your account.
                </p>
                
                </div>

                {/* your Right and choices  */}

                <div className="pb-4 md:pb-6">
                <h2 className="text-[32px] md:text-[48px] font-normal font_neue_montreal_regular leading-[110%] tracking-[-0.03rem] pb-3 md:pb-4">
                Your Rights and choices
                </h2>
                <p className="text-[18px] md:text-[24px] pb-4 md:pb-7 font-normal leading-[120%] tracking-[-0.02rem]">
                You have the right to:
                </p>
                <ul className="list-disc list-inside pb-4 md:pb-6">
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]">Access, update, or delete your personal information.</li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]" >Opt out of marketing communications.</li>
                  <li className="font-semibold text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]">Restrict or object to data processing where applicable.</li>
                  
                </ul>
                <p className="font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF]">To exercise your rights <a href="" className="pl-1 font-normal text-[16px] md:text-[18px] leading-[120%] tracking-[0%] space-[42.5px] font_neue_montreal_regular pb-4 text-[#F3F6FF] underline">Contact Advisor</a></p>
                </div>

                {/* third part link and services  */}

                <div className="pb-4 md:pb-6">
                <h2 className="text-[32px] md:text-[48px] font-normal font_neue_montreal_regular leading-[110%] tracking-[-0.03rem] pb-4 md:pb-8">Third-party links and services</h2>
                <p className="text-[16px] md:text-[18px] pb-4 md:pb-7 font-normal leading-[120%] tracking-[-0.02rem] max-w-[940px]">
                Our Services may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies before providing personal information.
                </p>
                
                </div>

                {/* change the privacy Policy  */}

                <div className="pb-4 md:pb-6">
                <h2 className="text-[32px] md:text-[48px] font-normal font_neue_montreal_regular leading-[110%] tracking-[-0.03rem] pb-4 md:pb-8">Changes to this privacy policy</h2>
                <p className="text-[16px] md:text-[18px] pb-4 md:pb-7 font-normal leading-[120%] tracking-[-0.02rem] max-w-[940px]">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our Services constitutes acceptance of those changes.
                </p>
                
                </div>

                {/* contact us */}

                <div className="pb-4 md:pb-6">
                <h2 className="text-[32px] md:text-[48px] font-normal font_neue_montreal_regular leading-[110%] tracking-[-0.03rem] pb-3 md:pb-6">Contact us</h2>
                <p className="text-[16px] md:text-[18px] pb-4 md:pb-7 font-normal leading-[120%] tracking-[-0.02rem] max-w-[940px]">
                If you have any questions about this Privacy Policy, please contact us at:
                </p>

                <div className="pb-4 md:pb-6">
                    <p className="font-semibold text-[16px] md:text-[18px] leading-[120%] space-[42.9px] tracking-[0%] text-[#F3F6FF] font_neue_montreal_regular pb-3 md:pb-4"><span className="pr-2 text-[#899099]">Email:</span>info@scalyx.com</p>
                    <p className="font-semibold text-[16px] md:text-[18px] leading-[120%] space-[42.9px] tracking-[0%] text-[#F3F6FF] font_neue_montreal_regular pb-3 md:pb-4"><span className="pr-2 text-[#899099]">PHONE:</span>+1 512 327 5736</p>
                    <p className="font-semibold text-[16px] md:text-[18px] leading-[120%] space-[42.9px] tracking-[0%] text-[#F3F6FF] font_neue_montreal_regular pb-3 md:pb-4"><span className="pr-2 text-[#899099] uppercase">address:</span>2826 Bee Caves Rd, Austin, TX 78746, USA</p>
                </div>
                <p className="font-normal text-[18px] md:text-[24px] leading-[120%] space-[42.9px] tracking-[0.02rem] text-[#F3F6FF] font_neue_montreal_regular">Thank you for trusting Scalyx with your information.</p>
                
                </div>
                
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default PrivacyContent;
