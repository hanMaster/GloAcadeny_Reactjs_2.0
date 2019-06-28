import React from 'react';
import { Link } from 'react-router-dom';
import salad from './img/salad.svg';
import pizza from './img/pizza.svg';
import meat from './img/meat.svg';
import './menu-list-item.scss';

const MenuListItem = ({ menuItem: { title, url, price, category, id } }) => {
  let icon = undefined;
  switch (category) {
    case 'salads':
      icon = salad;
      break;
    case 'pizza':
      icon = pizza;
      break;
    case 'meat':
      icon = meat;
      break;
    default:
      icon = salad;
  }
  const lnk = `/dish/${id}`;
  return (
    <li className="menu__item">
      <div className="menu__title">
        <img className="menu__icon" src={icon} alt={category} />
        {title}
      </div>
      <Link to={lnk}>
        <img className="menu__img" src={url} alt={title} />
      </Link>
      <div className="menu__category">
        Category: <span>{category}</span>
      </div>
      <div className="menu__price">
        Price: <span>${price}</span>
      </div>
      <button className="menu__btn">Add to cart</button>
    </li>
  );
};

export default MenuListItem;
