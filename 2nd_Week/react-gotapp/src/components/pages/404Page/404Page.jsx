import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const _404Page = () => {
  return (
    <Wrapper>
      <h1>Page not found 404</h1>
      <Link to="/" className="btn btn-info mt-3">
        Back to main page
      </Link>
    </Wrapper>
  );
};

export default _404Page;
