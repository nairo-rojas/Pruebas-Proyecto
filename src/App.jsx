
import Index from 'pages';
import BorderCollieInfoPage from 'pages/border-collie';
import RhodesianInfoPage from 'pages/rhodesian';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';
import 'styles/App.css';
import Layout from 'layouts/layout';

function App() {
  return (
    <div classNameName="App">
      <Router>
          <Layout>
        <Switch>
          <Route path= '/Rhodesian'>
            <RhodesianInfoPage/>
          </Route>
          <Route path= '/Border'>
            <BorderCollieInfoPage/>
          </Route>
          <Route path= '/'>
            <Index/>
          </Route>
        </Switch>
          </Layout>
      </Router>
    </div>
  );
}

export default App;
