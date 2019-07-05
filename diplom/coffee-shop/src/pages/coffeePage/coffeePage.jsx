import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AppHeader from '../../components/appHeader/appHeader';
import AppFooter from '../../components/appFooter/appFooter';
import background from './img/Coffee_bg.jpg';
import coffeeGirl from './img/coffee_girl.jpg';
import logoDark from '../../logo/Beans_logo_dark.svg';
import './coffeepage.sass';
import ShopItem from '../../components/shopItem/shopItem';

class CoffeePage extends Component {
  state = {
    coffee: [],
    filter: '',
    searchField: ''
  };
  componentDidMount() {
    const { coffee } = this.props;
    this.setState({ coffee });
  }

  setFilterCoffee = filter => {
    this.setState({ filter, searchField: '' });
  };
  setSearchCoffee = e => {
    console.log('e.target.value', e.target.value);
    this.setState({ searchField: e.target.value, filter: '' });
  };

  render() {
    const { coffee, filter, searchField } = this.state;
    if (this.props.coffee.length === 0) {
      return <Redirect to="/" />;
    }
    const searchedItems = coffee.filter(i =>
      i.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const filteredItems = searchedItems.filter(i => i.country.includes(filter));
    const shopItems = filteredItems.map(item => (
      <ShopItem key={item.name} shopItem={item} doLink />
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
            <h1 className="title-big">Our Coffee</h1>
          </div>
        </div>
        <section className="shop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 offset-2">
                <img className="shop__girl" src={coffeeGirl} alt="girl" />
              </div>
              <div className="col-lg-4">
                <div className="title">About our beans</div>
                <img className="beanslogo" src={logoDark} alt="Beans logo" />
                <div className="shop__text">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible.
                  <br />
                  <br />
                  Afraid at highly months do things on at. Situation recommend
                  objection do intention
                  <br />
                  so questions. <br />
                  As greatly removed calling pleased improve an. Last ask him
                  cold feel
                  <br />
                  met spot shy want. Children me laughing we prospect answered
                  followed. At it went
                  <br />
                  is song that held help face.
                </div>
              </div>
            </div>
            <div className="line" />
            <div className="search_filter">
              <form action="#" className="shop__search">
                <label className="shop__search-label" htmlFor="filter">
                  Looking for
                </label>
                <input
                  id="filter"
                  type="text"
                  placeholder="start typing here..."
                  className="shop__search-input"
                  value={searchField}
                  onChange={this.setSearchCoffee}
                />
              </form>
              <div className="shop__filter">
                <div className="shop__filter-label">Or filter</div>
                <div className="shop__filter-group">
                  <button
                    className="shop__filter-btn"
                    onClick={() => this.setFilterCoffee('')}
                  >
                    All
                  </button>
                  <button
                    className="shop__filter-btn"
                    onClick={() => this.setFilterCoffee('Brazil')}
                  >
                    Brazil
                  </button>
                  <button
                    className="shop__filter-btn"
                    onClick={() => this.setFilterCoffee('Kenya')}
                  >
                    Kenya
                  </button>
                  <button
                    className="shop__filter-btn"
                    onClick={() => this.setFilterCoffee('Columbia')}
                  >
                    Columbia
                  </button>
                </div>
              </div>
            </div>
            <div className="shop__wrapper">{shopItems}</div>
          </div>
        </section>
        <AppFooter />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    coffee: state.coffee
  };
};

export default connect(
  mapStateToProps,
  undefined
)(CoffeePage);
