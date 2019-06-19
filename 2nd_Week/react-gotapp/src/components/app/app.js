import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import styled from "styled-components";

const Label = styled.label`
  color: white;
  margin-left: 5px;
  cursor: pointer;
`;
export default class App extends Component {
  state = {
    showRandomCharacter: true,
    characters: [],
    selectedCharacterId: null,
    error: false,
    errMessage: "",
    status: null
  };

  onError = (err, status) => {
    this.setState({
      loading: false,
      error: true,
      errMessage: err,
      status
    });
  };
  charactersLoaded = characters => {
    this.setState({ characters, selectedCharacterId: characters[0].id });
  };

  showRandomCharacterChange = () => {
    this.setState({ showRandomCharacter: !this.state.showRandomCharacter });
  };
  selectCharacter = selectedCharacterId => {
    this.setState({ selectedCharacterId });
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
              <Col lg={{ size: 6 }}>
                <RandomChar />
              </Col>
            </Row>
          )}

          <Row>
            <Col md="6">
              <ItemList
                characters={characters}
                onSelectCharacter={this.selectCharacter}
                onLoaded={this.charactersLoaded}
                onError={this.onError}
                error={error}
                errMessage={errMessage}
                status={status}
              />
            </Col>
            <Col md="6">
              <CharDetails characters={characters} id={selectedCharacterId} error={error} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
