import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import CharacterPage from './../pages/characterPage/characterPage';

const Label = styled.label`
  color: white;
  margin-left: 5px;
  cursor: pointer;
`;
export default class App extends Component {
  state = {
    showRandomCharacter: true,
    characters: [],
    books: [],
    houses: [],
    selectedCharacterId: null,
    error: false,
    errMessage: '',
    status: null
  };

  showRandomCharacterChange = () => {
    this.setState({ showRandomCharacter: !this.state.showRandomCharacter });
  };

  render() {
    const { showRandomCharacter, characters, selectedCharacterId, error, errMessage, status } = this.state;

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <input
            id="shrandchar"
            type="checkbox"
            checked={showRandomCharacter}
            onChange={this.showRandomCharacterChange}
          />
          <Label htmlFor="shrandchar">Show random character</Label>
        </Container>

        <Container>
          {this.state.showRandomCharacter && (
            <Row>
              <Col lg="6">
                <RandomChar />
              </Col>
            </Row>
          )}
          <CharacterPage
            characters={characters}
            selectedCharacterId={selectedCharacterId}
            error={error}
            errMessage={errMessage}
            status={status}
            selectCharacter={this.selectCharacter}
            onError={this.onError}
            charactersLoaded={this.charactersLoaded}
          />
        </Container>
      </>
    );
  }
}
