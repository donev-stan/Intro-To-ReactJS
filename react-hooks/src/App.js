import './App.css';
import HooksMenu from './HooksMenu';
import { Switch, Route } from 'react-router-dom';
import UseStateHook from './hooks/UseStateHook';
import UseEffectHook from './hooks/UseEffectHook';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'> <HooksMenu/> </Route>
      </Switch>

      <Switch>
        <Route path='/useStateHook'> <UseStateHook/> </Route>
      </Switch>

      <Switch>
        <Route path='/useEffectHook'> <UseEffectHook/> </Route>
      </Switch>

    </div>
  );
}

export default App;
