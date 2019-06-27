import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import { NavLink } from 'react-router-dom';

import './app-header.scss';

const AppHeader = ({ total }) => {
  return (
    <header className="header">
      <NavLink className="header__link" exact to="/">
        Menu
      </NavLink>
      <NavLink className="header__link" to="/cart">
        <img className="header__cart" src={cartIcon} alt="cart" />
        Total: {total} $
      </NavLink>
    </header>
  );
};

export default AppHeader;
