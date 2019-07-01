import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import {
  menuLoaded,
  menuRequested,
  menuError,
  addedToCart
} from '../../actions';
import WithRestoService from './../hoc/with-resto-service';
import Spinner from '../spinner';
import Error from '../error/';
import './menu-list.scss';

const MenuList = ({ menuItems, addedToCart }) => {
  return (
    <ul className="menu__list">
      {menuItems.map(menuItem => {
        return (
          <MenuListItem
            key={menuItem.id}
            menuItem={menuItem}
            onAddToCart={addedToCart}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error,
    errMessage: state.errMessage
  };
};

const withData = () => {
  return class extends Component {
    componentDidMount() {
      this.props.menuRequested();
      const { rs, menuLoaded, menuError } = this.props;

      rs.getMenuItems()
        .then(res => menuLoaded(res))
        .catch(() => menuError(rs.errMessage));
    }
    render() {
      const { loading, error, errMessage } = this.props;

      if (loading) return <Spinner />;
      if (error) return <Error err={errMessage} />;
      return <MenuList {...this.props} />;
    }
  };
};

export default WithRestoService()(
  connect(
    mapStateToProps,
    { menuLoaded, menuRequested, menuError, addedToCart }
  )(withData())
);
