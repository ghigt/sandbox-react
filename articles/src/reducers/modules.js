import { combineReducers } from 'redux'

const module = (state = {}, action) => {
  switch (action.type) {
    case 'MODULE_UPDATE':
      return { ...state, [action.field]: action.module };
    default:
      return state;
  }
}

const initialState = {
  ids: [],
  items: {},
}

const ids = (state = initialState.ids, action) => {
  switch (action.type) {
    case 'MODULES_ADD':
      return [ ...state, action.module.id ];
    default:
      return state;
  }
};

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case 'MODULE_UPDATE':
      return { ...state, [action.id]: module(state[action.id], action)}
    case 'MODULES_ADD':
      return { ...state, [action.module.id]: action.module };
    default:
      return state;
  }
}

export default combineReducers({ ids, items });
