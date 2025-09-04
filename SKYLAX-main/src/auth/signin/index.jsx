"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
  Checkbox,
  Link,
} from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logoAndIcons/skylaxLogo.svg";
import apple from "../../../public/assets/images/apple.svg";
import facebook from "../../../public/assets/images/facebook.svg";
import google from "../../../public/assets/images/google.svg";
import TopEllipse from "../../../public/assets/images/topLoginElipse.png";
import bottomEllipse from "../../../public/assets/images/bottomLoginElipse.png";
import { apis } from "@/utils/apis";
import { useApi } from "@/hooks/useApi";
import { showToast } from "@/utils/toastConfig";

export default function LoginModal({ isOpen, onOpenChange, onSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValidEmail = /\S+@\S+\.\S+/.test(email);
  const showErrors = submitted;
      const {signin } = apis;
      const {Post}= useApi();

    const handleLogin = async (onClose) => {
    setSubmitted(true);

    if (isValidEmail && password.trim() !== "" && remember) {
      try {
        setLoading(true);

        const payload = {
          email,
          password,
        };

        const res = await Post(signin, payload);
        if (res?.data?.jwtToken) {
          localStorage.setItem('token', res.data.jwtToken);
          showToast.success("Login Successful");
          onClose();
        }
      } catch (err) {
        showToast.error(err?.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="bottom-center"
      className="relative !max-w-none !w-auto"
    >
      <ModalContent className="!backdrop-blur-xl !bg-[#0E1116]/90 !rounded-2xl !p-6 !w-[520px] relative !mt-[100px] !min-h-[700px] z-20">
        {(onClose) => (
          <>
            <div className="absolute top-0 left-0 pointer-events-none w-full z-[-1]">
              <Image src={TopEllipse} className="w-full" alt="top ellipse" />
            </div>

            <div className="flex flex-col items-start space-y-2 mb-8">
              <Image src={logo} alt="scalyx" width={121} height={28} />
            </div>

            <div className="flex flex-col items-center space-y-2 mb-6">
              <h2 className="text-white text-[40px] font-semibold font_neue_montreal_regular leading-[100%]">
                Log In
              </h2>
            </div>

            <ModalBody>
              {/* Email */}
              <label className="text-[18px] font-semibold font_neue_montreal_regular">
                Email Address
              </label>
              <div className="p-[1px] rounded-[12px] ">
                <Input
                  placeholder="Enter email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="bordered"
                  classNames={{
                    inputWrapper:
                      "bg-[#475968CC] border border-[#F3F6FF] border-[1.5px] rounded-[12px] px-4 py-6",
                    input:
                      "text-white placeholder:text-white/60 text-[16px] font-normal font_neue_montreal_regular",
                  }}
                />
                {showErrors && email.trim() === "" && (
                  <p className="text-red-500 text-sm mt-1">Email is required</p>
                )}
                {showErrors && email.trim() !== "" && !isValidEmail && (
                  <p className="text-red-500 text-sm mt-1">Invalid email format</p>
                )}
              </div>

              {/* Password */}
              <label className="text-[18px] font-semibold font_neue_montreal_regular mt-3">
                Password
              </label>
              <div className="p-[1px] rounded-[12px] ">
                <Input
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="bordered"
                  classNames={{
                    inputWrapper:
                      "bg-[#475968CC] border border-[#F3F6FF] border-[1.5px] rounded-[12px] px-4 py-6",
                    input:
                      "text-white placeholder:text-white/60 text-sm font_neue_montreal_regular",
                  }}
                />
                {showErrors && password.trim() === "" && (
                  <p className="text-red-500 text-sm mt-1">Password is required</p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex justify-between items-center py-4">
                <Checkbox
                  isSelected={remember}
                  onValueChange={setRemember}
                  classNames={{
                    label:
                      "text-sm text-white text-[16px] font-normal font_neue_montreal_regular",
                  }}
                >
                  Remember me
                </Checkbox>
                <Link
                  href="#"
                  size="sm"
                  className="text-[16px] font-normal font_neue_montreal_regular bg-gradient-to-r from-[#55D0FF] to-[#6361FC] bg-clip-text text-transparent"
                >
                  Forgot your password?
                </Link>
              </div>
              {showErrors && !remember && (
                <p className="text-red-500 text-sm mt-1">You must agree to Remember me</p>
              )}

              {/* Login button */}
          
               <Button
                className="mt-2 w-full text-[#080707] font-semibold text-[16px] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] font_neue_montreal_regular p-6"
                onPress={() => handleLogin(onClose)}
                disabled={loading}
              >
                {loading ? "Signing in..." : "Login"}
              </Button>

              {/* Divider */}
              <div className="flex items-center justify-center my-4 text-gray-400 text-sm">
                <span className="px-2 text-[16px] font_neue_montreal_regular text-[#F3F6FF]capitalize">
                  or
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-6">
                {[google, facebook, apple].map((icon, i) => (
                  <div
                    key={i}
                    className="w-[52px] h-[52px] rounded-full p-[1px]"
                    style={{
                      background:
                        "radial-gradient(circle at center, #F3F6FF 0%, rgba(243, 246, 255, 0) 100%)",
                    }}
                  >
                    <div className="bg-[#2B2E35] rounded-full flex items-center justify-center w-full h-full">
                      <Image src={icon} alt="social" width={24} height={24} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Sign up link */}
              <p className="text-center text-[16px] text-[#F3F6FF] mt-4 font_neue_montreal_regular">
                Don’t have an account?{" "}
                <Link href="#" className="underline text-[#fff]" onClick={onSignUpClick}>
                  Sign Up
                </Link>
              </p>
            </ModalBody>

            <div className="absolute bottom-0 right-0 pointer-events-none w-full z-0">
              <Image src={bottomEllipse} className="w-full" alt="bottom ellipse" />
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
