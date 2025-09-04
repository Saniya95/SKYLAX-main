import { Button } from "@heroui/react";
import React from "react";

const Buttons = ({ onClick, buttonText, className }) => {
  return (
    <>
      <Button
        onClick={onClick}
        className={`px-16 py-5 rounded-2xl font_neue_montreal_medium text-lg text-[#080707] bg-[linear-gradient(101.05deg,_#55D0FF_7.43%,_#6361FC_95.9%)] ${className}`}
      >
        {buttonText ? buttonText : "Submit"}
      </Button>
    </>
  );
};

export default Buttons;
