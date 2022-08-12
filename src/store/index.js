// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from '@reduxjs/toolkit';
const initState = { counter: 0, showCounter: false };

const counterReducer = (state = initState, action) => {
  //logic
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
    case 'toggleCounter':
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
