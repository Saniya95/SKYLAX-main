import React from "react";

const SectionLayer = ({ children, showEllipse = false, showPlate = false, className = "" }) => {
	return (
		<section className={`layer-section ${className}`}>
			<div aria-hidden className="layer-sequence-overlay" />
			{showEllipse && <div aria-hidden className="layer-ellipse-11" />}
			{showPlate && <div aria-hidden className="layer-gradient-plate" />}
			<div className="relative z-10">{children}</div>
		</section>
	);
};

export default SectionLayer;
