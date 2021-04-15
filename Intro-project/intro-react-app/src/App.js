import './App.css';
import Documentation from './Documentation';
import Counter from './Counter';

function App() {
  const headerText = 'Hello React!';

  return (
    <div className="App">
      <header className="App-header">
          <h2>Counter Application :)</h2>
          <Counter/>
      </header>
    </div>
  );
}

export default App;
