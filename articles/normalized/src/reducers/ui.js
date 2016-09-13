import { combineReducers } from 'redux';

const initialState = {
  pickTag: {
    ids: [],
    page: 1,
    pageCount: 10,
    totalCount: 0,
    filters: {},
  },
};

const pickTag = (state = initialState.pickTag, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({ pickTag });
