import React from 'react';

const Spinner = () => {
  const SpinnerStyle = {
    color: '#000'
  };
  return (
    <div className="spinner" style={SpinnerStyle}>
      loading...
    </div>
  );
};

export default Spinner;
