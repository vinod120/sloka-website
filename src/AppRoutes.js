import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books/Books";
import ContactForm from "./pages/ContactForm/ContactForm";
import QuotesPage from "./pages/QuotesPage/QuotesPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Articles from "./pages/Articles/Articles";
import HomePage from "./pages/Home/HomePage";
import SlokaEditor from "./pages/SlokaEditor/SlokaEditor";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Articles />} />
      <Route path="/books/:id" element={<Books />} />
      <Route path="/books" element={<Books />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/contact-us" element={<ContactForm />} />
      <Route path="/quotes" element={<QuotesPage />} />
      <Route path="/editor" element={<SlokaEditor />} />
      <Route path="/editor/:id" element={<SlokaEditor />} />
    </Routes>
  );
};

export default AppRoutes;
