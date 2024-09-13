import React from "react";
import "./Footer.css"; // Import the CSS file
import { NavLink } from "react-router-dom";
import navLinks from "../../utils/navLink";
import socialLinks from "../../utils/socialLinks";

const Footer = () => {
  
  return (
    <div
      className="container-fluid footer py-5 wow fadeIn"
      data-wow-delay="0.2s"
    >
      <div className="container py-5">
        <div className="row g-5 align-items-start justify-content-between">
          <div className="col-md-6 col-lg-6 col-xl-4 order-1 order-md-1 order-lg-1">
            <div className="footer-item">
              <a href="index.html" className="p-0">
                <h4 className="text-white mb-4">
                  <i className="fas fa-swimmer text-primary me-3" />Dr. Sloka
                </h4>
              </a>
              <p className="mb-2">
              Dr. Sloka, a pen name for Dr. Sukesh Krishna Chaitanya Loka, professionally is a Clinical Pharmacologist and a freelance Clinical Psychologist.
              </p>

              <div className="d-flex align-items-center">
                <i className="fas fa-envelope text-primary me-3" />
                <p className="text-white mb-0">info@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3 order-2 order-md-2 order-lg-3 w-auto">
            <div className="footer-item">
              <h4 className="text-white mb-4">Quick Links</h4>
              {navLinks?.map((link) =>
                <NavLink
                  key={link?.name}
                  to={link?.path}
                  className="d-block mb-2"
                  activeclassname="active"
                  exact="true"
                >
                  <i className="fas fa-angle-right me-2" /> {link?.name}
                </NavLink>
              )}
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3 mx-auto order-3 order-md-3 order-lg-2">
            <div className="team-icon d-flex justify-content-between">
              {socialLinks.map(item =>
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`${item.icon} display-7`} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
