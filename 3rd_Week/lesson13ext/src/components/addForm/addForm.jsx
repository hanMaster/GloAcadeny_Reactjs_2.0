import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const AddForm = () => {
  return (
    <div className="inputs">
      <input type="text" placeholder="Add new todo item" />
      <div className="buttons">
        <button id="complete">Hide completed</button>
        <button>Add new</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state
  };
};

export default connect(
  mapStateToProps,
  actions
)(AddForm);
