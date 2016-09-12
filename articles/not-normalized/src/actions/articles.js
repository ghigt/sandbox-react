import { v4 as uuid } from 'uuid';

const ARTICLE_UPDATE = 'ARTICLE_UPDATE';

export const update = (id, field, value) =>
  ({ type: ARTICLE_UPDATE, id, field, value });

/* MODULES */

const MODULES_ADD = 'MODULES_ADD';
const MODULES_REMOVE = 'MODULES_REMOVE';
const MODULE_UPDATE = 'MODULE_UPDATE';

export const addModule = (module) =>
  ({ type: MODULES_ADD, module: { ...module, id: uuid().split('-')[0] } });

export const removeModule = (moduleId) =>
  ({ type: MODULES_REMOVE, moduleId });

export const updateModule = (moduleId, field, value) =>
  ({ type: MODULE_UPDATE, moduleId, field, value });
