import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

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

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
