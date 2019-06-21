import React, { Component } from 'react';
import ItemList from './../../itemList/index';
import GotService from './../../../services/gotService';
import { withRouter } from 'react-router-dom';

class BooksPage extends Component {
  got = new GotService();
  state = {
    data: [],
    selectedItemId: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.got
      .getAllBooks()
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
    const { data, error, loading } = this.state;

    // const itemDetails = (
    //   <ItemDetails data={data} id={selectedItemId} loading={loading} error={error} type={this.props.type} />
    // );
    return (
      <ItemList
        data={data}
        onSelectItem={itemId => {
          this.props.history.push(itemId);
        }}
        loading={loading}
        onError={this.onError}
        error={error}
        errMessage={this.got.errMessage}
        status={this.got.status}
      />
    );
  }
}

export default withRouter(BooksPage);
