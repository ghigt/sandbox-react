import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './App';
import './index.css';

const initialStore = {
  articles: {
    'dc8b4faa': {
      id: 'dc8b4faa',
      title: 'Fifa : Platini lâche Blatter',
      subtitle: 'Il est vraiment trop fort',
      moduleIds: ['e786405a', 'd9b11e13'],
      tagIds: ['f906405b', 'p344s72']
    },
  },
  modules: {
    'e786405a': {
      id: 'e786405a',
      name: 'Photo de Platini',
    },
    'd9b11e13': {
      id: 'd9b11e13',
      name: 'Vidéo du but',
    },
  },
  tags: {
    'f906405b': {
      id: 'f906405b',
      name: 'tennis',
    },
    'p344s72': {
      id: 'p344s72',
      name: 'football',
    },
    'g792d90': {
      id: 'g792d90',
      name: 'handbal',
    },
  },
  ui: {
    // articleIds: ['dc8b4faa'],
    pickTag: {
      ids: ['p344s72', 'g792d90'],
      page: 1,
      pageCount: 10,
      totalCount: 0,
      filters: {},
    },
  },
};

ReactDOM.render(
  <Provider store={createStore(reducers, initialStore)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
