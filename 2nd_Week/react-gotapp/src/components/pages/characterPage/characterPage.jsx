import React, { Component } from 'react';
import RowBlock from './../../rowBlock/rowBlock';
import CharDetails from './../../charDetails/charDetails';
import ItemList from './../../itemList/index';
import GotService from './../../../services/gotService';

export default class CharacterPage extends Component {
  got = new GotService();
  state = {
    characters: [],
    selectedCharacterId: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.got
      .getAllCharacters()
      .then(characters => this.props.onLoaded(characters))
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(() => this.onError());
  }

  charactersLoaded = characters => {
    this.setState({ characters, selectedCharacterId: characters[0].id });
  };

  selectCharacter = selectedCharacterId => {
    this.setState({ selectedCharacterId });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  render() {
    const { characters, selectedCharacterId, error, loading } = this.state;
    const itemList = (
      <ItemList
        data={characters}
        onSelectItem={this.selectCharacter}
        loading={loading}
        onLoaded={this.charactersLoaded}
        onError={this.onError}
        error={error}
        errMessage={this.got.errMessage}
        status={this.got.status}
      />
    );

    const charDetails = <CharDetails characters={characters} id={selectedCharacterId} error={error} />;
    return <RowBlock left={itemList} right={charDetails} />;
  }
}

// const CharacterPage = ({

//   errMessage,
//   status,
//   selectCharacter,
//   onError,
//   charactersLoaded
// }) => {

// };
