import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <ul className="footer">
          <li className="footer__item">
            <Link to="/">
              <img src="logo/Logo_black.svg" alt="logo" />
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/coffee">Our coffee</Link>
          </li>
          <li className="footer__item">
            <Link to="/item">For your pleasure</Link>
          </li>
          <li className="footer__item">
            <Link to="#">Contact us</Link>
          </li>
        </ul>
        <img
          className="beanslogo"
          src="logo/Beans_logo_dark.svg"
          alt="Beans logo"
        />
      </div>
    </footer>
  );
};

export default AppFooter;
