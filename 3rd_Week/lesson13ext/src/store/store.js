import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  taskList: [
    { id: 1, text: 'test1', completed: false },
    { id: 2, text: 'test2', completed: true },
    { id: 3, text: 'test3', completed: false }
  ],
  filter: 'all'
};

const store = createStore(reducer, initialState);

export default store;
