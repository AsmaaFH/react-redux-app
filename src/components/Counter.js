import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { logIn, logout } from '../store/authSlice';
import { increase, decrease } from '../store/counterSlice';
// import { logIn, logout } from '../store/authSlice';
const Counter = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const isLoggedIn = () => {
    return globalState.auth.isLoggin;
  };
  const handleLogIn = () => {
    dispatch(isLoggedIn() ? logout() : logIn());
  };
  return (
    <>
      {isLoggedIn() && (
        <>
          <p>
            Counter: <span id="counter">{globalState.counter.counter}</span>
          </p>

          <button onClick={() => dispatch(increase(5))}>increase</button>
          <button onClick={() => dispatch(decrease(5))}>Decrease</button>
        </>
      )}

      <button onClick={handleLogIn}>{globalState.auth.isLoggin ? 'logout' : 'login'}</button>
    </>
  );
};

export default Counter;
