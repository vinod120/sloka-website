import React from "react";
import "./Footer.css"; // Import the CSS file
import navigationData from "../../utils/navigationData";
import footerIcons from "../../utils/footerIcons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2>Dr Sloka</h2>
        </div>
        <div className="footer-links">
          <ul>
            {navigationData.map(menu =>
              <li key={menu.name}>
                <Link to={menu.path}>
                  {menu.name}
                </Link>
              </li>
            )}
          </ul>
          <ul>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/privacy">Privacy</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        {footerIcons.map(item =>
          <div key={item.path}>
            <a href={item.path} target="_blank" rel="noreferrer">
              <i className={item.icon} />
            </a>
          </div>
        )}
      </div>
      <div className="footer-copyright">
        <p>
          Copyright ©{new Date().getFullYear()} Dr.Sloka
        </p>
      </div>
    </footer>
  );
};

export default Footer;
