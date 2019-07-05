import React from 'react';
import { Link } from 'react-router-dom';

const BestItem = ({ title, price, url }) => {
  const lnk = `/coffee/${title}`;
  return (
    <div className="best__item">
      <Link to={lnk}>
        <img src={url} alt={title} />
        <div className="best__item-title">{title}</div>
        <div className="best__item-price">${price}</div>
      </Link>
    </div>
  );
};

export default BestItem;
