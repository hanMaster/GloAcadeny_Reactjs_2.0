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

export default class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
    errMessage: ""
  };

  componentDidMount() {
    const got = new GotService();
    got
      //.getCharacter(150000)
      .getCharacter(Math.floor(Math.random() * 130))
      .then(char => {
        this.setState({ char, loading: false });
      })
      .catch(this.onError);
  }

  onError = err => {
    this.setState({
      char: {
        //name: "Ops, we got error!",
        //gender: "Ops, we got error!",
        //born: "Ops, we got error!",
        //died: "Ops, we got error!",
        //culture: "Ops, we got error!"
      },
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
        {error && <ErrorMessage err={errMessage} />}
        {!error && (
          <>
            <h4>Random Character: {loading ? "Loading..." : name}</h4>
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
