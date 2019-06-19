import React, { Component } from "react";
import styled from "styled-components";
import GotService from "./../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const Item = styled.li`
  cursor: pointer;
`;

export default class ItemList extends Component {
  got = new GotService();

  state = {
    loading: true
  };

  componentDidMount() {
    this.got
      .getAllCharacters()
      .then(characters => this.props.onLoaded(characters))
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => this.props.onError(err, this.got.status));
  }

  render() {
    const { characters, onSelectCharacter, error, errMessage, status } = this.props;
    if (error)
      return (
        <Item className="list-group-item">
          <ErrorMessage err={errMessage} status={status} />
        </Item>
      );

    if (this.state.loading) return <Spinner />;

    const items = characters.map(item => {
      return (
        <Item
          key={item.id}
          className="list-group-item"
          onClick={() => {
            onSelectCharacter(item.id);
          }}
        >
          {item.name}
        </Item>
      );
    });

    return <ul className="item-list list-group mb-5">{items}</ul>;
  }
}
