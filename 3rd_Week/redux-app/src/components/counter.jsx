import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const Counter = ({ counter, inc, dec, rst }) => {
  return (
    <div className="wrapper">
      <div className="counter-box">
        <h1>{counter}</h1>
      </div>
      <div className="buttons-box">
        <button id="plus" onClick={inc} />
        <button id="minus" onClick={dec} />
        <button id="reset" onClick={rst} />
      </div>
      <div id="alert" className="error" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(
  mapStateToProps,
  actions
)(Counter);
