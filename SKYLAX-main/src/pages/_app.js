import Layout from "@/common/layout";
import React,{useEffect} from "react";
import "../styles/globals.css";
import { HeroUIProvider } from "@heroui/react";
import store from "@/redux/store";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chat from "@/components/Chat";
import { Container } from "@mui/material";
import { gsap } from "gsap";
import "../styles/scheduleDemo.css"
import "../styles/sectionLayers.css";
import "../styles/sectionLayers.css";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ToastContainer } from "react-toastify";
export default function App({ Component, pageProps }) {
  
   useEffect(() => {
    if (typeof window === "undefined") return;
    let isMounted = true;
    (async () => {
      try {
        const mod = await import("gsap/dist/ScrollTrigger");
        const ST = mod.ScrollTrigger || mod.default;
        gsap.registerPlugin(ST);
        if (!isMounted) return;
        ST.defaults({
          toggleActions: "play pause resume reset",
          markers: false,
        });
      } catch (err) {
        // no-op
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <HeroUIProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <ToastContainer />
      {/* <Chat /> */}
    </HeroUIProvider>
  );
}
