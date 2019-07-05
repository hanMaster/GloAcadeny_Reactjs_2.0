import React from 'react';
import { Link } from 'react-router-dom';
import './shopItem.sass';

const ShopItem = ({ shopItem, doLink }) => {
  const lnk = `/coffee/${shopItem.name}`;

  return (
    <div className="item">
      {doLink && (
        <Link to={lnk}>
          <img src={shopItem.url} alt={shopItem.name} />
          <div className="item-title">{shopItem.name}</div>
          <div className="item-country">{shopItem.country}</div>
          <div className="item-price">{shopItem.price}</div>
        </Link>
      )}
      {!doLink && (
        <>
          <img src={shopItem.url} alt={shopItem.name} />
          <div className="item-title">{shopItem.name}</div>
          <div className="item-country">{shopItem.country}</div>
          <div className="item-price">{shopItem.price}</div>
        </>
      )}
    </div>
  );
};

export default ShopItem;
