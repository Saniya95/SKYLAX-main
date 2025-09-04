import Image from "next/image";
import React from "react";
import AiAvatar from "../../../public/assets/images/AiAvatar.png";

const SupportSection = () => {
  return (
    <div>
      <div className="flex items-start gap-2">
        <Image
          src={AiAvatar}
          alt="Ai_Avatar"
          width={192}
          height={108}
          className="w-12 h-12 border-[2px] border-solid border-[#4759681A] rounded-xl"
        />
        <div className="border-[2px] border-solid border-[#4759681A] rounded-xl p-4">
          <p className="text-[#080707] font_neue_montreal_regular text-base">
            Hi! My name is Zack, your manager for today, how can I help you?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
