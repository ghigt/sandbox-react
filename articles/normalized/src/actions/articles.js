export const update = (field, value) =>
  ({ type: 'ARTICLES_UPDATE', field, value });

export const updateByAdding = (field, value) =>
  ({ type: 'ARTICLES_UPDATE_ADDING', field, value });

export const updateByRemoving = (field, value) =>
  ({ type: 'ARTICLES_UPDATE_REMOVING', field, value });
