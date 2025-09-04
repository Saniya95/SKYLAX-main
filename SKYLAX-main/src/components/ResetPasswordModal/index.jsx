"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Input,
} from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logoAndIcons/skylaxLogo.svg";
import TopEllipse from "../../../public/assets/images/topLoginElipse.png";
import bottomEllipse from "../../../public/assets/images/bottomLoginElipse.png";
import { showToast } from "@/utils/toastConfig";
import { useApi } from "@/hooks/useApi";
import { apis } from "@/utils/apis";

export default function ResetPasswordModal({ isOpen, onOpenChange }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { Post } = useApi();
  const { change_password } = apis;

  const showErrors = submitted;
  const passwordsMatch = newPassword === confirmPassword && confirmPassword !== "";
  const isValidPassword = newPassword.trim() !== "" && confirmPassword.trim() !== "";

  const handleResetPassword = async (onClose) => {
    setSubmitted(true);

    if (isValidPassword && passwordsMatch && newPassword.trim() !== "") {
      try {
        setLoading(true);
        
        const payload = {
          new_password: newPassword,
          confirm_password: confirmPassword
        };

        const res = await Post(change_password, payload);
        
        if (res?.status) {
          showToast.success("Password changed successfully");
          onClose();
          
          // Reset form
          setNewPassword("");
          setConfirmPassword("");
          setSubmitted(false);
        }
      } catch (err) {
        showToast.error(err?.message || "Failed to change password");
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
      <ModalContent className="!backdrop-blur-xl !bg-[#0E1116]/90 !rounded-2xl !p-6 !w-[520px] relative !mt-[100px] !min-h-[500px] z-20">
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
                Reset Password
              </h2>
            </div>

            <ModalBody>
              {/* New Password */}
              <label className="text-[18px] font-semibold font_neue_montreal_regular">
                New Password
              </label>
              <div className="p-[1px] rounded-[12px]">
                <Input
                  placeholder="Enter new password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  variant="bordered"
                  classNames={{
                    inputWrapper:
                      "bg-[#475968CC] border border-[#F3F6FF] border-[1.5px] rounded-[12px] px-4 py-6",
                    input:
                      "text-white placeholder:text-white/60 text-[16px] font-normal font_neue_montreal_regular",
                  }}
                />
                {showErrors && newPassword.trim() === "" && (
                  <p className="text-red-500 text-sm mt-1">New password is required</p>
                )}
              </div>

              {/* Confirm Password */}
              <label className="text-[18px] font-semibold font_neue_montreal_regular mt-3">
                Confirm Password
              </label>
              <div className="p-[1px] rounded-[12px]">
                <Input
                  placeholder="Confirm new password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  variant="bordered"
                  classNames={{
                    inputWrapper:
                      "bg-[#475968CC] border border-[#F3F6FF] border-[1.5px] rounded-[12px] px-4 py-6",
                    input:
                      "text-white placeholder:text-white/60 text-[16px] font-normal font_neue_montreal_regular",
                  }}
                />
                {showErrors && confirmPassword.trim() === "" && (
                  <p className="text-red-500 text-sm mt-1">Please confirm your password</p>
                )}
                {showErrors && confirmPassword.trim() !== "" && !passwordsMatch && (
                  <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                )}
              </div>

              {/* Save button */}
              <Button
                className="mt-6 w-full text-[#080707] font-semibold text-[16px] bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] font_neue_montreal_regular p-6"
                onPress={() => handleResetPassword(onClose)}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </Button>
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
