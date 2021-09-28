//import logo from './logo.svg';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Index from 'pages/index';
import Error404 from 'pages/404';
import Registration from 'pages/registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/404'>
            <Error404 />
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
