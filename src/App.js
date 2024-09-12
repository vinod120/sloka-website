import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import HomePage from "./pages/Home/HomePage";
import Layout from "./components/Layout/Layout";
import "./common/styles.css";
import WOW from "wowjs"; // Import WOW.js
import { Waypoint } from "react-waypoint";
import $ from "jquery";
import Books from "./pages/Books/Books";
import ContactForm from "./pages/ContactForm/ContactForm";
import QuotesPage from "./pages/QuotesPage/QuotesPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Articles from "./pages/Articles/Articles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

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

  useEffect(() => {
    const elements = document.querySelectorAll("[data-toggle='counter-up']");
    elements.forEach((element) => {
      new Waypoint({
        element,
        handler: () => {
          $(element).counterUp({
            delay: 5,
            time: 2000,
          });
        },
        offset: "bottom-in-view",
      });
    });
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Articles />} />
          <Route path="/books/:id" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
