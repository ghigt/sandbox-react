import { combineReducers } from 'redux'

const modules = (state = [], action) => {
  switch (action.type) {
    case 'MODULES_ADD':
      return [ ...state, action.module.id ];
    case 'MODULES_REMOVE':
      return state.filter(( id ) => id !== action.moduleId);
    default:
      return state;
  }
}

const article = (state = {}, action) => {
  switch (action.type) {
    case 'ARTICLE_UPDATE':
      return { ...state, [action.field]: action.value };
    case 'MODULES_ADD':
      return { ...state, moduleIds: modules(state.moduleIds, action) }
    case 'MODULES_REMOVE':
      return { ...state, moduleIds: modules(state.moduleIds, action) }
    default:
      return state;
  }
};

const initialState = {
  ids: [],
  items: {},
}

const ids = (state = initialState.ids, action) => {
  switch (action.type) {
    case 'ARTICLES_ADD':
      return [ ...state, action.article.id ];
    default:
      return state;
  }
};

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case 'ARTICLE_UPDATE':
      return { ...state, [action.id]: article(state[action.id], action)}
    case 'ARTICLES_ADD':
      return { ...state, [action.article.id]: action.article };
    case 'MODULES_ADD':
      return { ...state, [action.articleId]: article(state[action.articleId], action)}
    case 'MODULES_REMOVE':
      return { ...state, [action.articleId]: article(state[action.articleId], action)}
    default:
      return state;
  }
}

export default combineReducers({ items, ids });
