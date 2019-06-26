import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class AddForm extends Component {
  state = {
    inputValue: ''
  };

  inputChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  addPressed = () => {
    this.props.add(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addPressed();
    }
  };

  render() {
    const label = this.props.filter ? 'Show completed' : 'Hide completed';
    return (
      <div className="inputs">
        <input
          type="text"
          placeholder="Add new todo item"
          value={this.state.inputValue}
          onChange={this.inputChange}
          onKeyPress={this.handleKeyDown}
        />
        <div className="buttons">
          <button id="complete" onClick={this.props.hideCompleted}>
            {label}
          </button>
          <button onClick={this.addPressed}>Add new</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { filterReducer } = state;
  return {
    filter: filterReducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(AddForm);
