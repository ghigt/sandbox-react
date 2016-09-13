import dot from 'dot-prop-immutable';

const initialState = {};

export default (state = initialState, action) => {
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
};
