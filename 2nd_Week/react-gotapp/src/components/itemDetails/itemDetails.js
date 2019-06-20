import React from 'react';
import styled from 'styled-components';
import capitalizeFirstLetter from '../../utils/utils';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectError = styled.div`
  color: #fff;
  text-align: center;
  font-size: 26px;
`;

const ItemDetails = ({ data, id, error, loading, type }) => {
  let arr = [...data];
  arr = arr.filter(item => {
    return item.id === id;
  });
  const item = arr[0];

  const view = [];
  for (let key in item) {
    if (key === 'id') continue;
    view.push(
      <li key={key} className="list-group-item d-flex justify-content-between">
        <span className="term">{capitalizeFirstLetter(key)}</span>
        <span>{item[key]}</span>
      </li>
    );
  }

  if (error) return <SelectError>Something goes wrong!</SelectError>;
  if (loading) return <SelectError>Waiting for data</SelectError>;
  if (id === null) return <SelectError>{`Please select ${type}`}</SelectError>;

  return (
    <Wrapper className="rounded">
      <h4>{item.name}</h4>
      <ul className="list-group list-group-flush">{view}</ul>
    </Wrapper>
  );
};
export default ItemDetails;
