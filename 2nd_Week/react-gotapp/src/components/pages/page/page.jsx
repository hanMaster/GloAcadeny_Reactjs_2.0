import React, { Component } from 'react';
import RowBlock from './../../rowBlock/rowBlock';
import ItemDetails from '../../itemDetails/itemDetails';
import ItemList from './../../itemList/index';
import GotService from './../../../services/gotService';

export default class CharacterPage extends Component {
  got = new GotService();
  state = {
    data: [],
    selectedItemId: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.got[this.props.func]()
      .then(data => {
        this.setState({ loading: false, data });
      })
      .catch(() => this.onError());
  }

  selectItem = selectedItemId => {
    this.setState({ selectedItemId });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  render() {
    const { data, selectedItemId, error, loading } = this.state;
    const itemList = (
      <ItemList
        data={data}
        onSelectItem={this.selectItem}
        loading={loading}
        onError={this.onError}
        error={error}
        errMessage={this.got.errMessage}
        status={this.got.status}
      />
    );

    const itemDetails = (
      <ItemDetails data={data} id={selectedItemId} loading={loading} error={error} type={this.props.type} />
    );
    return <RowBlock left={itemList} right={itemDetails} />;
  }
}
