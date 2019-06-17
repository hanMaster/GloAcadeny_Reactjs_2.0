import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.li`
  cursor: pointer;
`;
export default class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <Item className="list-group-item">John Snow</Item>
        <Item className="list-group-item">Brandon Stark</Item>
        <Item className="list-group-item">Geremy</Item>
      </ul>
    );
  }
}
