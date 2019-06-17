import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from './../../services/gotService';

export default class App extends Component {
  componentDidMount() {
    const got = new GotService();

    got.getAllCharacters().then(res => {
      console.error('Персонажи');
      res.forEach(item => {
        console.log(item.name);
      });
    });

    got.getAllBooks().then(res => {
      console.error('Книги');
      res.forEach(item => {
        console.log(item.name);
      });
    });

    got.getAllHouses().then(res => {
      console.error('Дома');
      res.forEach(item => {
        console.log(item.name);
      });
    });
  }
  render() {
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <RandomChar />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
