//import logo from './logo.svg';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Index from 'pages/index';
import Prueba from 'pages/404';
import Login from 'pages/login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/404'>
            <Prueba />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
