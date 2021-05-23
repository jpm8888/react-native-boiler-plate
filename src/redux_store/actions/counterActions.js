export const MODULE_KEY = 'counter';
export const INCREMENT = `${MODULE_KEY}_increment`;
export const DECREMENT = `${MODULE_KEY}_decrement`;

export const DECREMENTED = `${MODULE_KEY}_decremented`;

export const increment = () => ({
  type: INCREMENT,
  payload: {},
});

export const decrement = () => ({
  type: DECREMENT,
  payload: {},
});

export const decremented = () => {
  console.log('decremented');
  return {
    type: DECREMENTED,
  };
};
