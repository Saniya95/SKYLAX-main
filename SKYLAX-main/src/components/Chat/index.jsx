import { Input } from "@heroui/react";
import React, { useState } from "react";
import chatSend from "../../../public/assets/logoAndIcons/chat_send.svg";
import headPhones from "../../../public/assets/logoAndIcons/headPhones.svg";
import headPhonesBlack from "../../../public/assets/logoAndIcons/headPhonesBlack.svg";
import chatLogo from "../../../public/assets/images/chat_logo.svg";
import Image from "next/image";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import ChatSection from "./Chat";
import SupportSection from "./Support";

const Chat = (props) => {
  const [chatMode, setChatMode] = useState("chat");
  const [selectSupport, setSelectSupport] = useState(false);

  return (
    <div className="fixed bottom-[calc(100vh_-_90vh)] right-[2%] rounded-2xl h-[30rem] w-[24rem] z-50">
      <div className="w-full h-[calc(100%_-_9.813rem)] rounded-t-2xl relative overflow-y-auto bg-[url(/assets/images/chat_bg.png)] bg-cover bg-no-repeat">
        {/* <Image src={chatBg} alt="chatBg" className="w-full h-[90%] rounded-t-2xl absolute" /> */}
        <div className="pt-12 pb-5 w-full flex flex-col items-center gap-6">
          <Image
            src={chatLogo}
            alt="chatLogo"
            width={192}
            height={108}
            className="w-[3.25rem] h-[3.25rem]"
          />
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#080707] font_neue_montreal_regular text-base">
              Hi there!
            </p>
            <h2 className="text-[#080707] font_neue_montreal_regular text-2xl">
              How can I help you?
            </h2>
          </div>
        </div>
        {chatMode === "chat" ? (
          <div className="rounded-t-2xl absolute w-full h-full px-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,1)_100%)]">
            <ChatSection />
          </div>
        ) : (
          <div className="rounded-t-2xl absolute w-full h-full px-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,1)_100%)]">
            <SupportSection />
          </div>
        )}
      </div>
      <div className="bg-[#F3F6FF] relative rounded-b-2xl">
        <div className="p-4">
          <div className="h-12 !border-[2px] !border-solid !border-[#8990994c] !rounded-xl flex flex-col justify-center items-center">
            <Input
              endContent={
                <Image
                  src={chatSend}
                  alt="chat_send"
                  width={192}
                  height={108}
                  className="w-8 h-8 cursor-pointer pt-1"
                />
              }
              variant=""
              //   label="Email"
              labelPlacement="outside"
              placeholder="Ask me anything"
              type="text"
              className="!text-[#080707] !shadow-none"
            />
          </div>
        </div>
        <hr />
        <div className="flex items-center w-full p-4">
          <div
            onClick={() => setChatMode("chat")}
            className="group cursor-pointer w-full flex flex-col items-center justify-center"
          >
            <ChatBubbleBottomCenterTextIcon
              className={`h-6 w-6 ${
                chatMode === "chat" ? "text-[#080707]" : "text-[#899099]"
              }`}
            />
            <p
              className={`${
                chatMode === "chat" ? "text-[#080707]" : "text-[#899099]"
              }`}
            >
              Chat
            </p>
          </div>
          <div
            onClick={() => setChatMode("support")}
            className="group cursor-pointer w-full flex flex-col items-center justify-center"
          >
            <Image
              src={chatMode === "support" ? headPhonesBlack : headPhones}
              alt="headPhones"
              className="h-5 w-5"
            />
            <p
              className={`${
                chatMode === "support" ? "text-[#080707]" : "text-[#899099]"
              }`}
            >
              Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
