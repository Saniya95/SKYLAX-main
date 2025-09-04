import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../../public/assets/images/avatar.png";
import indecate1 from "../../../public/assets/logoAndIcons/indecate1.svg";
import indecate2 from "../../../public/assets/logoAndIcons/indecate2.svg";
import BlackEllipse from "../../../public/assets/images/BlackEllipse.png";
import abtRgtOvrl from "../../../public/assets/images/abt-rgt-ovrl.png";
import ExploreCard from "@/components/ExploreCard";
import { Button } from "@heroui/react";
import { Container } from "@mui/material";
import SmartSol from "@/components/SmartSol";
import { motion } from "framer-motion";
import { useApi } from "@/hooks/useApi";
import { apis } from "@/utils/apis";
import Link from "next/link";
// Local logo path and a fallback render in case optimizer hiccups in dev

const Whatscalyx = ({ aboutData }) => {
  
  const [data, setData] = useState({});
  const [featuresData, setFeaturesData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentCard, setCurrentCard] = useState(0);
  const [logoFail, setLogoFail] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutData?.first?.content;
    if (aboutSection) {
      setData(aboutSection);
    }

    const featureSection = aboutData?.second?.content?.sectionOne;
    if (featureSection) {
      setFeaturesData(featureSection);
    }
  }, [aboutData]);

  // Build a complete list of features (append defaults if CMS returns fewer)
  const defaultFeatures = [
    {
      image_link: "/assets/logoAndIcons/icon1.svg",
  title: "Smart inventory management",
      description:
        "Effortlessly manage products, variants, and stock across all sales channels. Get real-time updates and track inventory seamlessly with customized RFIDs.",
    },
    {
      image_link: "/assets/logoAndIcons/icon2.svg",
  title: "Powerful webpage tools",
      description:
        "Build an AI-driven store with Scalyx—seamless E‑Commerce, smart management, and full integration for online and in‑store growth.",
    },
    {
      image_link: "/assets/logoAndIcons/icon3.svg",
      title: "Customer relationship management",
      description:
        "Maximize sales with Scalyx CRM—track pipelines, insights, customer behaviour, and manage outreach with automation.",
    },
    {
      image_link: "/assets/logoAndIcons/icon4.svg",
      title: "Comprehensive reporting & Analytics",
      description:
        "Get real-time insights into sales, inventory, and store performance with detailed reports and dashboards.",
    },
    {
      image_link: "/assets/logoAndIcons/icon5.svg",
      title: "Accounting & Financial tracking",
      description:
        "Keep your finances in check with Scalyx. From revenue and margin to expenses and P&L, manage key financial metrics.",
    },
    {
      image_link: "/assets/logoAndIcons/icon6.svg",
      title: "Efficient staff & Workflow management",
      description:
        "Our AI-driven system streamlines operations, tracks performance, and optimizes workforce management.",
    },
    {
      image_link: "/assets/logoAndIcons/icon7.svg",
      title: "Price & Markdown management",
      description:
        "Automatically adjust prices, apply discounts, and create promotions with dynamic rules and actionable insights.",
    },
    {
      image_link: "/assets/logoAndIcons/icon8.svg",
      title: "Webpage shop integration",
      description:
        "Sync inventory, update prices, and manage orders seamlessly with e‑commerce integrations.",
    },
  ];

  const displayedFeatures = React.useMemo(() => {
    const list = featuresData?.featureList || [];
    if (list.length >= 8) return list;
    return [...list, ...defaultFeatures.slice(list.length)];
  }, [featuresData]);

  const handleWheel = (e) => {
    e.preventDefault();
    if (!containerRef.current) return;

    containerRef.current.scrollBy({
      left: e.deltaY,
      behavior: "smooth",
    });

    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = 360 + 24;
  const index = Math.round(scrollLeft / cardWidth) + 1;
  setCurrentIndex(Math.min(index, displayedFeatures.length || 0));
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.firstChild?.offsetWidth || 1;
  const index = Math.round(scrollLeft / (cardWidth + 16));
  setCurrentCard(Math.min(Math.max(index, 0), (displayedFeatures.length || 1) - 1));
    }
  };

  // Resolve CMS image URLs (supports strings, objects, and Strapi-like shapes)
  const assetBase = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/?api\/?$/, "");
  const pickUrl = (input) => {
    if (!input) return "";
    if (typeof input === "string") return input;
    if (typeof input === "object") {
      if (input.url) return input.url;
      if (input.formats?.thumbnail?.url) return input.formats.thumbnail.url;
      if (input.data) {
        if (Array.isArray(input.data)) {
          const first = input.data[0];
          if (first?.attributes?.url) return first.attributes.url;
          if (first?.url) return first.url;
        } else {
          if (input.data.attributes?.url) return input.data.attributes.url;
          if (input.data.url) return input.data.url;
        }
      }
    }
    return "";
  };
  const resolveImg = (src) => {
    const raw = pickUrl(src) || (typeof src === "string" ? src : "");
    if (!raw) return "";
    if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
    if (raw.startsWith("/")) return `${assetBase}${raw}`;
    return raw;
  };

  // Small helper component to render an icon with a safe fallback
  function CardIcon({ src, fallback = "/assets/logoAndIcons/icon1.svg", alt = "" }) {
    const [failed, setFailed] = useState(false);
    const finalSrc = failed ? fallback : (resolveImg(src) || fallback);
    return (
      <Image
        src={finalSrc}
        alt={alt}
        width={80}
        height={80}
        unoptimized
        className="opacity-90 object-contain"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <>
      {/* About Section */}
      <div className="bg-[#080707] relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <Image src={abtRgtOvrl} alt="abtRgtOvrl" className="abt-rgt-ovrl z-10" />
        <div className="!py-40 flex items-start justify-start header_con">
          <div className="w-[25%] flex relative">
            <div className="feat-sec-cl">
              <div className="sub-title">
                <span className="font_neue_montreal_medium">About</span>
              </div>
            </div>
          </div>
          {/* Make right column fill remaining width so sides align */}
          <div className="flex flex-col gap-8 lg:gap-10 items-start w-[75%]">
            <h1 className="text-[64px] md:text-[76px] lg:text-[92px] xl:text-[110px] uppercase leading-[1.1] tracking-[-0.03em] bg-[linear-gradient(300.27deg,_#D0D4DA_2.03%,_#F8F8FF_38.42%,_#F8F8FF_70.38%,_#1B2228_102.26%)] bg-clip-text text-transparent font_neue_montreal_regular">
              {data?.title}
            </h1>
            <p className="w-[95%] max-w-[980px] text-[22px] md:text-[26px] lg:text-[30px] text-[#899099] font_neue_montreal_regular tracking-[-0.03em] leading-[120%]">
              {data?.description}
            </p>
            {/* Reference-style platform badge (rounded tile + title + subtitle) */}
            <div className="flex items-center gap-4 mt-2 relative z-20">
              <div className="h-16 md:h-[68px] px-[11px] md:px-[11px] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.25)] bg-[linear-gradient(180deg,#F2F5FF_0%,#D0D6E0_100%)] border border-white/60 flex items-center justify-center overflow-hidden relative">
                {/* subtle inner highlight */}
                <div aria-hidden className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_40%)]" />
                {/* brand mark icon + wordmark inside the tile */}
                <div className="relative z-10 flex items-center">
                  <Image
                    src="/assets/logoAndIcons/skylaxLogo.png"
                    alt="scalyx icon"
                    width={72}
                    height={72}
                    unoptimized
                    priority
                    className="object-contain h-[60px] w-auto md:h-[64px]"
                    onError={() => setLogoFail(true)}
                  />
                  {/* icon-only per request; using existing PNG asset */}
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-[#F3F6FF] text-xl md:text-[22px] font_neue_montreal_regular">Scalyx platform</p>
                <p className="text-[#9CA8B3] text-sm md:text-base font_neue_montreal_regular">Smarter retail</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="!pt-60 !pb-16 flex items-start justify-start header_con">
          <div className="w-[25%] flex relative">
            <div className="feat-sec-cl">
              <div className="sub-title">
                <span className="font_neue_montreal_medium">features</span>
              </div>
            </div>
          </div>
          {/* Right rail should occupy remaining 75% (25% + 75% = 100%) */}
          <div className="flex flex-row justify-between items-end w-[75%]">
            <h1 className="text-[80px] uppercase tracking-[-2%] bg-[linear-gradient(287.31deg,_#080707_5.68%,_#F8F8FF_60.47%,_#F8F8FF_73.34%,_#090808_124.58%)] bg-clip-text text-transparent font_neue_montreal_regular leading-[120%]">
              {featuresData?.title}
            </h1>
            <p className="text-[24px] w-[40%] text-[#F3F6FF] font-normal font_neue_montreal_regular tracking-[3%] leading-[120%]">
              {featuresData?.subtitle || "Features that make your business processes more efficient."}
            </p>
          </div>
        </div>

  {/* Features List Slider */}
  <div className="relative w-full">
          {/* Slider content; background gradient now provided by parent wrapper */}
          <div className="!px-0 header_con relative z-10">
            <div className="pb-20 w-full flex gap-5 flex-row items-end justify-between overflow-hidden relative h-[44rem]">
              {/* Left rail: counter + CTA */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="p-5 font_neue_montreal_regular text-[18px] md:text-[20px] lg:text-[24px] text-[#F3F6FF]">
                  {`${String(currentIndex).padStart(2, "0")}/`}
                  <span className="text-[#F3F6FF]/50">
                    {(displayedFeatures.length || 0).toString().padStart(2, "0")}
                  </span>
                </div>
                {featuresData?.ctaButton?.text && (
                  <Link href={featuresData.ctaButton.link || "#"}>
                    <Button
                      color="primary"
                      variant="faded"
                      className="mt-14 w-44 md:w-56 h-12 md:h-16 !text-[16px] md:!text-[18px] text-[#080707] font_neue_montreal_medium bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[16px] flex justify-center items-center !border-none"
                    >
                      {featuresData.ctaButton.text}
                    </Button>
                  </Link>
                )}
              </div>

              {/* Scrollable Cards */}
              <div
                ref={containerRef}
                onWheel={handleWheel}
                onScroll={handleScroll}
                className="z-10 h-full overflow-x-auto hide-scrollbar flex gap-8 w-full relative px-0 scroll-smooth snap-x snap-mandatory"
              >
                {displayedFeatures.map((item, i) => {
                  const isNear = Math.abs(i - currentCard) <= 1; // near viewport
                  const isVisible = i <= currentCard + 1; // hide until reached or next
                  const rawImg = item?.image_link || item?.imageUrl || item?.image;
                  const imgSrc = resolveImg(rawImg) || `/assets/logoAndIcons/icon${((i % 8) + 1)}.svg`;
                  const overriddenTitle = i === 0
                    ? "Smart inventory management"
                    : i === 1
                    ? "Powerful webpage tools"
                    : item.title;
                  const overriddenDesc = i === 0
                    ? "Effortlessly manage products, variants, and stock across all sales channels. Get real-time updates and track inventory seamlessly with customized RFIDs."
                    : i === 1
                    ? "Build an AI-driven store with Scalyx—seamless E‑Commerce, smart management, and full integration for online and in‑store growth."
                    : (item.description || "");
                  return (
                    <motion.div
                      key={i}
                      className={`flex-shrink-0 snap-start w-[82%] sm:w-[380px] md:w-[480px] lg:w-[560px] transition-all duration-500 ${
                        isVisible ? (isNear ? "opacity-100 translate-y-0" : "opacity-60 translate-y-1") : "opacity-0 translate-y-3"
                      }`}
                      animate={{ scale: isNear ? 1 : 0.98 }}
                      transition={{ type: "spring", stiffness: 60, damping: 18 }}
                    >
                      {/* Gradient border card */}
                      <div className="p-[1.5px] rounded-2xl bg-[linear-gradient(180deg,rgba(85,208,255,0.35),rgba(99,97,252,0.28))]">
                        <div className="rounded-2xl bg-[linear-gradient(180deg,rgba(20,22,26,0.8),rgba(20,22,26,0.45))] h-[32rem] flex flex-col items-center justify-start py-12 px-10">
                          <div className="text-[#B5C7D1] text-xs md:text-sm tracking-[0.2em] mb-8">{String(i + 1).padStart(2, "0")}</div>
                          <CardIcon src={imgSrc} fallback={`/assets/logoAndIcons/icon${((i % 8) + 1)}.svg`} alt={item.title} />
                          <h3 className="text-[#EAF2FF] text-[22px] md:text-[24px] lg:text-[26px] leading-tight text-center mt-8 font_neue_montreal_medium">
                            {overriddenTitle}
                          </h3>
                          <p className="text-[#9BB0BE] text-[13px] md:text-sm lg:text-base text-center mt-6 max-w-[34rem]">
                            {overriddenDesc}
                          </p>
                          <div className="mt-auto" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Background handled by shared wrapper; no extra bridging needed here */}
        </div>
      </div>
    </>
  );
};


export default Whatscalyx;
