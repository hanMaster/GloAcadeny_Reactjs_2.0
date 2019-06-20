import React from 'react';
import { Container } from 'reactstrap';
import Header from '../header';
import Page from './../pages/page/page';
import ShowRandChar from '../showRandChar/showRandChar';

const App = () => {
  return (
    <Container>
      <Header />
      <ShowRandChar />
      <Page func={'getAllBooks'} type={'book'} />
      <Page func={'getAllHouses'} type={'house'} />
      <Page func={'getAllCharacters'} type={'character'} />
    </Container>
  );
};

export default App;
