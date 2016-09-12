import { combineReducers } from 'redux';

import articles from './articles';
import modules from './modules';

export default combineReducers({
  articles,
  modules
});
