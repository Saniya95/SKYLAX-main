import React from "react";

export default function LeftCornerGradient({ className = "", fadeRight = true }) {
  return (
    <div aria-hidden className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      {/* Primary purple glow pinned to top-left */}
      <div
        className="absolute -top-[12%] -left-[14%] w-[1100px] h-[1100px] rounded-full bg-[radial-gradient(closest-side,rgba(99,97,252,0.48),rgba(99,97,252,0.14),rgba(8,7,7,0))]"
      />
      {/* Soft blue accent slightly inward */}
      <div
        className="absolute top-[6%] left-[10%] w-[760px] h-[760px] rounded-full bg-[radial-gradient(closest-side,rgba(85,208,255,0.32),rgba(85,208,255,0.10),rgba(8,7,7,0))]"
      />
      {/* Optional right fade to keep right side darker */}
      {fadeRight && (
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,7,0.0)_0%,rgba(8,7,7,0.15)_55%,rgba(8,7,7,0.35)_80%,rgba(8,7,7,0.55)_100%)]" />
      )}
    </div>
  );
}
