import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/mainPage/mainPage';
import CoffeePage from '../../pages/coffeePage/coffeePage';
import ItemPage from '../../pages/itemPage/itemPage';

import Page_404 from './../page404/page404';
import GoodsPage from '../../pages/goodsPage/goodsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/coffee" exact component={CoffeePage} />
        <Route path="/goods" exact component={GoodsPage} />
        <Route
          path="/coffee/:name"
          exact
          render={({ match }) => {
            const { name } = match.params;
            return <ItemPage itemName={name} />;
          }}
        />

        <Route component={Page_404} />
      </Switch>
    </div>
  );
}

export default App;
