import { Box, Container, Switch } from "@mui/material";
import React, { useState, useEffect } from "react";

import ProfileGradient from "../../../public/assets/images/Profile-Gradients.png";
import Image from "next/image";
import Link from "next/link";
import ProfileSubscription from "@/common/layout/profilesubs-sidebar";
import { useApi } from "@/hooks/useApi";
import { apis } from "@/utils/apis";
import ResetPasswordModal from "@/components/ResetPasswordModal";

const ProfilePage = () => {
  const label = { inputProps: { "aria-label": "Switch demo" }};
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    subscription: null
  });
  const [loading, setLoading] = useState(true);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  
  const { Get, Post } = useApi();
  const { profile, update_profile } = apis;
  const [mobile, setMobile] = useState({
    country_code: "IND",
    number: ""
  });

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    try {
      setLoading(true);
      const data = await Get(profile);
      if (data?.status && data?.data) {
        console.log(data.data, "__profile_data__");
        setProfileData(data.data);
        
        if (data.data.mobile) {
          setMobile({
            country_code: data.data.mobile.country_code || "IND",
            number: data.data.mobile.number || ""
          });
        }
      }
    } catch (error) {
      console.log(error, "_error_");
    } finally {
      setLoading(false);
    }
  };

  const saveChanges = async () => {
    try {
      setLoading(true);
      const payload = {
        name: profileData.name,
        email: profileData.email,
        mobile: {
          country_code: mobile.country_code,
          number: mobile.number
        }
      };
      
      const data = await Post(update_profile, payload);
      if (data?.status) {
        await getProfileData();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          padding: " 20px 0px 0px 0px",
          bgcolor: "#000",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <div className=" text-white py-12 ">
            <div className="grid grid-cols-12 gap-16 items-start">
              <div className="col-span-12 md:col-span-3 rounded-lg mt-[-1.6rem] space-y-4 max-w-[340px] relative">
                <ProfileSubscription />
              </div>

              <div className="col-span-12 md:col-span-9  ">
                <div className=" bg-[#13161D] p-6 rounded-[20px] shadow-md space-y-6 border border-[#475968]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[18px] text-white mb-1 font_neue_montreal_regular leading-[120%] font-bold pb-3 tracking-[0.00rem] space-[42.9px]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Jordan"
                        value={profileData.name ? profileData.name.split(' ')[0] : ''}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value + (profileData.name.includes(' ') ? ' ' + profileData.name.split(' ')[1] : '')})}
                        className="w-full bg-[#1C1F26] text-white border border-gray-700 rounded-[12px] px-[12px] py-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    {/* <div>
                      <label className="block text-[18px] text-white mb-1 font_neue_montreal_regular leading-[120%] font-bold pb-3 tracking-[0.00rem] space-[42.9px]">
                        Second Name
                      </label>
                      <input
                        type="text"
                        placeholder="Johnson"
                        value={profileData.name && profileData.name.includes(' ') ? profileData.name.split(' ')[1] : ''}
                        onChange={(e) => setProfileData({...profileData, name: (profileData.name.includes(' ') ? profileData.name.split(' ')[0] : profileData.name) + ' ' + e.target.value})}
                        className="w-full bg-[#1C1F26] text-white border border-gray-700 rounded-[12px] px-[12px] py-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div> */}
                  </div>

                  <div>
                    <label className="block text-[18px] text-white mb-1 font_neue_montreal_regular leading-[120%] font-bold pb-3 tracking-[0.00rem] space-[42.9px]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="glimmergrace@jewelry.com"
                      value={profileData.email || ''}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full bg-[#1C1F26] text-white border border-gray-700 rounded-[12px] px-[12px] py-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[18px] text-white mb-1 font_neue_montreal_regular leading-[120%] font-bold pb-3 tracking-[0.00rem] space-[42.9px]">
                      Phone Number
                    </label>
                    <div className="flex items-center gap-6">
                      <select 
                        className="w-[150px] bg-[#1C1F26] text-white border border-gray-700 rounded-[12px] px-[12px] py-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 pr-4"
                        value={mobile.country_code}
                        onChange={(e) => setMobile({...mobile, country_code: e.target.value})}
                      >
                        <option value="USA">USA</option>
                        <option value="IND">IND</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="9098765432"
                        value={mobile.number}
                        onChange={(e) => setMobile({...mobile, number: e.target.value})}
                        className="w-full bg-[#1C1F26] text-white border border-gray-700 rounded-[12px] px-[12px] py-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* reset pass */}

                <div className="bg-[#1C1F26] border border-[#475968]/20 rounded-[20px] p-4 flex items-center justify-between mt-4 mb-4">
                  <div>
                    <h4 className="text-white text-sm font-semibold font_neue_montreal_regular text-[18px] mt-1 font_neue_montreal_regular leading-[120%]  tracking-[-0.01rem] pb-1">
                      Reset Password
                    </h4>
                    <p className="text-gray-400 text-[16px] mt-1 font_neue_montreal_regular leading-[120%] font-normal tracking-[-0.01rem]">
                      A reset link will be sent to your email
                    </p>
                  </div>
                  <button 
                    className="bg-transparent text-white border border-white-100 hover:bg-gray-700 px-4 py-3 rounded-[8px] text-[16px] font_neue_montreal_regular font-semibold leading-[135%]"
                    onClick={() => setIsResetPasswordModalOpen(true)}
                  >
                    Reset Password
                  </button>
                </div>

                {/*  two factor authentication */}

                <div className="bg-[#1C1F26] border border-[#475968] rounded-[20px] px-6 py-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-white text-[18px] font-semibold leading-[120%] tracking-[-0.01rem] pb-1 font_neue_montreal_regular">
                      Two-Factor Authentication
                    </h4>
                    <p className="text-[#A1A1AA] text-[16px] leading-[120%] tracking-[-0.01rem] font-normal font_neue_montreal_regular">
                      Enhance account security by requiring a one-time code sent
                      via SMS in addition to your password during sign-in
                    </p>
                  </div>
                  <Switch {...label} defaultChecked />
                </div>

                {/* button groups reset and save changes  */}

                <div className="flex items-center gap-5 mt-10 justify-end ">
                  <button className="px-7 py-5 rounded-[12px] border border-white text-white text-[18px] font-semibold font_neue_montreal_regular hover:bg-white hover:text-[#1C1F26] transition leading-[135%] ">
                    Reset changes
                  </button>

                  <button 
                    className="px-7 py-5 rounded-[12px] text-white bg-gradient-to-r from-[#55D0FF] to-[#6361FC] text-[18px] font-semibold font_neue_montreal_regular hover:opacity-90 transition leading-[135%] disabled:opacity-50"
                    onClick={saveChanges}
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
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

      {/* Reset Password Modal */}
      <ResetPasswordModal 
        isOpen={isResetPasswordModalOpen}
        onOpenChange={setIsResetPasswordModalOpen}
      />
    </>
  );
};

export default ProfilePage;
