import React from "react";
import styled from "styled-components";

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

const CharDetails = ({ characters, id, error }) => {
  let arr = [...characters];
  arr = arr.filter(item => {
    return item.id === id;
  });
  const item = arr[0];
  if (error) return <SelectError>Error !</SelectError>;
  if (item === undefined) return <SelectError>waiting for data</SelectError>;
  return (
    <Wrapper className="rounded">
      <h4>{item.name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender</span>
          <span>{item.gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born</span>
          <span>{item.born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died</span>
          <span>{item.died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture</span>
          <span>{item.culture}</span>
        </li>
      </ul>
    </Wrapper>
  );
};
export default CharDetails;
