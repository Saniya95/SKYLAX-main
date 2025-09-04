import { Box } from "@mui/material";
import React, { useState } from "react";
import ManImage from "../../../../public/assets/images/man.png";
import ManElipse from "../../../../public/assets/images/manElipse.png";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import CommonModal from "../../../common/CommonModal";
// import ScalyxVideo from "../../../../public/assets/video/scalyx.mp4";

const VideoSec = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="bg-[#080707] relative overflow-hidden p-0">
      <div className="relative w-full h-auto">
        <Image src={ManImage} alt="manImage" className="w-full" />
        {/* White 40x40 box with centered play icon */}
        <div
          className="absolute top-1/2 left-1/2 w-[64px] h-[64px] bg-white rounded-[12px] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <PlayIcon className="w-5 h-5 text-black" />
        </div>
        {/* Video Modal */}
        <CommonModal
          open={isPlaying}
          onClose={() => setIsPlaying(false)}
          title={null}
          className="!bg-black/80 !backdrop-blur-sm flex items-center justify-center"
          size="4xl"
          isDismissable={true}
          backdrop="blur"
        >
          <div className="relative flex items-center justify-center p-0 sm:p-4 w-full">
            <video
              src="/assets/video/scalyx.mp4"
              className="w-full h-auto rounded-b-[12px] bg-black"
              controls={false}
              autoPlay
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </CommonModal>
      </div>
      <div className="absolute top-0 right-0 w-full z-0">
        <Image
          src={ManElipse}
          alt="ManElipse"
          className="w-full pointer-events-none"
        />
      </div>
    </div>
  );
};

export default VideoSec;
