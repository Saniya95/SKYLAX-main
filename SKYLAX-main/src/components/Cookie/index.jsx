import CommonModal from "@/common/CommonModal";
import { Button, Switch } from "@heroui/react";
import React, { useState } from "react";

const CookieModal = (props) => {
  const [customCookie, setCustomCookie] = useState(false);
 
  return (
    <>
      <CommonModal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop={"blur"}
        open={props?.open}
        size={props?.size || "6xl"}
        placement={"bottom"}
        onClose={props?.onClose}
        className={"bg-[#47596833] bg-blend-soft-light"}
        title={!customCookie ? "Cookie Consent" : "Customize Cookies"}
      >
        {!customCookie ? (
          <div className="px-6 pb-6 pt-2 flex flex-col gap-6">
            <p className="font_neue_montreal_regular text-xl !tracking-[-2%] text-[#F3F6FF]">
              To enhance your experience, we use technologies like cookies to
              store and access device information. Giving your consent allows us
              to process data such as browsing behavior or unique IDs. Without
              consent, some site features and functionality may not work
              properly.
            </p>
            <div className="flex sm:flex-row flex-col items-center justify-between gap-4">
              <div className="flex sm:flex-row flex-col items-center gap-4 sm:w-fit w-full">
                <Button
                  color="primary"
                  variant="faded"
                  className="sm:w-fit w-full py-5 px-20 text-[18px] border-none text-[#080707] font-normal bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] flex justify-center items-center font_neue_montreal_regular"
                  onPress={props?.onClose}
                >
                  Accept all
                </Button>
                <Button
                  color="primary"
                  variant="faded"
                  className="sm:w-fit w-full py-4 px-20 text-[18px] border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent rounded-[8px] flex justify-center items-center font_neue_montreal_regular"
                  onPress={props?.onClose}
                >
                  Reject all
                </Button>
              </div>
              <Button
                color="primary"
                variant="faded"
                className="sm:w-fit w-full py-4 px-6 text-[18px] border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent rounded-[8px] flex justify-center items-center font_neue_montreal_regular"
                onPress={() => setCustomCookie(true)}
              >
                Customize Cookies
              </Button>
            </div>
          </div>
        ) : (
          <div className="px-6 pb-6 pt-2 flex flex-col gap-6">
            <div className="flex sm:flex-row flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-6 sm:w-1/2 w-full">
                <Switch defaultSelected color="secondary" size="md">
                  <div>
                    <h2 className="font_neue_montreal_medium text-lg text-[#F3F6FF] ml-4">
                      Essential Cookies
                    </h2>
                    <p className="font_neue_montreal_regular text-sm tracking-[-1%] text-[#F3F6FFB2] ml-4">
                      These cookies are necessary for the website to function
                      properly
                    </p>
                  </div>
                </Switch>
                <Switch defaultSelected color="secondary" size="md">
                  <h2 className="font_neue_montreal_medium text-lg text-[#F3F6FF] ml-4">
                    Analytics Cookies
                  </h2>
                  <p className="font_neue_montreal_regular text-sm tracking-[-1%] text-[#F3F6FFB2] ml-4">
                    These cookies collect anonymous data on site usage to
                    enhance user experience
                  </p>
                </Switch>
              </div>
              <div className="flex flex-col items-start justify-start gap-6 sm:w-1/2 w-full">
                <Switch defaultSelected color="secondary" size="md">
                  <h2 className="font_neue_montreal_medium text-lg text-[#F3F6FF] ml-4">
                    Functional Cookies
                  </h2>
                  <p className="font_neue_montreal_regular text-sm tracking-[-1%] text-[#F3F6FFB2] ml-4">
                    These cookies store settings like language or region for a
                    customized experience
                  </p>
                </Switch>
                <Switch defaultSelected color="secondary" size="md">
                  <h2 className="font_neue_montreal_medium text-lg text-[#F3F6FF] ml-4">
                    Advertising / Third-Party Cookies
                  </h2>
                  <p className="font_neue_montreal_regular text-sm tracking-[-1%] text-[#F3F6FFB2] ml-4">
                    These cookies help deliver targeted ads and analyze ad
                    effectiveness
                  </p>
                </Switch>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between gap-4">
              <div className="flex items-center gap-4 sm:w-fit w-full">
                <Button
                  color="primary"
                  variant="faded"
                  className="sm:w-fit w-full py-5 px-20 text-[18px] border-none text-[#080707] font-normal bg-gradient-to-r from-[#55D0FF] to-[#6361FC] rounded-[8px] flex justify-center items-center font_neue_montreal_regular"
                  onPress={props?.onClose}
                >
                  Accept selected
                </Button>
              </div>
              <Button
                color="primary"
                variant="faded"
                className="sm:w-fit w-full py-4 px-6 text-[18px] border-[#F3F6FF] text-[#F3F6FF] font-normal bg-transparent rounded-[8px] flex justify-center items-center font_neue_montreal_regular"
                onPress={() => setCustomCookie(false)}
              >
                Back to main options
              </Button>
            </div>
          </div>
        )}
      </CommonModal>
    </>
  );
};

export default CookieModal;
