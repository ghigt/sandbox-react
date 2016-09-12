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
      const length = dot.get(state, action.field).length;
      return dot.set(state, `${action.field}.${length}`, action.value);
    case 'ARTICLES_UPDATE_REMOVING':
      const idx = dot.get(state, action.field)
        .findIndex((value) => value === action.value);
      return dot.delete(state, `${action.field}.${idx}`);
    default:
      return state;
  }
}

export default combineReducers({ items, ids });
