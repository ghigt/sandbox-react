import { combineReducers } from 'redux';

import articles from './articles';
import modules from './modules';
import tags from './tags';

export default combineReducers({
  articles,
  modules,
  tags,
});
