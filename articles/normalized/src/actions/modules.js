export const update = (field, value) =>
  ({ type: 'MODULES_UPDATE', field, value });

export const add = (value) =>
  ({ type: 'MODULES_ADD', value });

export const remove = (id) =>
  ({ type: 'MODULES_REMOVE', id });
