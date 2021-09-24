
import Index from 'pages';
import BorderCollieInfoPage from 'pages/border-collie';
import RhodesianInfoPage from 'pages/rhodesian';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';
import 'styles/App.css';


function App() {
  return (
    <div classNameName="App">
      <Router>
        <Switch>
          <Route path= '/aboutR'>
            <RhodesianInfoPage/>
          </Route>
          <Route path= '/aboutB'>
            <BorderCollieInfoPage/>
          </Route>
          <Route path= '/'>
            <Index/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
