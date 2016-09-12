import dot from 'dot-prop-immutable';
import { combineReducers } from 'redux'

const initialState = {
  ids: [],
  items: {},
}

const ids = (state = initialState.ids, action) => {
  switch (action.type) {
    case 'MODULES_ADD':
      return [ ...state, action.value.id ];
    case 'MODULES_REMOVE':
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case 'MODULES_UPDATE':
      return dot.set(state, action.field, action.value);
    case 'MODULES_ADD':
      return { ...state, [action.value.id]: action.value };
    case 'MODULES_REMOVE':
      return dot.delete(state, action.id);
    default:
      return state;
  }
}

export default combineReducers({ ids, items });
