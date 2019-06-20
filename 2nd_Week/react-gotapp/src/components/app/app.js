import React from "react";
import { Container } from "reactstrap";
import Header from "../header";
import Page from "./../pages/page/page";
import ShowRandChar from "../showRandChar/showRandChar";

const App = () => {
  return (
    <Container>
      <Header />
      <ShowRandChar />
      <Page func={"getAllBooks"} />
      <Page func={"getAllHouses"} />
      <Page func={"getAllCharacters"} />
    </Container>
  );
};

export default App;
