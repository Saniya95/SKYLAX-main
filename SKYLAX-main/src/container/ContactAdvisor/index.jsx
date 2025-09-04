import React, { useState } from "react";
import featuresImgOvrl from "../../../public/assets/images/features-img-ovrl.png";
import Image from "next/image";
import { Container } from "@mui/material";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import Link from "next/link";
import { useApi } from "@/hooks/useApi";
import { apis } from "@/utils/apis";

const ContactAdvisorForm = () => {
  const { Post } = useApi();
  
  const industry = [
    { key: "retail_e_commerce", label: "Retail & E-commerce" },
    { key: "food_services", label: "Food services" },
    { key: "manufacturing", label: "Manufacturing" },
    { key: "dealerships", label: "Dealerships" },
  ];

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const newErrors = {};

    if (!data.first_name || data.first_name.trim() === "") {
      newErrors.first_name = "First name is required";
    }
    if (!data.last_name || data.last_name.trim() === "") {
      newErrors.last_name = "Last name is required";
    }
    if (!data.email || data.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!data.phone || data.phone.trim() === "") {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{7,15}$/.test(data.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!data.company_name || data.company_name.trim() === "") {
      newErrors.company_name = "Company name is required";
    }
    if (!data.industry || data.industry.trim() === "") {
      newErrors.industry = "Industry is required";
    }
    if (!data.questions || data.questions.trim() === "") {
      newErrors.questions = "Please enter your question or problem";
    }
    if (!isAgreed) {
      newErrors.agreement = "You must agree to the processing of your data.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    
    try {
      const payload = {
        first_name: data.first_name.trim(),
        last_name: data.last_name.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        company_name: data.company_name.trim(),
        industry: data.industry,
        message: data.questions.trim()
      };

      const response = await Post(apis.contact_advisor, payload);
      
      if (response) {
        e.target.reset();
        setErrors({});
      }
    } catch (error) {
      console.error("Error submitting contact advisor form:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-full">
      <Image
        src={featuresImgOvrl}
        alt="featuresImgOvrl"
        width={1920}
        height={1080}
        className="w-full h-full absolute"
      />
      <Container maxWidth="xl" className="py-16">
        <div className="w-full flex flex-col sm:flex-row relative z-10 sm:gap-14 gap-0">
          <div className="sm:w-[20%] w-full"></div>
          <div className="sm:w-[80%] w-full">
            <h1 className="uppercase sm:text-[80px] text-[48px] font_neue_montreal_regular font-normal leading-[100%] tracking-[-3%] bg-gradient-to-br from-[#2C3947] via-[#F8F8FF] to-[#1B2228] bg-clip-text text-transparent sm:text-left text-center">
              contact advisor
            </h1>
            <p className="pt-6 sm:text-left text-center sm:text-[24px] text-[18px] text-[#F8F8FF] leading-[120%] tracking-[-2%] font-normal font_neue_montreal_regular">
              Fill out the form carefully, all fields are mandatory!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row relative z-10 gap-14">
          <div className="w-full sm:w-[20%] sm:mt-12 mt-3 sm:mb-28 mb-0 flex flex-col items-center sm:items-start justify-between">
            <div className="flex flex-col sm:items-start items-center">
              <h2 className="uppercase text-[#899099] font_neue_montreal_medium sm:text-lg text-base">
                email
              </h2>
              <Link
                href="mailto:info@scalyx.com"
                target="_blank"
                className="text-[#F3F6FF] font_neue_montreal_medium sm:text-lg text-base"
              >
                info@scalyx.com
              </Link>
            </div>
            <div className="flex flex-col sm:items-start items-center">
              <h2 className="uppercase text-[#899099] font_neue_montreal_medium sm:text-lg text-base">
                phone
              </h2>
              <Link
                href="tel:+15123275736"
                target="_blank"
                className="text-[#F3F6FF] font_neue_montreal_medium sm:text-lg text-base"
              >
                +1 512 327 5736
              </Link>
            </div>
            <div className="flex flex-col sm:items-start items-center">
              <h2 className="uppercase text-[#899099] font_neue_montreal_medium sm:text-lg text-base">
                Address
              </h2>
              <Link
                href="https://maps.app.goo.gl/d9RnAWRZEkudK2VG6"
                target="_blank"
                className="sm:block hidden text-[#F3F6FF] font_neue_montreal_medium sm:text-lg text-base"
              >
                2826 Bee Caves Rd,
                <br />
                Austin, TX 78746, USA
              </Link>
              <Link
                href="https://maps.app.goo.gl/d9RnAWRZEkudK2VG6"
                target="_blank"
                className="sm:hidden block text-center text-[#F3F6FF] font_neue_montreal_medium sm:text-lg text-base"
              >
                2826 Bee Caves Rd,Austin,TX
                <br />
                78746, USA
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-[80%]">
            <Form
              className="w-full sm:w-[70%] flex flex-col gap-6 mt-12"
              validationErrors={errors}
              onSubmit={onSubmit}
            >
              <div className="flex sm:flex-row flex-col items-center gap-4 w-full">
                <div className="w-full relative">
                  <Input
                    variant="solid"
                    className="!w-full !bg-[#47596833] !rounded-xl py-1 custom_gradient_bg"
                    name="first_name"
                    placeholder="First name*"
                  />
                </div>
                <div className="w-full relative">
                  <Input
                    variant="solid"
                    className="!w-full !bg-[#47596833] !rounded-xl py-1 custom_gradient_bg"
                    name="last_name"
                    placeholder="Last name*"
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-4 w-full">
                <div className="w-full relative">
                  <Input
                    variant="solid"
                    className="!w-full !bg-[#47596833] !rounded-xl py-1 custom_gradient_bg"
                    name="email"
                    placeholder="Email*"
                  />
                </div>
                <div className="w-full relative">
                  <Input
                    variant="solid"
                    className="!w-full !bg-[#47596833] !rounded-xl py-1 custom_gradient_bg"
                    name="phone"
                    placeholder="Phone*"
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-4 w-full">
                <div className="w-full relative">
                  <Input
                    variant="solid"
                    className="!w-full !bg-[#47596833] !rounded-xl py-1 custom_gradient_bg"
                    name="company_name"
                    placeholder="Company name*"
                  />
                </div>

                <div className="w-full relative">
                  <Select
                    name="industry"
                    className="!w-full !bg-[#47596833] !rounded-xl py-1 custom_gradient_bg !text-white"
                    variant="solid"
                    items={industry}
                    placeholder="Industry"
                    classNames={{ popoverContent: "!bg-white !p-0" }}
                  >
                    {(industrys) => (
                      <SelectItem
                        className={`${
                          industry[industry.length - 1].key === industrys.key
                            ? "!border-none"
                            : "!border-b  !border-[#5E6973]"
                        } !bg-[#00000000] !rounded-none !outline-none !text-[#080707]`}
                      >
                        {industrys.label}
                      </SelectItem>
                    )}
                  </Select>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-4 w-full relative">
                <Textarea
                  className="!w-full !bg-[#47596833] !rounded-xl py-1 custom_gradient_bg"
                  name="questions"
                  variant="solid"
                  placeholder="Write your question or problem that you have encountered"
                />
              </div>
              <Checkbox 
                size="lg" 
                isSelected={isAgreed}
                onValueChange={setIsAgreed}
                className="!rounded-[3px]"
              >
                I agree to the processing of my data.
              </Checkbox>
              {errors.agreement && (
                <p className="text-red-500 text-sm">{errors.agreement}</p>
              )}
              {errors.submit && (
                <p className="text-red-500 text-sm">{errors.submit}</p>
              )}
              <Button
                type="submit"
                color="primary"
                variant="faded"
                disabled={isLoading}
                className="sm:w-[10rem] w-full sm:mt-6 mt-3 sm:py-5 py-6 px-6 text-[18px] border-none text-[#080707] font-normal bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] flex justify-center items-center disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactAdvisorForm;
