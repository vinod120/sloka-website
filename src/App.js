import { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import WOW from "wowjs";
import AppRoutes from "./AppRoutes";
import "./common/styles.css";
import Layout from "./components/Layout/Layout";
import DATA from "./utils/app.json";

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

  useEffect(() => {
    // const fetchData = async () => {
    //   const data = await getJsonFromS3();
    //   setAppData(data);
    // };
    // fetchData();
    setAppData(DATA)
  }, []);

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
