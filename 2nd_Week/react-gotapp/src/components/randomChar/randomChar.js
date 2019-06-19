import React, { Component } from "react";
import styled from "styled-components";
import GotService from "./../../services/gotService";
import ErrorMessage from "../errorMessage/errorMessage";
import "./randomChar.css";

const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;

  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Term = styled.span`
  font-weight: bold;
`;
const Span = styled.span`
  display: block;
`;

export default class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
    errMessage: ""
  };

  got = new GotService();
  interval = null;

  componentDidMount() {
    this.updateChar();
    this.interval = setInterval(this.updateChar, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateChar = () => {
    let id = Math.floor(Math.random() * 130);
    if (id === 0) id = 210;
    // id = 15000;
    this.got
      .getCharacter(id)
      .then(char => {
        this.setState({ char, loading: false });
      })
      .catch(this.onError);
  };

  onError = err => {
    this.setState({
      char: {},
      loading: false,
      error: true,
      errMessage: err
    });
  };

  render() {
    const {
      char: { name, gender, born, died, culture },
      loading,
      error,
      errMessage
    } = this.state;

    const classNames = loading ? "rounded blured" : "rounded";

    return (
      <RandomBlock className={classNames}>
        {error && <ErrorMessage err={errMessage} status={this.got.status} />}
        {!error && (
          <>
            <h4>
              Random Character: <Span> {loading ? "Loading..." : name} </Span>
            </h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <Term>Gender </Term>
                <span>{loading ? "Loading..." : gender}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Born </Term>
                <span>{loading ? "Loading..." : born}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Died </Term>
                <span>{loading ? "Loading..." : died}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <Term>Culture </Term>
                <span>{loading ? "Loading..." : culture}</span>
              </li>
            </ul>
          </>
        )}
      </RandomBlock>
    );
  }
}
