import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import indecate2 from "../../../public/assets/logoAndIcons/indecate2.svg";
import Image from "next/image";
import sbs1 from "../../../public/assets/images/sbs1.png";
import sbs2 from "../../../public/assets/images/sbs2.png";
import sbs3 from "../../../public/assets/images/sbs3.png";
import sbs4 from "../../../public/assets/images/sbs4.png";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/react";

const ScalableBusinessSolutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const opportunitiesArr = [
    {
      name: "Retail & E-commerce",
      description:
        "Boost sales and streamline operations with powerful e-commerce and retail solutions.",
      details: [{ text: "Jewelry & Watches stores." }],
      cs: false,
      image: `${sbs1.src}`,
    },
    {
      name: "Food services",
      description:
        "Boost sales and streamline operations with powerful e-commerce and retail solutions.",
      details: [
        { text: "Restaurants, bars & Cafés." },
        { text: "Hotels & Resorts." },
      ],
      cs: true,
      image: `${sbs2.src}`,
    },
    {
      name: "Manufacturing",
      description:
        "Boost sales and streamline operations with powerful e-commerce and retail solutions.",
      details: [
        { text: "Industrial equipment manufacturers." },
        { text: "Automotive parts & Supplies." },
      ],
      cs: true,
      image: `${sbs3.src}`,
    },
    {
      name: "Automotive & Dealerships",
      description:
        "Boost sales and streamline operations with powerful e-commerce and retail solutions.",
      details: [
        { text: "Car dealerships." },
        { text: "Auto repair & Maintenance shops." },
      ],
      cs: true,
      image: `${sbs4.src}`,
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observers = [];

    opportunitiesArr.forEach((_, index) => {
      const el = document.getElementById(`trigger-${index}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentIndex(index);
            }
          });
        },
        {
          root: null,
          rootMargin: "-50% 0px -50% 0px", // Fires when middle hits viewport
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-[url(/assets/images/graph-overlay-1.png)] w-full  bg-cover bg-center bg-no-repeat flex flex-col gap-16 py-[7.5rem]">
      <Container maxWidth="xl" className="flex items-start justify-start">
        <div className="w-[25%] relative">
          <Image src={indecate2} alt="indecate" />
          <p className="absolute top-[14%] left-[2.5%] text-lg uppercase">
            industries
          </p>
        </div>
        <div className="flex flex-row justify-between items-end w-[85%]">
          <h1 className="text-[80px] font_neue_montreal_regular uppercase tracking-[-0.03em] bg-gradient-to-r from-[#2C3947] via-[#F8F8FF] to-[#F8F8FF] bg-clip-text text-transparent font_neue_montreal_regular leading-[5rem]">
            Scalable Business Solutions
          </h1>
          <p></p>
        </div>
      </Container>

      <Container
        maxWidth="xl"
        className="flex items-start justify-start relative "
        style={{ minHeight: `${opportunitiesArr.length * 65}vh` }} // enough height for stacking
      >
        <div className="w-[25%] relative sticky top-[200px] z-20">
          <p className="w-[70%] font_neue_montreal_regular text-2xl">
            We are expanding opportunities in different industries day by day.
          </p>
        </div>

        <div className="w-[85%] relative">
          {opportunitiesArr.map((v, i) => (
            <div
              id={`trigger-${i}`}
              key={i}
              style={{
                background:
                  "linear-gradient(277.05deg, #6952FD 5.76%, #55D0FF 35.47%, rgba(8, 7, 7, 0) 82.68%)",
                position: "sticky",
                top: `${150 + i * 40}px`,
                zIndex: opportunitiesArr.length + i, // proper stacking
                //  opacity: currentIndex >= i ? 1 : 0,
                // transition: "transform .5s ease, opacity .5s ease", // slower + smoother
                // willChange: "transform, opacity", // GPU optimize
              }}
              className="rounded-2xl p-0.5 mb-8"
            >
              <div className="bg-[#261f45] w-full rounded-2xl">
                <div className="w-full bg-[#47596833] rounded-2xl flex justify-between">
                  <div className="flex flex-col items-start justify-between p-10">
                    <div className="flex flex-col items-start gap-4">
                      {v?.cs && (
                        <p className="rounded-md uppercase font_neue_montreal_regular text-lg px-2 py-1.5 text-[#F3F6FF] bg-[#47596833]">
                          coming soon
                        </p>
                      )}
                      <h2 className="font_neue_montreal_regular text-[2em] text-[#F3F6FF]">
                        {v?.name}
                      </h2>
                    </div>
                    <p className="w-[60%] font_neue_montreal_regular text-base text-[#899099]">
                      {v?.description}
                    </p>
                    <div className="flex flex-col items-start gap-2">
                      {v?.details.map((val, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckIcon className="h-5 w-5 text-[#6952FD]" />
                          <p className="font_neue_montreal_regular text-base text-[#F3F6FF]">
                            {val?.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    {!v?.cs && (
                      <Button
                        color="primary"
                        variant="faded"
                        className="w-fit !py-4 px-14 text-base border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent rounded-lg flex justify-center items-center"
                      >
                        Know More
                      </Button>
                    )}
                  </div>
                  <Image
                    src={v?.image}
                    alt="sbs1"
                    width={1920}
                    height={1080}
                    className="w-96 h-96"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ScalableBusinessSolutions;
