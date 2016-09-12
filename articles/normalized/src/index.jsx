import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './App';
import './index.css';

const initialStore = {
  articles: {
    ids: ['dc8b4faa'],
    items: {
      'dc8b4faa': {
        id: 'dc8b4faa',
        title: 'Zizou a encore marqué',
        subtitle: 'Il est vraiment trop fort',
        moduleIds: ['e786405a', 'd9b11e13'],
        tagIds: ['f906405b', 'p344s72']
      },
    },
  },
  modules: {
    ids: ['e786405a', 'd9b11e13'],
    items: {
      'e786405a': {
        id: 'e786405a',
        name: 'Photo de zizou',
      },
      'd9b11e13': {
        id: 'd9b11e13',
        name: 'Vidéo du but',
      },
    },
  },
  tags: {
    ids: ['f906405b', 'p344s72'],
    items: {
      'f906405b': {
        id: 'f906405b',
        name: 'tennis',
      },
      'p344s72': {
        id: 'p344s72',
        name: 'football',
      },
    },
  },
};

ReactDOM.render(
  <Provider store={createStore(reducers, initialStore)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
