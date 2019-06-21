import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../header';
import CharacterPage from './../pages/characterPage/characterPage';
import ShowRandChar from '../showRandChar/showRandChar';
import BooksPage from './../pages/booksPage/booksPage';
import BookPage from './../pages/bookPage/bookPage';
import HousesPage from './../pages/housesPage/housesPage';
import StartPage from './../pages/startPage/startPage';
import './app.css';
import _404Page from '../pages/404Page/404Page';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Container>
          <Header />
          <ShowRandChar />
          <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/characters" exact component={CharacterPage} />
            <Route path="/books" exact component={BooksPage} />
            <Route
              path="/books/:id"
              exact
              render={({ match }) => {
                const { id } = match.params;
                return <BookPage itemId={id} />;
              }}
            />
            <Route path="/houses/" exact component={HousesPage} />
            <Route component={_404Page} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
