export const MODULE_KEY = 'index';
export const DUMMY_ACTION = `${MODULE_KEY}_dummy_action`;

export const onQuery = (queryStr, category_id) => ({
  type: DUMMY_ACTION,
  payload: {queryStr, category_id},
});
