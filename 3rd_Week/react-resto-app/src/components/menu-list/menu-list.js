import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import { menuLoaded, menuRequested, menuError } from '../../actions';
import WithRestoService from './../hoc/with-resto-service';
import Spinner from '../spinner';
import Error from '../error/';
import './menu-list.scss';

class MenuList extends Component {
  componentDidMount() {
    this.props.menuRequested();
    const { rs, menuLoaded, menuError } = this.props;

    rs.getMenuItems()
      .then(res => menuLoaded(res))
      .catch(() => menuError(rs.errMessage));
  }

  render() {
    const { menuItems, loading, error, errMessage } = this.props;

    if (loading) return <Spinner />;
    if (error) return <Error err={errMessage} />;

    return (
      <ul className="menu__list">
        {menuItems.map(menuItem => {
          return <MenuListItem key={menuItem.id} menuItem={menuItem} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error,
    errMessage: state.errMessage
  };
};

export default WithRestoService()(
  connect(
    mapStateToProps,
    { menuLoaded, menuRequested, menuError }
  )(MenuList)
);
