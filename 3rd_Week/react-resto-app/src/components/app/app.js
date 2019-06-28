import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import { Switch, Route } from 'react-router-dom';
import Page_404 from './../page404/page404';
import Dish from './../dish/dish';

const App = () => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }}
      className="app"
    >
      <AppHeader total={50} />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route
          path="/dish/:id"
          exact
          render={({ match }) => {
            const { id } = match.params;
            return <Dish itemId={id} />;
          }}
        />
        <Route component={Page_404} />
      </Switch>
    </div>
  );
};

export default App;
