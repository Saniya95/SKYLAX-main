import React from "react";

const ChatSection = () => {

    const Questions = ({ name }) => {
        return (
          <div className="bg-[#4759680D] hover:bg-[#4759681b] p-4 rounded-xl w-fit cursor-pointer">
            <p className="text-[#080707] font_neue_montreal_regular text-base">
              {name}
            </p>
          </div>
        );
      };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Questions name={"What is Scalyx?"} />
      <Questions name={"How does Scalyx work?"} />
      <Questions name={"How does Scalyx benefit your business?"} />
    </div>
  );
};

export default ChatSection;
