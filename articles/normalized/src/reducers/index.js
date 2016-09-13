import { combineReducers } from 'redux';

import articles from './articles';
import modules from './modules';
import tags from './tags';
import ui from './ui';

export default combineReducers({
  articles,
  modules,
  tags,
  ui,
});
