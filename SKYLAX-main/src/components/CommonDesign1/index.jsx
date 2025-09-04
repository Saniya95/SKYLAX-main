import Cta from "@/common/layout/cta";
import MobileCta from "@/common/layout/cta/mobileCta";
import Faq from "@/common/layout/faq";
import Pricing from "@/common/layout/pricing";
import MobilePricing from "@/common/layout/pricing/mobilePrcing";
import React from "react";

const CommonDesign1Page = () => {
  return (
    <div>

      {/* for mobile and desktop */}
  <div className="sm:block hidden w-full">
        <Pricing />
      </div>

      {/* for mobile */}

      <div className="sm:hidden block w-full">
        <MobilePricing/>
      </div>
      
  <div className="relative">
      <Faq />
      </div>
      {/* for mobile and desktop */}
      <div className="sm:block hidden w-full">
      <Cta />
      </div>

      {/* for mobile*/}
      <div className="sm:hidden block w-full">
       <MobileCta/>
      </div>
      
    </div>
  );
};

export default CommonDesign1Page;
