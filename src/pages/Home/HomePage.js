import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import SpecializationCarousel from "../../components/Specialization/SpecializationCarousel";
import BooksCarousel from "../Books/BooksCarousel";
import QuotesCarousel from "../QuotesPage/QuotesCarousel";
import ArticlesCarousel from "../Articles/ArticlesCarousel";

const HomePage = () => {
  return (
    <>
      <WelcomeBanner />
      <SpecializationCarousel />
      <BooksCarousel />
      <QuotesCarousel />
      <ArticlesCarousel />
      <ContactForm />
    </>
  );
};

export default HomePage;
