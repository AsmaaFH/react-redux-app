import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { counterActions } from '../store';
const Counter = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { increase, decrease /*toggleCounter*/ } = counterActions;
  // const increase = () => {
  //   dispatch({ type: 'increase', payload: 5 });
  // };
  // const decrease = () => {
  //   dispatch({ type: 'decrease', payload: 5 });
  // };
  // const toggleCounter = () => {
  //   dispatch({ type: 'toggleCounter' });
  // };
  return (
    <>
      {/* {toggleCounter() && ( */}
      <p>
        Counter: <span id="counter">{globalState.counter}</span>
      </p>
      {/* )} */}
      <button onClick={() => dispatch(increase(5))}>increase</button>
      <button onClick={() => dispatch(decrease(5))}>Decrease</button>
      {/* <button onClick={toggleCounter}>toggleCounter</button> */}
    </>
  );
};

export default Counter;
