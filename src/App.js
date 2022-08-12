import './App.css';
import Counter from './components/Counter';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  console.log('app');

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
