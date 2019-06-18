import React from "react";
import styled from "styled-components";
import img404 from "./404.jpg";
import img403 from "./403.jpg";
import img408 from "./408.jpg";
import img410 from "./410.jpg";
import img500 from "./500.jpg";

const ErrorMessage = ({ err, status = 404 }) => {
  const Message = styled.p`
    color: crimson;
    text-align: center;
    margin: 0;
    padding: 0;
  `;
  const MyImage = styled.img`
    display: block;
    margin: 0 auto;
    width: 100%;
  `;

  let image = <MyImage src={img500} alt="error 500" />;
  switch (status) {
    case 403:
      image = <MyImage src={img403} alt="error 403" />;
      break;
    case 404:
      image = <MyImage src={img404} alt="error 404" />;
      break;
    case 408:
      image = <MyImage src={img408} alt="error 408" />;
      break;
    case 410:
      image = <MyImage src={img410} alt="error 410" />;
      break;
    default:
  }

  return (
    <>
      {image}
      <Message>{`${err}`}</Message>
    </>
  );
};

export default ErrorMessage;
