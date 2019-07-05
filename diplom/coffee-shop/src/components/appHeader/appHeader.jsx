import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo/Logo.svg';
import './header.sass';

const AppHeader = () => {
  return (
    <header>
      <ul className="header">
        <li className="header__item">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink to="/coffee">Our coffee</NavLink>
        </li>
        <li className="header__item">
          <NavLink to="/goods">For your pleasure</NavLink>
        </li>
        <li className="header__item">
          <NavLink to="#">Contact us</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppHeader;
