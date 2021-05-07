import './App.css';
import {Switch, Route} from 'react-router';
import Layout from './components/layout/Layout';
import Login from './components/auth/login/Login';
import { AuthenticatedRoute } from './utils/guards/AuthenticatedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' component={Login} />
        <AuthenticatedRoute exact path='/' component={Layout} />
      </Switch>
    </div> 
  );
}

export default App;