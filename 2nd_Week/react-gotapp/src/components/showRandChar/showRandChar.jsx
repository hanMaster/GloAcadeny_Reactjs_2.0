import React, { Component } from "react";
import RandomChar from "../randomChar";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

const Label = styled.label`
  color: white;
  margin-left: 5px;
  cursor: pointer;
`;

export default class ShowRandChar extends Component {
  state = {
    showRandomCharacter: true
  };

  showRandomCharacterChange = () => {
    this.setState({ showRandomCharacter: !this.state.showRandomCharacter });
  };

  render() {
    const { showRandomCharacter } = this.state;
    return (
      <>
        <input
          id="shrandchar"
          type="checkbox"
          checked={showRandomCharacter}
          onChange={this.showRandomCharacterChange}
        />
        <Label htmlFor="shrandchar">Show random character</Label>

        {this.state.showRandomCharacter && (
          <Row>
            <Col lg="6">
              <RandomChar />
            </Col>
          </Row>
        )}
      </>
    );
  }
}
