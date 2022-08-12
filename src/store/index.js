// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
const initState = { counter: 0, showCounter: false };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.counter += action.payload;
    },
    decrease: (state, action) => {
      state.counter -= action.payload;
    },
    toggleCounter: (state, action) => {
      state.showCounter = !state.showCounter;
    },
  },
});
// const counterReducer = (state = initState, action) => {
//   //logic
//   switch (action.type) {
//     case 'increase':
//       return { ...state, counter: state.counter + action.payload };
//     case 'decrease':
//       return { ...state, counter: state.counter - action.payload };
//     case 'toggleCounter':
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

const store = createStore(counterSlice.reducer);
export const counterActions = counterSlice.actions;
export default store;
