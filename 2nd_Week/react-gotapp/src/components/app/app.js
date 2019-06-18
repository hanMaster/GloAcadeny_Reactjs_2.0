import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
// import GotService from './../../services/gotService';
import styled from 'styled-components';

const Label = styled.label`
  color: white;
  margin-left: 5px;
`;
export default class App extends Component {
  state = {
    showRandomCharacter: true
  };
  componentDidMount() {
    // const got = new GotService();
    // got.getAllCharacters().then(res => {
    //   console.error('Персонажи');
    //   res.forEach(item => {
    //     console.log(item.name);
    //   });
    // });
    // got.getAllBooks().then(res => {
    //   console.error('Книги');
    //   res.forEach(item => {
    //     console.log(item.name);
    //   });
    // });
    // got.getAllHouses().then(res => {
    //   console.error('Дома');
    //   res.forEach(item => {
    //     console.log(item.name);
    //   });
    // });
  }

  showRandomCharacterChange = () => {
    this.setState({ showRandomCharacter: !this.state.showRandomCharacter });
  };

  render() {
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <input
            id="shrandchar"
            type="checkbox"
            checked={this.state.showRandomCharacter}
            onChange={this.showRandomCharacterChange}
          />
          <Label htmlFor="shrandchar">Show random character</Label>
        </Container>

        <Container>
          {this.state.showRandomCharacter && (
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                <RandomChar />
              </Col>
            </Row>
          )}

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
