const MODULE_UPDATE = 'MODULE_UPDATE';

export const update = (id, field, module) =>
  ({ type: MODULE_UPDATE, id, field, module });
