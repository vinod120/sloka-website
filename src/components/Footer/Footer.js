import React from "react";
import "./Footer.css"; // Import the CSS file
import navigationData from "../../utils/navigationData";
import footerIcons from "../../utils/footerIcons";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerIcons = [
    {
        path: "https://instagram.com",
        icon: "fab fa-instagram"
    },
    {
        path: "https://twitter.com",
        icon: "fab fa-twitter"
    },
    {
        path: "https://youtube.com",
        icon: "fab fa-youtube"
    },
    {
        path: "https://facebook.com",
        icon: "fab fa-facebook"
    },
    {
        path: "https://linkedin.com",
        icon: "fab fa-linkedin"
    }
];
  return (
    // <footer className="footer">
      <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div class="container py-5">
          <div class="row g-5 align-items-start justify-content-between">
            {/* <!-- WaterLand (Always on Top for mobile, Left for tablet & desktop) --> */}
            <div class="col-md-6 col-lg-6 col-xl-4 order-1 order-md-1 order-lg-1">
              <div class="footer-item">
                <a href="index.html" class="p-0">
                  <h4 class="text-white mb-4">
                    <i class="fas fa-swimmer text-primary me-3" />Dr. Sloka
                  </h4>
                </a>
                <p class="mb-2">
                  Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem
                  ipsum dolor sit amet, consectetur adipiscing...
                </p>

                <div class="d-flex align-items-center">
                  <i class="fas fa-envelope text-primary me-3" />
                  <p class="text-white mb-0">info@example.com</p>
                </div>
              </div>
            </div>

            {/* <!-- Quick Links (Always 2nd on mobile, Right on tablet & desktop) --> */}
            <div class="col-md-6 col-lg-6 col-xl-3 order-2 order-md-2 order-lg-3 w-auto">
              <div class="footer-item">
                <h4 class="text-white mb-4">Quick Links</h4>
                <a href="#">
                  <i class="fas fa-angle-right me-2" /> About Us
                </a>
                <a href="#">
                  <i class="fas fa-angle-right me-2" /> Feature
                </a>
                <a href="#">
                  <i class="fas fa-angle-right me-2" /> Attractions
                </a>
                <a href="#">
                  <i class="fas fa-angle-right me-2" /> Tickets
                </a>
                <a href="#">
                  <i class="fas fa-angle-right me-2" /> Blog
                </a>
                <a href="#">
                  <i class="fas fa-angle-right me-2" /> Contact Us
                </a>
              </div>
            </div>

            {/* <!-- Social Icons (Below both on tablet, last on mobile, below Quick Links on tablet and desktop) --> */}
            <div class="col-md-6 col-lg-6 col-xl-3 mx-auto order-3 order-md-3 order-lg-2">
              <div class="team-icon d-flex justify-content-between">
                {footerIcons.map(item =>
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
    // </footer>
  );
};

export default Footer;
