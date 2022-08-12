import './App.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
function App() {
  console.log('app');

  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: 'increase', payload: 5 });
  };
  const decrease = () => {
    dispatch({ type: 'decrease', payload: 5 });
  };
  const toggleCounter = () => {
    dispatch({ type: 'toggleCounter' });
  };
  return (
    <div>
      {globalState.showCounter && (
        <p>
          Counter: <span id="counter">{globalState.counter}</span>
        </p>
      )}
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={toggleCounter}>toggleCounter</button>
    </div>
  );
}

export default App;
