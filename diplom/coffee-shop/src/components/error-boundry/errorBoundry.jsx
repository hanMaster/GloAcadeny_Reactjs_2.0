import React, { Component } from 'react';
import Error from '../error/error';

export default class ErrorBoundry extends Component {
  state = {
    error: false,
    errMessage: ''
  };

  componentDidCatch(error, info) {
    console.log('DidCatch', error);
    this.setState({ error: true, errMessage: 'ooops' });
  }

  render() {
    if (this.state.error) return <Error errM={this.state.errMessage} />;
    return this.props.children;
  }
}
