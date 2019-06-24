import { createStore } from 'redux';
import DbService from './services/db-service';

const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RST':
      return 0;
    case 'DNL':
      return payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rst = () => ({ type: 'RST' });
const download = payload => ({ type: 'DNL', payload });

document.getElementById('plus').addEventListener('click', () => {
  store.dispatch(inc());
});
document.getElementById('minus').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('reset').addEventListener('click', () => {
  store.dispatch(rst());
});

let alert = document.getElementById('alert');
const clearError = () => {
  alert.textContent = '';
};
const db = new DbService();

document.getElementById('download').addEventListener('click', () => {
  db.getData()
    .then(data => {
      const index = Math.floor(Math.random() * 3);
      const counter = data[index].const;
      store.dispatch(download(counter));
    })
    .catch(() => {
      alert.textContent = db.errMessage;
      window.setTimeout(clearError, 2000);
      store.dispatch(download(0));
    });
});

document.getElementById('upload').addEventListener('click', () => {
  const saved = store.getState().toString();
  db.setData({ saved })
    .then(data => console.log(data)) // JSON-строка полученная после вызова `response.json()`
    .catch(() => {
      alert.textContent = db.errMessage;
      window.setTimeout(clearError, 2000);
      store.dispatch(download(0));
    });
});

const counter = document.getElementById('counter');
const update = () => {
  counter.textContent = store.getState();
};
store.subscribe(update);
