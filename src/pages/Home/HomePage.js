import React from "react";
import "./HomePage.css";
import GreetingBanner from "../../components/GreetingBanner/GreetingBanner";
import WelcomeBanner from "../../components/WelcomeBanner.js/WelcomeBanner";
import Quotes from "../../components/Quotes/Quotes";
import ContactForm from "../ContactForm/ContactForm";
import ScrollComponent from "../../components/ScrollComponent/ScrollComponent";
import sloka from '../sloka.json'

const homepage = sloka.homepage

const HomePage = () => {
  const renderScrollComponent = () => homepage.map((obj, index) => {
    if (obj.renderType === "scroll_images") {
      return <ScrollComponent {...obj} key={`scroll_images_${index}`} />
    }
    return <></>
  })
  return (
    <div className="homepage-container">
      <GreetingBanner />
      <WelcomeBanner />
      <div id='sroll_image_wrapper'>
        {renderScrollComponent()}
      </div>
      <Quotes />
      <ContactForm />
    </div>
  );
};

export default HomePage;
