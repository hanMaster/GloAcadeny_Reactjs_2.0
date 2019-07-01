import React, { Component } from 'react';
import cartIcon from './shopping-cart-solid.svg';
import saveIcon from './save.svg';
import { NavLink } from 'react-router-dom';
import WithRestoService from './../hoc/with-resto-service';
import { connect } from 'react-redux';

import './app-header.scss';

class AppHeader extends Component {
  state = {
    message: ''
  };
  showMessage = msg => {
    this.setState({ message: msg });
    setTimeout(() => this.setState({ message: '' }), 2000);
  };
  saveCart = () => {
    if (this.props.items.length > 0) {
      this.props.rs
        .setData(this.props.items)
        .then(() => {
          this.showMessage('Order saved!');
        })
        .catch(() => {
          this.showMessage(this.props.rs.errMessage);
        });
    } else {
      this.showMessage('Empty cart');
    }
  };
  render() {
    const { total } = this.props;
    return (
      <header className="header">
        <span className="header__link">{this.state.message}</span>
        <NavLink className="header__link" exact to="/">
          Menu
        </NavLink>
        <NavLink className="header__link" to="/cart">
          <img className="header__cart" src={cartIcon} alt="cart" />
          Total: ${total}
        </NavLink>
        <button className="header__link" onClick={this.saveCart}>
          <img
            src={saveIcon}
            alt="save cart"
            className="header__save"
            title="Save cart"
          />
        </button>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    total: state.total
  };
};

export default WithRestoService()(connect(mapStateToProps)(AppHeader));
