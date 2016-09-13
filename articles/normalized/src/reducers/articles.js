import dot from 'dot-prop-immutable';
import { combineReducers } from 'redux';

const initialState = {
  ids: [],
  items: {},
}

const ids = (state = initialState.ids, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case 'ARTICLES_UPDATE':
      return dot.set(state, action.field, action.value);
    case 'ARTICLES_UPDATE_ADDING':
      return dot.set(state, `${action.field}`, list => [ ...list, action.value ]);
    case 'ARTICLES_UPDATE_REMOVING':
      return dot.set(state, `${action.field}`, list => list.filter(value => value !== action.value))
    default:
      return state;
  }
}

export default combineReducers({ items, ids });
