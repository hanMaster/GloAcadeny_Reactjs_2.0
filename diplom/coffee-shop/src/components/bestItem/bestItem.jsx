import React from 'react';

const BestItem = ({ title, price, url }) => {
  return (
    <div className="best__item">
      <img src={url} alt={title} />
      <div className="best__item-title">{title}</div>
      <div className="best__item-price">${price}</div>
    </div>
  );
};

export default BestItem;
