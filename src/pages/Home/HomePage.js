import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import Specialization from "../../components/Specialization/Specialization";
import BooksCarousel from "../Books/BooksCarousel";
import QuotesCarousel from "../QuotesPage/QuotesCarousel";
import BlogsCarousel from "../Blogs/BlogsCarousel";

const HomePage = () => {
  return (
    <>
      <WelcomeBanner />
      <Specialization />
      <BooksCarousel />
      <QuotesCarousel />
      <BlogsCarousel />
      <ContactForm />
    </>
  );
};

export default HomePage;
