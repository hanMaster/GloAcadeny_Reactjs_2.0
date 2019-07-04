import React from 'react';
import DbServiceContext from '../dbServiceContext/dbServiceContext';

const WithDbService = () => Wrapped => {
  return props => {
    return (
      <DbServiceContext.Consumer>
        {DbService => {
          return <Wrapped {...props} dbService={DbService} />;
        }}
      </DbServiceContext.Consumer>
    );
  };
};

export default WithDbService;
