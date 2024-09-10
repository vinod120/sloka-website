import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import HomePage from "./pages/Home/HomePage";
import Layout from "./components/Layout/Layout";
import "./common/styles.css";
import WOW from 'wowjs';
import { Waypoint } from "react-waypoint";
import $ from "jquery";
import 'animate.css';

const App = () => {
    useEffect(() => {
        const spinner = () => {
            setTimeout(() => {
                const spinnerElement = document.getElementById("spinner");
                if (spinnerElement) {
                    spinnerElement.classList.remove("show");
                }
            }, 10);
        };
        spinner();
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
        const handleScroll = () => {
            const backToTop = document.querySelector(".back-to-top");
            if (window.scrollY > 300) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        };
        window.addEventListener("scroll", handleScroll);

        document.querySelector(".back-to-top").addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

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
    useEffect(() => {
        new WOW.WOW().init(); // Initialize WOW.js for animations
    }, []);
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/articles" element={<Articles />} />
          <Route path="/books/:id" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/quotes" element={<QuotesPage />} /> */}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
