import React, { createContext, useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import "./common/styles.css";
import WOW from "wowjs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import DATA from "./utils/app.json";
import { getJsonFromS3 } from "./AWS";

export const AppContext = createContext();

const App = () => {
  const [appData, setAppData] = useState(DATA);

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, 
    });
    wow.init();

    const observer = new MutationObserver(() => {
      wow.sync();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getJsonFromS3();
  //     setAppData(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ appData }}>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
