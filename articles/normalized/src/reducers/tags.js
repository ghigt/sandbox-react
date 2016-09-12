import { combineReducers } from 'redux'

const tag = (state = {}, action) => {
  switch (action.type) {
    case 'TAG_UPDATE':
      return { ...state, [action.field]: action.value };
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
    case 'TAGS_ADD':
      return [ ...state, action.tag.id ];
    default:
      return state;
  }
};

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case 'TAG_UPDATE':
      return { ...state, [action.id]: tag(state[action.id], action)}
    case 'TAGS_ADD':
      return { ...state, [action.tag.id]: action.tag };
    default:
      return state;
  }
}

export default combineReducers({ ids, items });
