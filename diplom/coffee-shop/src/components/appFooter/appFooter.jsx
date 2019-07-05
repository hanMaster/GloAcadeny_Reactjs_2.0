import React from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../../logo/Beans_logo_dark.svg';
import logoBlack from '../../logo/Logo_black.svg';
import './footer.sass';

const AppFooter = () => {
  return (
    <footer>
      <div className="container">
        <ul className="footer">
          <li className="footer__item">
            <Link to="/">
              <img src={logoBlack} alt="logo" />
            </Link>
          </li>
          <li className="footer__item">
            <Link to="/coffee">Our coffee</Link>
          </li>
          <li className="footer__item">
            <Link to="/goods">For your pleasure</Link>
          </li>
          <li className="footer__item">
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
        <img className="beanslogo" src={logoDark} alt="Beans logo" />
      </div>
    </footer>
  );
};

export default AppFooter;
