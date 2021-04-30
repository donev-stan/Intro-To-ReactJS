import './App.css';
import Counter from './Counter';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector(state => state.counter.count);

  const voters = ['Stanislav Donev', 'Viktor Metodiev', 'Dobry Dobrev', 'Anthony Sam'];

  return (
    <div className="App">
      <h1>Redux Intro</h1>
      <h2>Total Votes: {count}</h2>
      { voters.map(voter => <Counter name={voter} />)}
    </div>
  );
}

export default App;
