import React from "react";

// Reusable gradient divider to softly blend between stacked sections.
// Renders responsive desktop/mobile variants with configurable heights/overlaps.
const SectionDivider = ({
	className = "",
	direction = "down", // 'down' (fade to darker below) or 'up' (fade to darker above)
	desktopHeight = "h-24",
	desktopOverlap = "-mt-10",
	mobileHeight = "h-16",
	mobileOverlap = "-mt-8",
}) => {
	// Keep gradient class names as static strings so Tailwind picks them up.
	const gradients = {
		down:
			"bg-[linear-gradient(180deg,rgba(8,7,7,0)_0%,rgba(8,7,7,0.45)_70%,rgba(8,7,7,1)_100%)]",
		up:
			"bg-[linear-gradient(0deg,rgba(8,7,7,0)_0%,rgba(8,7,7,0.45)_70%,rgba(8,7,7,1)_100%)]",
	};

	const gradientClass = direction === "up" ? gradients.up : gradients.down;

	return (
		<>
			{/* Desktop/Laptop */}
			<div
				aria-hidden
				className={`sm:block hidden ${desktopHeight} ${desktopOverlap} ${gradientClass} ${className}`}
			/>
			{/* Mobile */}
			<div
				aria-hidden
				className={`sm:hidden block ${mobileHeight} ${mobileOverlap} ${gradientClass} ${className}`}
			/>
		</>
	);
};

export default SectionDivider;
