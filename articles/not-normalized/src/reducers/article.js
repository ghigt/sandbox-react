const module = (state = {}, action) => {
  switch (action.type) {
    case 'MODULE_UPDATE':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const modules = (state = [], action) => {
  switch (action.type) {
    case 'MODULES_ADD':
      return [ ...state, action.module ];
    case 'MODULES_REMOVE':
      return state.filter(({ id }) => id !== action.moduleId);
    case 'MODULE_UPDATE':
      return state.map((m) => m.id === action.moduleId ? module(m, action) : m);
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case 'ARTICLE_UPDATE':
      return { ...state, [action.field]: action.value };
    case 'MODULES_ADD':
      return { ...state, modules: modules(state.modules, action) };
    case 'MODULES_REMOVE':
      return { ...state, modules: modules(state.modules, action) };
    case 'MODULE_UPDATE':
      return { ...state, modules: modules(state.modules, action) };
    default:
      return state;
  }
};
