import React from 'react';

const Spinner = () => {
  const SpinnerStyle = {
    color: 'crimson'
  };
  return (
    <div className="spinner" style={SpinnerStyle}>
      loading...
    </div>
  );
};

export default Spinner;
