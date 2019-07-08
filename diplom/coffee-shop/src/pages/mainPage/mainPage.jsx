import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../../components/appHeader/appHeader';
import AppFooter from '../../components/appFooter/appFooter';
import WithDbService from '../../components/hoc/withService';
import ShopItem from './../../components/shopItem/shopItem';
import Spinner from '../../components/spinner/spinner';
import Error from '../../components/error/error';
import {
  bestsellersLoaded,
  coffeeLoaded,
  goodsLoaded,
  dataRequested,
  getDataError
} from '../../actions';
import { connect } from 'react-redux';
import Background from './img/Main_bg.jpg';
import paper from './img/paper.jpg';
import beansLogo from '../../logo/Beans_logo.svg';
import beansLogoDark from '../../logo/Beans_logo_dark.svg';
import './mainpage.sass';

class MainPage extends Component {
  componentDidMount() {
    const {
      dbService,
      bestsellersLoaded,
      coffeeLoaded,
      goodsLoaded,
      dataRequested,
      getDataError
    } = this.props;
    dataRequested();
    dbService
      .getData('bestsellers')
      .then(res => bestsellersLoaded(res))
      .catch(() => getDataError(dbService.errMessage));
    dbService
      .getData('coffee')
      .then(res => coffeeLoaded(res))
      .catch(() => getDataError(dbService.errMessage));
    dbService
      .getData('goods')
      .then(res => goodsLoaded(res))
      .catch(() => getDataError(dbService.errMessage));
  }

  render() {
    const { best, loading, error, errMessage } = this.props;
    let bestItems = undefined;
    if (loading) {
      bestItems = <Spinner />;
    } else if (error) {
      bestItems = <Error err={errMessage} />;
    } else {
      bestItems = best.map(item => (
        <ShopItem key={item.name} shopItem={item} doLink />
      ));
    }
    return (
      <>
        <div
          className="preview"
          style={{
            background: `url(${Background}) center center/cover no-repeat`
          }}
        >
          <div className="container">
            <AppHeader />
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h1 className="title-big">Everything You Love About Coffee</h1>
                <img className="beanslogo" src={beansLogo} alt="Beans logo" />
                <div className="preview__subtitle">
                  We makes every day full of energy and taste
                </div>
                <div className="preview__subtitle">Want to try our beans?</div>
                <Link to="/coffee" className="preview__btn">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="title">About Us</div>
                <img
                  className="beanslogo"
                  src={beansLogoDark}
                  alt="Beans logo"
                />
                <div className="about__text">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible. Afraid at highly months do things on at.
                  Situation recommend objection do intention so questions. As
                  greatly removed calling pleased improve an. Last ask him cold
                  feel met spot shy want. Children me laughing we prospect
                  answered followed. At it went is song that held help face.
                  <br />
                  <br />
                  Now residence dashwoods she excellent you. Shade being under
                  his bed her, Much read on as draw. Blessing for ignorant
                  exercise any yourself unpacked. Pleasant horrible but confined
                  day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active
                  living depend son repair day ladies now.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="best"
          style={{
            background: `url(${paper}) center center/cover no-repeat`
          }}
        >
          <div className="container">
            <div className="title">Our best</div>
            <div className="best__wrapper">{bestItems}</div>
          </div>
        </section>
        <AppFooter />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    best: state.bestsellers,
    coffee: state.coffee,
    loading: state.loading,
    error: state.error,
    errMessage: state.errMessage
  };
};

export default WithDbService()(
  connect(
    mapStateToProps,
    {
      bestsellersLoaded,
      coffeeLoaded,
      goodsLoaded,
      dataRequested,
      getDataError
    }
  )(MainPage)
);
