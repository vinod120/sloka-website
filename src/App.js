import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import "./common/styles.css";
import WOW from "wowjs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // Disable watching DOM changes to improve performance
    });
    wow.init();

    // Sync WOW.js after each new content load to ensure it catches new elements
    const observer = new MutationObserver(() => {
      wow.sync();
    });

    observer.observe(document.body, {
      childList: true, // Watch for changes in child elements
      subtree: true,   // Watch the entire subtree of the document body
    });

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const stickyTop = document.querySelector(".sticky-top");
      if (window.scrollY > 100) {
        stickyTop?.classList.add("shadow-sm");
        stickyTop.style.top = "0px";
      } else {
        stickyTop?.classList.remove("shadow-sm");
        stickyTop.style.top = "-100px";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
