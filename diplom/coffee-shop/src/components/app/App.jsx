import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/mainPage/mainPage';
import CoffeePage from '../../pages/coffeePage/coffeePage';
import ItemPage from '../../pages/itemPage/itemPage';

import Page_404 from './../page404/page404';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/coffee" exact component={CoffeePage} />
        <Route path="/item" exact component={ItemPage} />
        <Route component={Page_404} />
      </Switch>
    </div>
  );
}

export default App;
