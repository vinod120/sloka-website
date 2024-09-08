import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import navigationData from '../../utils/navigationData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth > 426) {
        closeMenu();
      }
    };

    window?.addEventListener('resize', handleResize);

    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header-container">
      <Link to="/">
        {/* <h1 className="header-title">Dr. Sloka</h1> */}
        <img src='/images/header_logo.png' width={180} height={120} alt='' className='header-img'/>
      </Link>
      <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>
        <ul>
          {navigationData.map(menu => {
            const cssClass = window.location?.pathname?.includes(menu.path) ? "color-007bff" : ""
            return <li key={menu.name} >
              <Link to={menu.path} onClick={toggleMenu} className={cssClass}>
                <i className={`${menu.icon} nav-icon`} /> {menu.name}
              </Link>
            </li>
          })}
        </ul>
      </nav>
      <button className="menu-button" onClick={toggleMenu}>
        &#9776;
      </button>
    </header >
  );
};

export default Header;
