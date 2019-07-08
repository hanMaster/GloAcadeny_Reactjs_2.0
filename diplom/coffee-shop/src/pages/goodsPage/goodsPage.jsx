import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AppHeader from '../../components/appHeader/appHeader';
import AppFooter from '../../components/appFooter/appFooter';
import ShopItem from './../../components/shopItem/shopItem';
import background from './img/Goods_bg.jpg';
import cup from './img/cup.jpg';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';

const GoodsPage = ({ goods }) => {
  if (goods.length === 0) {
    return <Redirect to="/" />;
  }

  const goodItems = goods.map(item => (
    <ShopItem key={item.name} shopItem={item} />
  ));
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
          <h1 className="title-big">For your pleasure</h1>
        </div>
      </div>
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-2">
              <img className="shop__girl" src={cup} alt="cup of coffee" />
            </div>
            <div className="col-lg-4">
              <div className="title">About our goods</div>
              <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />
              <div className="shop__text">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible.
                <br />
                <br />
                Afraid at highly months do things on at. Situation recommend
                objection do intention
                <br />
                so questions. <br />
                As greatly removed calling pleased improve an. Last ask him cold
                feel
                <br />
                met spot shy want. Children me laughing we prospect answered
                followed. At it went
                <br />
                is song that held help face.
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="shop__wrapper">{goodItems}</div>
        </div>
      </section>
      <AppFooter />
    </>
  );
};
const mapStateToProps = state => {
  return {
    goods: state.goods
  };
};

export default connect(
  mapStateToProps,
  undefined
)(GoodsPage);
