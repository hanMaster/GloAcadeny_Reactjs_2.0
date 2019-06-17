import React from 'react';
import styled from 'styled-components';

const CardItem = styled.div`
  width: 18rem;
  margin-bottom: 10px;
`;

const Price = styled.h2`
  color: crimson;
`;

const Card = ({ name, imageUrl, price, description = '', country = '' }) => {
  return (
    <CardItem className="card">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Price>Price: {price}</Price>
        <h6>{country}</h6>
      </div>
    </CardItem>
  );
};

export default Card;
