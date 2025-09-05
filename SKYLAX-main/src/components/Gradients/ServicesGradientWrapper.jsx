import React from "react";
import LeftCornerGradient from "./LeftCornerGradient";

export default function ServicesGradientWrapper({ children, className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <LeftCornerGradient />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
