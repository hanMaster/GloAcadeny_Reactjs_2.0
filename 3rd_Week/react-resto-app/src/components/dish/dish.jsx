import React, { Component } from 'react';
import WithRestoService from './../hoc/with-resto-service';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
import Error from '../error/';
import './dish.scss';

class Dish extends Component {
  state = {
    dish: {},
    error: false,
    loading: true
  };
  componentDidMount() {
    const { rs, itemId } = this.props;

    rs.getDish(itemId)
      .then(dish => this.setState({ dish, loading: false }))
      .catch(() => this.setState({ loading: false, error: true }));
  }
  render() {
    const { loading, dish, error } = this.state;
    if (loading) return <Spinner />;
    if (error) return <Error err={this.props.rs.errMessage} />;
    return (
      <div className="dish">
        <h1>{dish.title}</h1>
        <div className="data">
          <img src={dish.url} alt="title" />
          <div className="info">
            <h2>Category: {dish.category}</h2>
            <span>Price: ${dish.price}</span>
            <div className="buttons">
              <button className="btn add">Add to cart</button>
              <Link to="/" className="btn back">
                Back to menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WithRestoService()(Dish);
