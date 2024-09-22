import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books/Books";
import ContactForm from "./pages/ContactForm/ContactForm";
import QuotesPage from "./pages/QuotesPage/QuotesPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Articles from "./pages/Articles/Articles";
import HomePage from "./pages/Home/HomePage";
import SpecializationPage from "./components/Specialization/SpecializationPage";
import SlokaEditor from "./pages/AdminManagement/SlokaEditor";
import AdminManagement from "./pages/AdminManagement/AdminManagement";

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
      <Route path="/our-services" element={<SpecializationPage />} />
      <Route path="/admin-management" element={<AdminManagement />} />
      <Route path="/admin-management/:id" element={<SlokaEditor />} />
    </Routes>
  );
};

export default AppRoutes;
