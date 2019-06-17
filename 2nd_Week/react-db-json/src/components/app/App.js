import React, { Component } from 'react';
import styled from 'styled-components';
import DbService from '../../services/dbService';
import Card from '../card/card';

const AppWrapper = styled.div`
  h1 {
    text-align: center;
  }
  h2 {
    margin-top: 50px;
  }
`;

export default class App extends Component {
  state = {
    goods: [],
    coffee: [],
    bestsellers: []
  };

  componentDidMount() {
    const dbService = new DbService();
    dbService.getGoods().then(goods => this.setState({ goods }));
    dbService.getCoffee().then(coffee => this.setState({ coffee }));
    dbService.getBestsellers().then(bestsellers => this.setState({ bestsellers }));
  }

  render() {
    const bestseller_list = this.state.bestsellers.map(item => (
      <div key={item.name} className="col-4">
        <Card imageUrl={item.url} name={item.name} price={item.price} />
      </div>
    ));
    const coffe_list = this.state.coffee.map(item => (
      <div key={item.name} className="col-4">
        <Card
          imageUrl={item.url}
          name={item.name}
          price={item.price}
          description={item.description}
          country={item.country}
        />
      </div>
    ));
    const goods_list = this.state.goods.map(item => (
      <div key={item.name} className="col-4">
        <Card imageUrl={item.url} name={item.name} price={item.price} />
      </div>
    ));
    return (
      <AppWrapper>
        <h1>db.json fetch</h1>
        <div className="container">
          <h2>Bestsellers</h2>
          <div className="row">{bestseller_list}</div>
          <h2>Coffee</h2>
          <div className="row">{coffe_list}</div>
          <h2>Goods</h2>
          <div className="row">{goods_list}</div>
        </div>
      </AppWrapper>
    );
  }
}
