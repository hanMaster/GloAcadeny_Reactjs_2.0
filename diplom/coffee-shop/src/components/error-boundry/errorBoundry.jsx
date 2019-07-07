import React, { Component } from 'react';
import Error from '../error/error';

export default class ErrorBoundry extends Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    console.log('DidCatch', error, info);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) return <Error err={'!'} />;
    return this.props.children;
  }
}
