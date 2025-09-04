"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import faq_Gradient from "../../../../public/assets/images/faq-Gradient.png";
import BenefitsEllipse from "../../../../public/assets/images/BenefitsEllipse.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  CircularProgress,
} from "@mui/material";
import { CreditCardIcon } from "@heroicons/react/24/outline";

import Payple_Logo from "../../../../public/assets/logoAndIcons/Payple Logo.svg";
import Apple_Logo from "../../../../public/assets/logoAndIcons/Apple Logo.svg";
import Google_Logo from "../../../../public/assets/logoAndIcons/Google Logo.svg";
import { Input, useDisclosure } from "@heroui/react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { apis } from "@/utils/apis";
import { useApi } from "@/hooks/useApi";
import { showToast } from "@/utils/toastConfig";
import LoginModal from "@/auth/signin";

const Checkout = (props) => {
  const router = useRouter();
  const loginModal = useDisclosure();
  const [type, setType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("apple_Pay");
  const [additionalFeatures, setAdditionalFeatures] = useState({
    type: "",
    amount: 0,
  });
  const [openAdditionalFeatures, setOpenAdditionalFeatures] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // props?.checkoutData

  let totalAmount =
    +props?.checkoutData?.price + 500 + additionalFeatures?.amount;

  const handleChange = (typ) => {
    console.log(typ, "type_type");
    if (typ === "month") {
      setType("year");
    } else {
      setType("month");
    }
  };

  const checkAdditionalFeatures = (check) => {
    if (additionalFeatures === check) {
      setAdditionalFeatures("");
    } else {
      setAdditionalFeatures(check);
    }
  };

  const { checkout } = apis;
  const { Post } = useApi();

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      loginModal.onOpen();
      return false;
    }
    return true;
  };

  const handleCheckout = async () => {
    if (!checkAuth()) return;

    const item_price_id = props?.checkoutData?.priceId;
    const baseUrl = window.location.origin;

    try {
      setLoading(true);
      const payload = {
        item_price_id: item_price_id,
        success_url: `${baseUrl}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/pricing/cancel`,
      };

      const res = await Post(checkout, payload);

      if (res?.data?.url) {
        window.location.href = res.data.url;
        return;
      }

      showToast.success(res?.data?.message || "Checkout created!");
    } catch (err) {
      showToast.error(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (props?.checkoutData?.type !== "") {
      setType(props?.checkoutData?.type);
    }
  }, [props?.checkoutData?.type]);

  return (
    <div className="py-4 relative">
      <Image
        src={faq_Gradient}
        alt="faq_Gradient"
        className="absolute left-0 top-0"
      />
      <Image
        src={BenefitsEllipse}
        alt="BenefitsEllipse"
        className="absolute right-0 top-0"
      />
      <div className="header_con relative z-10">
        <div className="flex flex-col items-center gap-16">
          <h1 className="sm:py-16 py-8 sm:text-[80px] text-[48px] text-center sm:w-[818px] w-full leading-[100%] tracking-[-3%] uppercase space-[42px] bg-gradient-to-br from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent font_neue_montreal_regular">
            Buy plan
          </h1>

          {/* mont year switch */}
          <div className="relative">
            <div className="bg-gradient-to-tl from-[#55D0FF] to-[#6361FC] rounded-xl py-[1.5px] px-[2px] w-fit">
              <div className="flex gap-2 bg-[#000000] rounded-xl p-1">
                <div
                  // onClick={() => handleChange("yearly")}
                  className={`${
                    type === "month"
                      ? "bg-gradient-to-tl from-[#6361FC] to-[#55D0FF] text-[#080707]"
                      : "text-[#F3F6FF]"
                  } sm:px-8 px-2 py-3 rounded-lg font_neue_montreal_regular capitalize cursor-default`}
                >
                  Pay Monthly
                </div>
                <div
                  // onClick={() => handleChange("month")}
                  className={`${
                    type === "yearly"
                      ? "bg-gradient-to-tl from-[#6361FC] to-[#55D0FF] text-[#080707]"
                      : "text-[#F3F6FF]"
                  } sm:px-8 px-2 py-3 rounded-lg font_neue_montreal_regular capitalize cursor-default`}
                >
                  Pay Yearly
                </div>
              </div>
            </div>
            <div className="text-[#080707] bg-[#F3F6FF] sm:py-1 py-0.5 sm:px-2 px-1 w-fit sm:rounded-lg rounded sm:text-sm text-[12px] absolute -top-[42%] sm:right-[-28%] right-[-20%] font-bold uppercase">
              Save 15%
            </div>
          </div>

          {/* pricing card */}
          <div className="bg-[#47596820] rounded-2xl sm:w-[calc(100%_-_40%)] w-full">
            <div className="bg-[#080707] rounded-2xl sm:p-10 p-5 flex flex-col items-center gap-6">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="sm:text-[32px] text-[24px] text-[#F3F6FF] font_neue_montreal_regular capitalize">
                    Pro
                  </p>
                  <div className="w-fit sm:text-base text-sm bg-[#57C8FF] text-black px-2 py-1 rounded-md font_neue_montreal_medium">
                    POPULAR
                  </div>
                </div>
                <p className="sm:text-base text-sm text-[#899099] font_neue_montreal_regular">
                  For big feature-enhanced businesses
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-end">
                    <p className="sm:text-[32px] text-[24px] text-[#F3F6FF] font_neue_montreal_regular capitalize">
                      ${props?.checkoutData?.price}
                    </p>
                    &nbsp;&nbsp;
                    <p className="sm:text-base text-sm text-[#899099] font_neue_montreal_regular mb-1.5">
                      USD/Month
                    </p>
                  </div>
                  <div />
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">
                    Set up fee $500
                  </p>
                  <p className="sm:text-base text-sm text-[#899099] font_neue_montreal_regular">
                    Billed once monthly
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:px-10 px-5 py-5">
              <div className="flex items-center justify-between w-full">
                <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_medium flex items-center">
                  Show Key Features&nbsp;
                  <ChevronDownIcon className="h-4 w-4 text-[#F3F6FF] ml-2 font-semibold" />
                </p>
                <Link
                  href={"/pricing"}
                  className="sm:text-base text-sm text-[#57C8FF] font_neue_montreal_regular underline capitalize"
                >
                  Change Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="sm:w-[calc(100%_-_40%)] w-full flex flex-col items-center gap-8">
            <div className="flex items-center justify-start w-full">
              <div
                onClick={() =>
                  setOpenAdditionalFeatures(!openAdditionalFeatures)
                }
                className="cursor-pointer text-[24px] text-[#F3F6FF] font_neue_montreal_regular capitalize flex items-center"
              >
                Additional Features&nbsp;
                <ChevronDownIcon className="h-4 w-4 text-[#F3F6FF] ml-2 mt-1 font-semibold" />
              </div>
            </div>
            {openAdditionalFeatures ? (
              <div className="w-full flex flex-col gap-4">
                <div className="bg-[#475968] px-6 py-3 rounded-2xl w-full flex items-center justify-between">
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={() =>
                          checkAdditionalFeatures({ type: "mes", amount: 500 })
                        }
                        checked={additionalFeatures?.type === "mes"}
                        sx={{
                          color: "#F3F6FF", // unchecked border
                          "&.Mui-checked": {
                            color: "#57C8FF", // checked color
                          },
                        }}
                      />
                    }
                    label={
                      <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">
                        MES
                      </p>
                    }
                  />
                  <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">+ $500</p>
                </div>

                <div className="bg-[#475968] px-6 py-3 rounded-2xl w-full flex items-center justify-between">
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={() =>
                          checkAdditionalFeatures({
                            type: "work_order",
                            amount: 500,
                          })
                        }
                        checked={additionalFeatures?.type === "work_order"}
                        sx={{
                          color: "#F3F6FF", // unchecked border
                          "&.Mui-checked": {
                            color: "#57C8FF", // checked color
                          },
                        }}
                      />
                    }
                    label={
                      <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">
                        Work Order
                      </p>
                    }
                  />
                  <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">+ $500</p>
                </div>

                <div className="bg-[#475968] px-6 py-3 rounded-2xl w-full flex items-center justify-between">
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={() =>
                          checkAdditionalFeatures({
                            type: "inventory_management",
                            amount: 500,
                          })
                        }
                        checked={
                          additionalFeatures?.type === "inventory_management"
                        }
                        sx={{
                          color: "#F3F6FF", // unchecked border
                          "&.Mui-checked": {
                            color: "#57C8FF", // checked color
                          },
                        }}
                      />
                    }
                    label={
                      <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">
                        Inventory Management
                      </p>
                    }
                  />
                  <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">+ $500</p>
                </div>
              </div>
            ) : null}

            <hr className="border-[#5E6973] w-full border-t-[2px]" />

            {/* Payment Method */}
            <div className="flex items-center justify-start w-full">
              <div className="cursor-pointer text-[24px] text-[#F3F6FF] font_neue_montreal_regular capitalize flex items-center">
                Payment Method
              </div>
            </div>
            <div className="flex flex-wrap gap-2 w-full">
              <div
                onClick={() => setPaymentMethod("credit_card")}
                className={`${
                  paymentMethod === "credit_card"
                    ? "bg-gradient-to-tl from-[#6361FC] to-[#55D0FF] border-[#00000000]"
                    : "border-[#5E6973]"
                } cursor-pointer border-[2px] border-solid sm:w-[25%] w-[48%] rounded-xl py-6 bg-[#47596820] flex flex-col items-center justify-center gap-2.5`}
              >
                <CreditCardIcon className="h-6 w-6 text-[#F3F6FF]" />
                <p>Credit card</p>
              </div>
              <div
                onClick={() => setPaymentMethod("apple_Pay")}
                className={`${
                  paymentMethod === "apple_Pay"
                    ? "bg-gradient-to-tl from-[#6361FC] to-[#55D0FF] border-[#00000000]"
                    : "border-[#5E6973]"
                } cursor-pointer border-[2px] border-solid sm:w-[25%] w-[48%] rounded-xl py-6 bg-[#47596820] flex flex-col items-center justify-center gap-2.5`}
              >
                <Image src={Apple_Logo} alt="Apple_Logo" />
                <p>Apple Pay</p>
              </div>
              <div
                onClick={() => setPaymentMethod("google_Pay")}
                className={`${
                  paymentMethod === "google_Pay"
                    ? "bg-gradient-to-tl from-[#6361FC] to-[#55D0FF] border-[#00000000]"
                    : "border-[#5E6973]"
                } cursor-pointer border-[2px] border-solid sm:w-[25%] w-[48%] rounded-xl py-6 bg-[#47596820] flex flex-col items-center justify-center gap-2.5`}
              >
                <Image src={Google_Logo} alt="Google_Logo" />
                <p>Google Pay</p>
              </div>
              <div
                onClick={() => setPaymentMethod("paypal")}
                className={`${
                  paymentMethod === "paypal"
                    ? "bg-gradient-to-tl from-[#6361FC] to-[#55D0FF] border-[#00000000]"
                    : "border-[#5E6973]"
                } cursor-pointer border-[2px] border-solid sm:w-[25%] w-[48%] rounded-xl py-6 bg-[#47596820] flex flex-col items-center justify-center gap-2.5`}
              >
                <Image src={Payple_Logo} alt="Payple_Logo" />
                <p>Paypal</p>
              </div>
            </div>

            <hr className="border-[#5E6973] w-full border-t-[2px]" />

            <div className="flex justify-start gap-4 w-full">
              <Input
                variant="solid"
                className="!sm:w-[30%] !w-full !bg-[#47596820] !rounded-xl py-1 custom_gradient_bg"
                name="discount_code"
                placeholder="Discount code"
              />
              <div className="flex items-center justify-center w-fit text-base bg-gradient-to-tl from-[#6361FC] to-[#55D0FF] text-black px-6 py-1 rounded-md capitalize font_neue_montreal_medium cursor-pointer">
                Apply
              </div>
            </div>

            <hr className="border-[#5E6973] w-full border-t-[2px]" />

            <div className="flex items-center justify-between w-full">
              <p className="sm:text-[32px] text-[24px] text-[#F3F6FF] font_neue_montreal_regular capitalize">
                Total to Pay:
              </p>
              <div className="sm:text-[32px] text-[24px] text-[#F3F6FF] font_neue_montreal_regular">
                ${totalAmount.toFixed(2) || 0}
              </div>
            </div>

            <hr className="border-[#5E6973] w-full border-t-[2px]" />
          </div>

          <div className="sm:w-[calc(100%_-_40%)] w-full flex flex-col items-center gap-8">
            {error && (
              <div className="w-full text-center text-red-500 font_neue_montreal_regular mb-2">
                {error}
              </div>
            )}
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="flex items-center justify-center w-full text-lg bg-gradient-to-tl from-[#6361FC] to-[#55D0FF] text-black px-6 py-4 rounded-2xl capitalize font_neue_montreal_medium cursor-pointer disabled:opacity-70"
            >
              {loading ? (
                <>
                  <CircularProgress
                    size={24}
                    color="inherit"
                    className="mr-2"
                  />
                  Processing...
                </>
              ) : (
                "Pay now"
              )}
            </button>
          </div>
        </div>
      </div>
      
      <LoginModal
        isOpen={loginModal.isOpen}
        onOpenChange={loginModal.onOpenChange}
      />
    </div>
  );
};

export default Checkout;
