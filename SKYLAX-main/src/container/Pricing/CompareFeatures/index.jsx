import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ComparePlanFeatures = () => {
  let Commerce = [
    { name: "Store website", basic: true, advanced: true, pro: true },
    { name: "Product catalog", basic: true, advanced: true, pro: true },
    { name: "Loyalty program", basic: false, advanced: true, pro: true },
    { name: "Chatbot", basic: true, advanced: true, pro: true },
    { name: "CRM", basic: false, advanced: true, pro: true },
  ];

  let Inventory = [
    { name: "Inventory management", basic: true, advanced: true, pro: true },
    { name: "Receiving management", basic: true, advanced: true, pro: true },
    { name: "Supplier management", basic: false, advanced: true, pro: true },
    { name: "Shipping", basic: true, advanced: true, pro: true },
  ];

  let Management = [
    {
      name: "Customer information database",
      basic: true,
      advanced: true,
      pro: true,
    },
    { name: "Dashboard", basic: true, advanced: true, pro: true },
    { name: "Accounting", basic: false, advanced: false, pro: true },
    {
      name: "Reporting and dashboards",
      basic: false,
      advanced: false,
      pro: true,
    },
    {
      name: "Price and markdown management",
      basic: false,
      advanced: false,
      pro: true,
    },
    { name: "Work order management", basic: false, advanced: false, pro: true },
    { name: "Staff management", basic: false, advanced: true, pro: true },
    { name: "Jewelry MES ", basic: false, advanced: false, pro: "text" },
  ];

  let POS = [{ name: "Point of sale", basic: true, advanced: true, pro: true }];

  return (
    <div className="bg-[#14181B] rounded-2xl pb-8 relative">
      <div className="sm:px-10 px-4 flex items-center">
        <div className="w-[31%]"></div>
        <div className="w-[23%] flex items-center justify-center pt-12 pb-8 sm:pr-0 pr-4">
          <h1 className="sm:text-[32px] text-base text-[#F3F6FF] font_neue_montreal_regular">
            Basic
          </h1>
        </div>
        <div className="w-[23%] flex items-center justify-center pt-12 pb-8 sm:pr-0 pr-4">
          <h1 className="sm:text-[32px] text-base text-[#F3F6FF] font_neue_montreal_regular">
            Advanced
          </h1>
        </div>
        <div className="w-[23%] flex items-center justify-center bg-[url(/assets/images/Info.png)] bg-cover bg-no-repeat rounded-t-xl  pt-12 pb-8">
          <h1 className="sm:text-[32px] text-base text-[#F3F6FF] font_neue_montreal_regular">
            Pro
          </h1>
        </div>
      </div>
      <hr className="border-[#5e697375] border-[1.5px]" />

      <div className="sm:px-10 px-4 flex items-center">
        <div className="w-[31%] flex flex-col items-start justify-center gap-6 pt-12 pb-8">
          <div>
            <h1 className="sm:text-[24px] text-base text-[#F3F6FF] font_neue_montreal_regular">
              Pay Monthly
            </h1>
            <p className="sm:text-[16px] text-sm text-[#F3F6FF] opacity-50 font_neue_montreal_regular">
              Set up fee $500
            </p>
          </div>
          <div>
            <h1 className="sm:text-[24px] text-base text-[#F3F6FF] font_neue_montreal_regular">
              Pay Yearly
            </h1>
            <p className="sm:text-[16px] text-sm text-[#F3F6FF] opacity-50 font_neue_montreal_regular">
              Set up fee $500
            </p>
          </div>
          <div className="py-6" />
        </div>

        <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 pt-12 pb-8">
          <div>
            <h1 className="sm:text-[24px] text-base text-[#F3F6FF] font_neue_montreal_regular">
              $699
            </h1>
            <p className="sm:text-[16px] text-sm text-[#F3F6FF] opacity-50 font_neue_montreal_regular">
              USD/Month
            </p>
          </div>
          <div>
            <h1 className="sm:text-[24px] text-base text-[#F3F6FF] font_neue_montreal_regular">
              $595
            </h1>
            <p className="sm:text-[16px] text-sm text-[#F3F6FF] opacity-50 font_neue_montreal_regular">
              USD/Month
            </p>
          </div>
          <Button
            color="primary"
            variant="faded"
            className="w-full py-6 px-6 sm:text-[18px] text-sm border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent rounded-[16px] flex justify-center items-center sm:mr-0 mr-6"
          >
            Buy now
          </Button>
        </div>

        <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 pt-12 pb-8">
          <div>
            <h1 className="sm:text-[24px] text-base text-[#F3F6FF] font_neue_montreal_regular">
              $1,399
            </h1>
            <p className="sm:text-[16px] text-sm text-[#F3F6FF] opacity-50 font_neue_montreal_regular">
              USD/Month
            </p>
          </div>
          <div>
            <h1 className="sm:text-[24px] text-base text-[#F3F6FF] font_neue_montreal_regular">
              $1,190
            </h1>
            <p className="sm:text-[16px] text-sm text-[#F3F6FF] opacity-50 font_neue_montreal_regular">
              USD/Month
            </p>
          </div>
          <Button
            color="primary"
            variant="faded"
            className="w-full py-6 px-6 sm:text-[18px] text-sm border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent rounded-[16px] flex justify-center items-center sm:mr-0 mr-2"
          >
            Buy now
          </Button>
        </div>

        <div className="w-[23%] flex flex-col items-center justify-center gap-6 bg-[#000000] px-4 pt-12 pb-8">
          <div>
            <h1 className="sm:text-[24px] text-base text-[#F3F6FF] font_neue_montreal_regular">
              $1,599
            </h1>
            <p className="sm:text-[16px] text-sm text-[#F3F6FF] opacity-50 font_neue_montreal_regular">
              USD/Month
            </p>
          </div>
          <div>
            <h1 className="sm:text-[24px] text-base text-[#F3F6FF] font_neue_montreal_regular">
              $1,360
            </h1>
            <p className="sm:text-[16px] text-sm text-[#F3F6FF] opacity-50 font_neue_montreal_regular">
              USD/Month
            </p>
          </div>
          <Button
            color="primary"
            variant="faded"
            className="w-full py-6 px-6 sm:text-[18px] text-sm border-[#080707] text-[#080707] font-normal bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[16px] flex justify-center items-center"
          >
            Buy now
          </Button>
        </div>
      </div>

      {/* header-1 */}
      <div className="bg-[#1e252b] sm:px-10 px-4 py-8 z-10">
        <h1 className="text-[32px] text-[#F3F6FF] font_neue_montreal_regular">
          Commerce
        </h1>
      </div>

      {/* sec-1 */}
      {Commerce.map((v, i) => (
        <div key={i} className="sm:px-10 px-4 flex items-center">
          <div className="w-[31%] flex flex-col items-start justify-center gap-6 py-5">
            <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">
              {v?.name}
            </p>
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 py-8">
            {v?.basic ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 py-8">
            {v?.advanced ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 bg-[#000000] px-4 sm:py-8 py-12">
            {v?.pro ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>
        </div>
      ))}

      {/* header-2 */}
      <div className="bg-[#1e252b] sm:px-10 px-4 py-8 z-10">
        <h1 className="text-[32px] text-[#F3F6FF] font_neue_montreal_regular">
          Inventory
        </h1>
      </div>

      {/* sec-2 */}
      {Inventory.map((v, i) => (
        <div key={i} className="sm:px-10 px-4 flex items-center">
          <div className="w-[31%] flex flex-col items-start justify-center gap-6 py-5">
            <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">
              {v?.name}
            </p>
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 py-8">
            {v?.basic ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 py-8">
            {v?.advanced ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 bg-[#000000] px-4 py-8">
            {v?.pro ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>
        </div>
      ))}

      {/* header-3 */}
      <div className="bg-[#1e252b] sm:px-10 px-4 py-8 z-10">
        <h1 className="text-[32px] text-[#F3F6FF] font_neue_montreal_regular">
          Management
        </h1>
      </div>

      {/* sec-3 */}
      {Management.map((v, i) => (
        <div key={i} className="sm:px-10 px-4 flex items-center">
          <div className="w-[31%] flex flex-col items-start justify-center gap-6 py-5">
            <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">
              {v?.name}
            </p>
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 py-8">
            {v?.basic ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 py-8">
            {v?.advanced ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 bg-[#000000] px-4 py-8">
            {v?.pro === "text" ? (
              <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular z-10">
                Additionally for $500
              </p>
            ) : v?.pro ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>
        </div>
      ))}

      {/* header-4 */}
      <div className="bg-[#1e252b] sm:px-10 px-4 py-8 relative z-10">
        <h1 className="text-[32px] text-[#F3F6FF] font_neue_montreal_regular">
          POS
        </h1>
      </div>

      {/* sec-4 */}
      {POS.map((v, i) => (
        <div key={i} className="sm:px-10 px-4 flex items-center">
          <div className="w-[31%] flex flex-col items-start justify-center gap-6 py-5">
            <p className="sm:text-base text-sm text-[#F3F6FF] font_neue_montreal_regular">
              {v?.name}
            </p>
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 py-8">
            {v?.basic ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 px-4 py-8">
            {v?.advanced ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>

          <div className="w-[23%] flex flex-col items-center justify-center gap-6 bg-[#000000] rounded-b-xl px-4 py-8">
            {v?.pro ? (
              <CheckIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 text-[#F3F6FF] z-10" />
            )}
          </div>
        </div>
      ))}

      <Image
        src={"/assets/images/bottomePTable.png"}
        width={192}
        height={108}
        className="w-[21%] h-[100vh] absolute sm:right-[2.5rem] right-[1rem] bottom-[2rem]"
      />
    </div>
  );
};

export default ComparePlanFeatures;
