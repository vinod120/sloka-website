import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SpecializationCarousel from "../../components/Specialization/SpecializationCarousel";
import BooksCarousel from "../Books/BooksCarousel";
import QuotesCarousel from "../QuotesPage/QuotesCarousel";
import ArticlesCarousel from "../Articles/ArticlesCarousel";
import GreetingBanner from "../../components/WelcomeBanner/GreetingBanner";
import WelcomeBannerContent from "../../components/WelcomeBanner/WelcomeBannerContent";

const HomePage = () => {
  return (
    <>
      <GreetingBanner />
      <WelcomeBannerContent />
      <SpecializationCarousel />
      <BooksCarousel />
      <QuotesCarousel />
      <ArticlesCarousel />
      <ContactForm />
    </>
  );
};

export default HomePage;
