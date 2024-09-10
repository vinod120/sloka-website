import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css"; // Import the CSS file
import Disclaimer from "../Disclaimer/Disclaimer";
import BackToTop from "../BackToTop";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children}
      </main>
      <Disclaimer />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
