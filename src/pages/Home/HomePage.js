import React from "react";
import "./HomePage.css";
import GreetingBanner from "../../components/GreetingBanner/GreetingBanner";
import WelcomeBanner from "../../components/WelcomeBanner.js/WelcomeBanner";
import Quotes from "../../components/Quotes/Quotes";
import ContactForm from "../ContactForm/ContactForm";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <GreetingBanner />
      <WelcomeBanner />
      <Quotes />
      <ContactForm />
    </div>
  );
};

export default HomePage;
