import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './App';
import './index.css';

const initialStore = {
  article: {
    id: 'dc8b4faa',
    title: 'Zizou a encore marqué',
    subtitle: 'Il est vraiment trop fort',
    modules: [
      {
        id: 'e786405a',
        name: 'Photo de zizou',
      },
      {
        id: 'd9b11e13',
        name: 'Vidéo du but',
      },
    ],
  },
};

ReactDOM.render(
  <Provider store={createStore(reducers, initialStore)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
