import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import skylaxLogo from "../../../../public/assets/logoAndIcons/skylaxLogo.svg";
import { Accordion, AccordionItem, Button, Divider } from "@heroui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import faqGradients from "../../../../public/assets/images/faq-Gradient.png";
import faqMobileGradients from "../../../../public/assets/images/faqMobile.png";
import { useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { useApi } from "@/hooks/useApi";
import { apis } from "@/utils/apis";
import { useRouter } from "next/router";

const Faq = () => {
  const faqData = useSelector((state) => state.faqsStore.faqs);
  const [dfaqData, setdfaqData] = useState([]);
  const { Get } = useApi();
  const { faqs } = apis;

  useEffect(() => {
    GetFaq();
  }, []);

  const GetFaq = async () => {
    try {
      let data = await Get(faqs);
      if (data?.data) {
        console.log(data.data, "__faq_data__");
        setdfaqData(data.data);
      }
    } catch (error) {
      console.log(error, "_error_");
    }
  };

  const router = useRouter();
  const editable = (router?.query?.editFaq === "1" || router?.query?.editFaq === "true") ?? false;

  // Fallback local FAQs, used if API/Redux returns nothing
  const defaultFaqs = [
    {
      question: "What is Scalyx and how does it help my business?",
      answer:
        "Scalyx is an AI‑driven retail platform that unifies inventory, POS, CRM, and analytics so you can automate operations and grow faster.",
    },
    {
      question: "Can I integrate Scalyx with my existing e‑commerce store?",
      answer:
        "Yes. Scalyx supports seamless integrations with leading storefronts and ERPs, syncing products, stock, pricing, and orders in real time.",
    },
    {
      question: "Does Scalyx support multi‑store or omni‑channel setups?",
      answer:
        "Absolutely. Manage multiple locations and channels with unified stock, transfers, and consolidated analytics across your entire network.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most teams are live in days, not months. Our onboarding helps migrate data, connect channels, and configure automations quickly.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We use industry‑standard encryption, role‑based access, and audit logs. Your data remains private and protected.",
    },
  ];

  const faqsList = useMemo(() => {
    if (Array.isArray(faqData) && faqData.length) return faqData;
    if (Array.isArray(dfaqData) && dfaqData.length) return dfaqData;
    return defaultFaqs;
  }, [faqData, dfaqData]);

  const [editableFaqs, setEditableFaqs] = useState([]);

  useEffect(() => {
    setEditableFaqs(faqsList.map((f) => ({ ...f })));
  }, [faqsList]);

  const FaqItem = ({ faq, idx, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [localQ, setLocalQ] = useState(faq.question || "");
    const [localA, setLocalA] = useState(faq.answer || "");

    return (
      <div
        key={faq._id}
        className={`w-[343px] md:w-[880px] mb-3 rounded-2xl p-[1.5px] cursor-pointer relative transition-shadow ${isOpen ? "shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : "shadow-[0_6px_18px_rgba(0,0,0,0.28)]"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Active gradient border */}
        <div className={`rounded-2xl ${isOpen ? "bg-[linear-gradient(180deg,rgba(85,208,255,0.55),rgba(99,97,252,0.45))]" : "bg-[#2A334033]"}`}>
          <div className="rounded-2xl bg-[linear-gradient(180deg,rgba(20,22,26,0.82),rgba(20,22,26,0.55))] p-6 relative overflow-hidden">
            {/* glossy top highlight */}
            <div aria-hidden className="absolute inset-0 [background:linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_45%)] rounded-2xl pointer-events-none" />
        <div className="flex flex-col items-start gap-8">
          <div className="w-full flex items-center justify-between">
            {isEditing && editable ? (
              <input
                className="w-full mr-4 bg-transparent outline-none border-b border-white/10 text-[18px] md:text-[22px] text-[#F3F6FF]"
                value={localQ}
                onChange={(e) => setLocalQ(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span className="text-[18px] md:text-[24px] text-[#F3F6FF]">
                {faq.question}
              </span>
            )}
            <span
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                }`}
            >
              {isOpen ? (
                <MinusIcon className="h-6 w-6 text-[#F3F6FF]" />
              ) : (
                <PlusIcon className="h-6 w-6 text-[#F3F6FF]" />
              )}
            </span>
          </div>
          {isOpen && (
      <div
              style={{
        maxHeight: isOpen ? 800 : 0,
                opacity: isOpen ? 1 : 0,
                overflow: "hidden",
                transition:
                  "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
              }}
            >
              {isEditing && editable ? (
                <textarea
                  className="w-full bg-transparent outline-none border border-white/10 rounded-lg p-3 text-[14px] md:text-[16px] text-[#B5C7D1] min-h-[96px]"
                  value={localA}
                  onChange={(e) => setLocalA(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <h5 className="text-[16px] font-medium tracking-[-1%] text-[#899099]">
                  {faq.answer}
                </h5>
              )}
              {editable && (
                <div className="mt-4 flex gap-3" onClick={(e) => e.stopPropagation()}>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-3 py-2 rounded-md bg-white/10 text-[#F3F6FF] text-sm"
                    >
                      Edit
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          onChange?.(idx, { ...faq, question: localQ, answer: localA });
                        }}
                        className="px-3 py-2 rounded-md bg-[#55D0FF] text-[#080707] text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setLocalQ(faq.question || "");
                          setLocalA(faq.answer || "");
                        }}
                        className="px-3 py-2 rounded-md bg-white/10 text-[#F3F6FF] text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Box sx={{ padding: "80px 0 120px", bgcolor: "#000", position: "relative", overflow: "hidden" }}>
      {/* Background image from 2nd reference (desktop + mobile) */}
      <div aria-hidden className="absolute inset-0 -z-30">
        <Image
          src={faqGradients}
          alt=""
          fill
          priority={false}
          className="hidden md:block object-cover"
          sizes="100vw"
        />
        <Image
          src={faqMobileGradients}
          alt=""
          fill
          priority={false}
          className="md:hidden object-cover"
          sizes="100vw"
        />
      </div>
      {/* Shared section gradient overlay like first section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,22,27,0)_0%,rgba(18,22,27,0.12)_28%,rgba(18,22,27,0.28)_68%,rgba(18,22,27,0.62)_100%)]"
      />
      {/* Center gradient wash matching reference (teal to subtle purple) */}
      <div aria-hidden className="absolute -z-15 inset-0 flex justify-center">
        <div className="w-[1200px] max-w-[92vw] h-[70%] mt-24 rounded-[48px] bg-[radial-gradient(120%_80%_at_10%_30%,rgba(55,200,255,0.20)_0%,rgba(55,200,255,0.08)_35%,rgba(8,7,7,0)_65%),radial-gradient(95%_70%_at_90%_10%,rgba(99,97,252,0.18)_0%,rgba(99,97,252,0.07)_40%,rgba(8,7,7,0)_70%)]" />
      </div>
  {/* Blue/Purple radial spotlights (sit beneath overlay, above bg image) */}
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-24 left-[12%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(85,208,255,0.22),rgba(85,208,255,0.08),rgba(8,7,7,0))]" />
        <div className="absolute top-10 left-1/3 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(99,97,252,0.16),rgba(99,97,252,0.06),rgba(8,7,7,0))]" />
      </div>
      <Container maxWidth="xl" className="pb-8">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-[48px] md:text-[80px] text-center layer-title-gradient">
            FAQS
          </h1>
          <p className="pt-6 text-center max-w-[430px] text-[18px] md:text-[24px] text-[#F3F6FF80]">
            Some of the most common things people ask us about our services.
          </p>
        </div>

        {/* Render FAQ items */}
  <div className="flex justify-center flex-col items-center pt-16 gap-y-3">
          {(editable ? editableFaqs : faqsList).map((faq, idx) => (
            <FaqItem
              faq={faq}
              idx={idx}
              key={faq._id || idx}
              onChange={(index, updated) => {
                if (!editable) return;
                setEditableFaqs((prev) => {
                  const next = [...prev];
                  next[index] = updated;
                  return next;
                });
              }}
            />
          ))}
        </div>
      </Container>
    </Box>
  );
};


export default Faq;
