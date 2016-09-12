export const update = (field, value) =>
  ({ type: 'ARTICLES_UPDATE', field, value });

export const updateAdding = (field, value) =>
  ({ type: 'ARTICLES_UPDATE_ADDING', field, value });

export const updateRemoving = (field, value) =>
  ({ type: 'ARTICLES_UPDATE_REMOVING', field, value });
