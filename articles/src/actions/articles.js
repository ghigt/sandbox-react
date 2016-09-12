import { v4 as uuid } from 'uuid';

const ARTICLE_UPDATE = 'ARTICLE_UPDATE';

export const update = (id, field, value) =>
  ({ type: ARTICLE_UPDATE, id, field, value });

/* MODULES */

const MODULES_ADD = 'MODULES_ADD';
const MODULES_REMOVE = 'MODULES_REMOVE';

export const addModule = (articleId, module) =>
  ({ type: MODULES_ADD, articleId, module: { ...module, id: uuid().split('-')[0] } });

export const removeModule = (articleId, moduleId) =>
  ({ type: MODULES_REMOVE, articleId, moduleId });
