import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index';

const store = createStore(reducer);

export default store;

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
