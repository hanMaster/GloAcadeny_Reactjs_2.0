import React from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const Item = styled.li`
  cursor: pointer;
`;

const ItemList = ({ data, onSelectItem, error, errMessage, status, loading }) => {
  if (error)
    return (
      <Item className="list-group-item">
        <ErrorMessage err={errMessage} status={status} />
      </Item>
    );

  if (loading) return <Spinner />;

  const items = data.map(item => {
    return (
      <Item
        key={item.id}
        className="list-group-item"
        onClick={() => {
          onSelectItem(item.id);
        }}
      >
        {item.name}
      </Item>
    );
  });

  return <ul className="item-list list-group mb-5">{items}</ul>;
};
export default ItemList;
