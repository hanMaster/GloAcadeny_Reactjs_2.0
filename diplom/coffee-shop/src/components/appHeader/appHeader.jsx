import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header>
      <ul className="header">
        <li className="header__item">
          <NavLink to="/">
            <img src="logo/Logo.svg" alt="logo" />
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink to="/coffee">Our coffee</NavLink>
        </li>
        <li className="header__item">
          <NavLink to="/item">For your pleasure</NavLink>
        </li>
        <li className="header__item">
          <NavLink to="#">Contact us</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppHeader;
