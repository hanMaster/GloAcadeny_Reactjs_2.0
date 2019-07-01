import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import saveIcon from './save.svg';
import { NavLink } from 'react-router-dom';
import WithRestoService from './../hoc/with-resto-service';

import './app-header.scss';

const AppHeader = ({ total }) => {
  return (
    <header className="header">
      <NavLink className="header__link" exact to="/">
        Menu
      </NavLink>
      <NavLink className="header__link" to="/cart">
        <img className="header__cart" src={cartIcon} alt="cart" />
        Total: ${total}
      </NavLink>
      <button className="header__link">
        <img
          src={saveIcon}
          alt="save cart"
          className="header__save"
          title="Save cart"
        />
      </button>
    </header>
  );
};

export default WithRestoService()(AppHeader);
