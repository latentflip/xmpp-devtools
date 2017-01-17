import { createStore, combineReducers } from 'redux';

// lolol
export const [
  RAW_IN, RAW_OUT
] = `
  RAW_IN, RAW_OUT
`.trim().split(', ');

const raw = (state = [], action) => {
  switch (action.type) {
    case RAW_IN:
    case RAW_OUT:
      return [...state, action.payload];
    default:
      return state;
  }
};


export default createStore(combineReducers({
  raw
}));
