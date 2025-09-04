import { useEffect, useRef } from "react";
import gsap from "gsap";
// Note: ScrollTrigger is dynamically registered below to be SSR-safe
import srt from "../../../../public/assets/images/srt.png";
import spt from "../../../../public/assets/images/spt.png";
import andyCopper from "../../../../public/assets/images/andyCopper.png";
import Image from "next/image";
import { Button } from "@heroui/react";

// Register plugin outside component to avoid multiple registrations
if (typeof window !== "undefined") {
  (async () => {
    try {
      const mod = await import("gsap/dist/ScrollTrigger");
      const ScrollTrigger = mod.ScrollTrigger || mod.default;
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }
    } catch {}
  })();
}

export default function BenefitsHorizontalScroll(props) {
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);
  const lineFillRef = useRef(null);
  const dotRefs = useRef([]);

  const sections = props?.sections;

  useEffect(() => {
    if (!sliderRef.current || !wrapperRef.current) return;
    const slider = sliderRef.current;
    const slides = slider.querySelectorAll(".section");
    const steps = dotRefs.current;
    const totalSlides = sections.length;
    const scrollLength = window.innerHeight * (totalSlides - 1);

    let ctx = gsap.context(() => {
      gsap.to(slider, {
        y: () => `-${scrollLength}px`,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (totalSlides - 1));
            const percent = (self.progress * 100).toFixed(1);
            if (lineFillRef.current) {
              lineFillRef.current.style.height = `${percent}%`;
            }
            steps.forEach((dot, i) => {
              if (dot) dot.classList.toggle("active", i <= index);
            });
          },
        },
      });
    }, wrapperRef);

    // Touch swipe support
    let startY = 0;
    let isTouching = false;
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      isTouching = true;
    };
    const handleTouchMove = (e) => {
      if (!isTouching) return;
      const deltaY = e.touches[0].clientY - startY;
      window.scrollBy({ top: -deltaY, behavior: "instant" });
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = () => {
      isTouching = false;
    };
    wrapperRef.current.addEventListener("touchstart", handleTouchStart);
    wrapperRef.current.addEventListener("touchmove", handleTouchMove);
    wrapperRef.current.addEventListener("touchend", handleTouchEnd);

    // Mouse swipe support
    let mouseDown = false;
    let mouseStartY = 0;
    const handleMouseDown = (e) => {
      mouseDown = true;
      mouseStartY = e.clientY;
    };
    const handleMouseMove = (e) => {
      if (!mouseDown) return;
      const deltaY = e.clientY - mouseStartY;
      window.scrollBy({ top: -deltaY, behavior: "instant" });
      mouseStartY = e.clientY;
    };
    const handleMouseUp = () => {
      mouseDown = false;
    };
    const handleMouseLeave = () => {
      mouseDown = false;
    };
    wrapperRef.current.addEventListener("mousedown", handleMouseDown);
    wrapperRef.current.addEventListener("mousemove", handleMouseMove);
    wrapperRef.current.addEventListener("mouseup", handleMouseUp);
    wrapperRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ctx.revert();
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener("touchstart", handleTouchStart);
        wrapperRef.current.removeEventListener("touchmove", handleTouchMove);
        wrapperRef.current.removeEventListener("touchend", handleTouchEnd);
        wrapperRef.current.removeEventListener("mousedown", handleMouseDown);
        wrapperRef.current.removeEventListener("mousemove", handleMouseMove);
        wrapperRef.current.removeEventListener("mouseup", handleMouseUp);
        wrapperRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [sections.length]);


  

  return (
    <div
      className={`${
        props?.nobg
          ? "bg-[linear-gradient(103.07deg,_#1B2228_6.68%,_#354857_115.31%)]"
          : ""
      }`}
    >
      {props?.heading}
      <section className="slider-wrapper" ref={wrapperRef}>
        {/* Vertical Progress */}
        <div className="vertical-progress">
          <ul>
            {sections.map((section, i) => (
              <li key={i}>
                <span className="label">{`0${i + 1}`}</span>
                <span
                  className="dot"
                  ref={(el) => (dotRefs.current[i] = el)}
                ></span>
              </li>
            ))}
          </ul>
          <div className="line-track">
            <div className="line-fill" ref={lineFillRef}></div>
          </div>
        </div>
        {/* Vertical Scroll Section */}

        <div className="all-slider" ref={sliderRef}>
          {sections.map((v, i) => (
            <div
              key={i}
              className="section !justify-end !relative"
              style={{
                backgroundImage: props?.nobg ? `` : `url(${v.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full md:w-[70%] flex justify-center md:justify-end px-4 md:px-10 mx-auto md:mx-10">
                <div className="w-full h-full flex flex-col mb-2 md:flex-row items-center justify-between gap-6 md:gap-0">
           
                  <div className="order-1 md:order-2">
                    <Image
                      src={v?.image}
                      alt={v?.name}
                      width={1920}
                      height={1080}
                      className="w-full max-w-[520px] h-auto md:w-[520px] md:h-[339px]"
                    />
                  </div>

             
                  <div
                    className={`w-full md:w-[30%] flex flex-col items-start order-2 md:order-1 ${props?.contentClass}`}
                  >
                    <h2 className="text-start text-[24px] md:text-[32px] text-[#F3F6FF] leading-[2rem] md:leading-[2.5rem] font_neue_montreal_regular">
                      {v?.name}
                    </h2>
                    <p className="text-start text-[#899099] text-sm md:text-base font_neue_montreal_regular">
                      {v?.message}
                    </p>
                    {v?.knowMore ? (
                      <Button
                        color="primary"
                        variant="faded"
                        className="w-fit !py-3 md:!py-4 px-8 md:px-14 text-sm md:text-base border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent rounded-lg flex justify-center items-center mt-4"
                      >
                        Know More
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :global(body) {
          font-family: sans-serif;
          background: #111;
          color: #fff;
          overflow-x: hidden;
        }
        .slider-wrapper {
          position: relative;
        }
        .vertical-progress {
          position: absolute;
          top: 15%;
          left: 20px;
          height: 70%;
          display: flex;
          align-items: flex-start;
          gap: 30px;
          z-index: 10;
        }
        @media screen and (min-width: 640px) {
          .vertical-progress {
            left: 50px;
            gap: 50px;
          }
        }
        .vertical-progress ul {
          list-style: none;
          padding: 0;
          margin: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .vertical-progress li {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .vertical-progress .label {
          font-size: 14px;
          color: #999;
          font-weight: 500;
        }
        .vertical-progress .dot {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          background-color: #555;
          transition: background-color 0.3s;
        }
        .vertical-progress .dot.active {
          background-color: #fff;
        }
        .line-track {
          position: relative;
          width: 2px;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
        }
        .line-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background: #fff;
          transition: height 0.3s ease;
        }
        .all-slider {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        .section {
          width: 100vw;
          height: 100vh;
          flex: 0 0 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        @media screen and (max-width: 768px) {
          .vertical-progress {
            left: 10px;
            gap: 20px;
          }
          .vertical-progress .label {
            font-size: 12px;
          }
          .vertical-progress .dot {
            width: 8px;
            height: 8px;
          }
        }
        @media screen and (max-width: 640px) {
          .vertical-progress {
            display: none !important;
          }
          .section {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
