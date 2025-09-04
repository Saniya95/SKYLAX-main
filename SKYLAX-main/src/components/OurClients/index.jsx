import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import client from "../../../public/assets/images/client.png";
import oracle from "../../../public/assets/images/oracle.svg";
import GA from "../../../public/assets/images/GA.svg";
import Image from "next/image";
import CtaGirl from "../../../public/assets/images/CtaGirl.png";
import { Button } from "@heroui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { apis } from "@/utils/apis";
import { useApi } from "@/hooks/useApi";
const OurClients = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
    infinite: true, // fixed spelling from "Infinity"
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [countSmartAI, setCountSmartAI] = useState(1);
  const [dreviews, setdreviews] = useState([]);

  const { Get } = useApi();
  const { testimonials } = apis;

  useEffect(() => {
    GetTestimonials();
  }, []);

  const GetTestimonials = async () => {
    try {
      let data = await Get(testimonials);
      if (data?.data) {
        console.log(data.data, "__reviews_data__");
        setdreviews(data.data);
      }
    } catch (error) {
      console.log(error, "_error_");
    }
  };

  const srollImage = [
    { image: `${oracle.src}`, name: "oracle" },
    { image: `${GA.src}`, name: "GA" },
    { image: `${oracle.src}`, name: "oracle" },
    { image: `${GA.src}`, name: "GA" },
  ];

  // Local avatar with fallback to a woman's image (matches the reference)
  function AvatarImg({ src, alt }) {
    const [failed, setFailed] = useState(false);
    const finalSrc = (!src || failed) ? CtaGirl.src : src;
    return (
      <div className="w-16 h-16 rounded-xl bg-white/10 overflow-hidden flex items-center justify-center">
        <Image
          src={finalSrc}
          alt={alt}
          width={64}
          height={64}
          className="w-16 h-16 object-cover rounded-xl"
          unoptimized
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="relative z-10 sm:-mt-12">
      <div className="py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full rounded-[24px] overflow-hidden border border-white/10 bg-[linear-gradient(103.07deg,#1B2228_0%,#242E36_100%)]"
        >
          {/* top-left counter like reference */}
          {dreviews.length > 0 && (
            <div className="absolute top-6 left-6 text-[12px] sm:text-sm tracking-[0.2em] text-[#B5C7D1] z-10">
              0{String(countSmartAI).padStart(2, "0")}/0{String(dreviews.length).padStart(2, "0")}
            </div>
          )}

          {dreviews.length > 0 && (
            <div className="header_con px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24 pb-8 grid sm:grid-cols-[1fr_2.5fr] gap-8 items-start">
              {/* left controls at bottom-left on desktop */}
              <div className="hidden sm:flex flex-col justify-end h-full">
                <div className="mt-auto flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="!min-w-12 !h-12 rounded-xl border border-white/20 bg-transparent text-[#F3F6FF]"
                    disabled={countSmartAI === 1}
                    onClick={() => setCountSmartAI((prev) => Math.max(1, prev - 1))}
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="!min-w-12 !h-12 rounded-xl border border-white/20 bg-transparent text-[#F3F6FF]"
                    disabled={countSmartAI === dreviews.length}
                    onClick={() => setCountSmartAI((prev) => Math.min(dreviews.length, prev + 1))}
                  >
                    <ArrowLeftIcon className="h-5 w-5 rotate-180" />
                  </Button>
                </div>
              </div>

              {/* main content */}
              <div className="flex flex-col gap-10 items-start">
                <h1 className="cmn_heading uppercase leading-[0.95] text-[44px] sm:text-[72px] lg:text-[86px] layer-title-gradient">
                  OUR CLIENTS
                  <br />
                  REVIEWS
                </h1>
                <AnimatePresence mode="wait">
                  {dreviews.map((v, i) =>
                    i + 1 === countSmartAI ? (
                      <motion.div
                        key={v._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col gap-10 max-w-[900px]"
                      >
                        <p className="text-[22px] sm:text-[28px] lg:text-[30px] text-[#F3F6FF]">
                          “{v.message}”
                        </p>
                        <div className="flex items-center gap-4">
                          <AvatarImg src={v.photo} alt={v.name} />
                          <div className="leading-tight">
                            <p className="text-[#F3F6FF]">{v.name}</p>
                            <p className="text-[#899099]">{v.designation}</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : null
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {dreviews.length > 0 && (
            <>
              <div className="header_con px-6 sm:px-12 lg:px-16">
                <hr className="w-full border-t border-white/10" />
              </div>
              <div className="sm:py-14 py-10">
                <div className="header_con px-2 sm:px-6 lg:px-12">
                  <Slider {...settings}>
                    {srollImage.map((v, i) => (
                      <div key={i} className="px-4 flex items-center justify-center opacity-80">
                        <Image src={v.image} alt={v.name} width={192} height={108} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};


export default OurClients;
