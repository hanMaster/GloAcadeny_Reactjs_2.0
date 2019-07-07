import React from 'react';
import { Link } from 'react-router-dom';
import background from './img/contactUsBg.jpg';
import './page404.scss';

const Page_404 = () => {
  return (
    <div
      className="banner404"
      style={{
        background: `url(${background}) center center/cover no-repeat`
      }}
    >
      <h2 className="page404">
        Page not found, please try to start from <Link to="/">Homepage</Link>
      </h2>
    </div>
  );
};

export default Page_404;
