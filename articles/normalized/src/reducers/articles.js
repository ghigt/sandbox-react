import dot from 'dot-prop-immutable';

const initialState = {}

export default (state = initialState, action) => {
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
