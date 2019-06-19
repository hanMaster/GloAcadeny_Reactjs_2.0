import React from "react";
import spin from "./Flickr200px.svg";
import styled from "styled-components";

const Image = styled.img`
  display: flex;
  margin: 0 auto;
`;

const Spinner = () => {
  return <Image src={spin} alt="Loading" />;
};

export default Spinner;
