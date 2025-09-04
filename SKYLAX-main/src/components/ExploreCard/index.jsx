import Image from "next/image";
import React from "react";

const ExploreCard = ({ v, i, cardclassName }) => {
  return (
    <div className="relative boxFeatures h-auto min-h-[20rem] flex">
      <div
        className={`bg-[#47596816] rounded-2xl px-6 sm:px-10 py-10 sm:py-16 flex flex-col gap-8 sm:gap-16 items-center w-full h-full ${cardclassName}`}
      >
        <p className="text-lg sm:text-xl font-medium">0{i + 1}</p>

        <Image
          src={v?.image || `/assets/logoAndIcons/icon1.svg`}
          alt="icon1"
          width={64}
          height={64}
          className="w-12 h-12 sm:w-16 sm:h-16"
        />

        <div className="flex flex-col items-center gap-4 sm:gap-8 w-full max-w-[90%] sm:max-w-[380px]">
          <h2 className="text-center text-[22px] sm:text-[30px] text-[#F3F6FF] leading-snug sm:leading-[2.5rem] font_neue_montreal_regular">
            {v?.name}
          </h2>
          <p className="text-center text-[#899099] text-sm sm:text-base w-full sm:w-auto">
            {v?.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
