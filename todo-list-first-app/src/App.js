import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Todo from './Todo';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos/>} />
          <Route path="/todo/:id" children={<Todo/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
