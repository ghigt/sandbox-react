const MODULE_UPDATE = 'MODULE_UPDATE';

export const update = (id, field, value) =>
  ({ type: MODULE_UPDATE, id, field, value });
