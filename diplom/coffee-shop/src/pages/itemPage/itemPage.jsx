import React from 'react';
import { Redirect } from 'react-router-dom';
import AppHeader from '../../components/appHeader/appHeader';
import AppFooter from '../../components/appFooter/appFooter';
import beansImg from '../../logo/Beans_logo_dark.svg';
import { connect } from 'react-redux';
import background from './img/Coffee_bg.jpg';
import './coffeepage.sass';

const ItemPage = ({ itemName, coffee }) => {
  if (coffee.length === 0) {
    return <Redirect to="/" />;
  }

  const item = coffee.find(i => i.name === itemName);

  return (
    <>
      <div
        className="banner"
        style={{
          background: `url(${background}) center center/cover no-repeat`
        }}
      >
        <div className="container">
          <AppHeader />
          <h1 className="title-big">Our Coffee</h1>
        </div>
      </div>
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-1">
              <img className="shop__girl" src={item.url} alt="coffee_item" />
            </div>
            <div className="col-lg-4">
              <div className="title">About it</div>
              <img className="beanslogo" src={beansImg} alt="Beans logo" />
              <div className="shop__point">
                <span>Country:</span>
                {item.country}
              </div>
              <div className="shop__point">
                <span>Description:</span>
                {item.description}
              </div>
              <div className="shop__point">
                <span>Price:</span>
                <span className="shop__point-price">${item.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppFooter />
    </>
  );
};

const mapStateToProps = state => {
  return {
    coffee: state.coffee
  };
};

export default connect(
  mapStateToProps,
  undefined
)(ItemPage);
