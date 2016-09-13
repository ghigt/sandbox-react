
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TAGS_ADD':
      return { ...state, [action.tag.id]: action.tag };
    default:
      return state;
  }
}
