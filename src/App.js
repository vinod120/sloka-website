import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Layout from "./components/Layout/Layout";
import Books from "./pages/Books/Books";
import About from "./pages/AboutMe/AboutMe";
import Articles from "./pages/Articles/Articles";
import ContactForm from "./pages/ContactForm/ContactForm";
import QuotesPage from "./pages/QuotesPage/QuotesPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/books/:id" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
