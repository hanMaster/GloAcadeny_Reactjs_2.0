import React from 'react';
import './thanks.sass';
import cup from './img/cupWithBread.svg';
import backArrow from './img/backArrow.svg';

const Thanks = ({ anotherMessage }) => {
  return (
    <>
      <div className="title-big">
        Thank you so much
        <br />
        We contact you as soon as possible
      </div>
      <img src={cup} alt="Cup of coffee" className="image" />
      <button className="btn-another" onClick={anotherMessage}>
        Another?
        <img
          src={backArrow}
          style={{ width: '15', marginLeft: '5px' }}
          alt="Another"
        />
      </button>
    </>
  );
};
export default Thanks;
