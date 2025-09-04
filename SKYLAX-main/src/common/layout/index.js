import React, { useEffect, useState } from "react";
import Header from "./header/index";
import { HeroUIProvider, useDisclosure } from "@heroui/react";
import Footer from "./footer";
import Cta from "./cta";
import Faq from "./faq";
import Pricing from "./pricing";
import LoginModal from "@/auth/signin";
import SignupModal from "@/auth/signup";
import { CommonApis } from "@/utils/CommonApis";
import CookieModal from "@/components/Cookie";
import { useDispatch, useSelector } from "react-redux";
import { Cookies } from "@/redux/cookiesReducer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const loginModal = useDisclosure();
  const signupModal = useDisclosure();
  const dispatch = useDispatch();

  let openCookie = useSelector((state) => state.cookies.cookie);

  const { getFaq, getReviews } = CommonApis();

  useEffect(() => {
    getFaq();
    getReviews();
  }, []);

  const router = useRouter();
  const isHome = router?.pathname === "/";

  return (
    <div className="relative">
      {/* Global subtle gradient overlay; skip on home to avoid stacking bands with local bridges */}
      {!isHome && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(160%_140%_at_50%_0%,rgba(85,208,255,0.08)_0%,rgba(99,97,252,0.06)_35%,rgba(8,7,7,0)_72%),linear-gradient(180deg,rgba(8,7,7,0)_0%,rgba(8,7,7,0.22)_60%,rgba(8,7,7,0.55)_100%)]"
        />
      )}
      <Header onLoginClick={loginModal.onOpen} />
      <LoginModal
        isOpen={loginModal.isOpen}
        onOpenChange={loginModal.onOpenChange}
        onSignUpClick={() => {
          loginModal.onOpenChange(false);
          signupModal.onOpen();
        }}
      />
      <SignupModal
        isOpen={signupModal.isOpen}
        onOpenChange={signupModal.onOpenChange}
        onLoginClick={() => {
          signupModal.onOpenChange(false);
          loginModal.onOpen();
        }}
      />
  {children}
      <Footer onLoginClick={loginModal.onOpen} />
      <CookieModal open={openCookie} onClose={() => dispatch(Cookies(false))} />
    </div>
  );
};

export default Layout;
