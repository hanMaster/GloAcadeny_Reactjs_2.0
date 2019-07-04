import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import './index.css';
import App from './components/app/App';
import ErrorBoundry from './components/error-boundry/errorBoundry';
import DbService from './services';
import DbServiceContext from './components/dbServiceContext/dbServiceContext';

const dbService = new DbService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <DbServiceContext.Provider value={dbService}>
        <Router>
          <App />
        </Router>
      </DbServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,

  document.getElementById('root')
);
