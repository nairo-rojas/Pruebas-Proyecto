//import logo from './logo.svg';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/index';
import Login from 'pages/login';
import Registration from 'pages/registration';
import Admin from 'pages/admin/Index';
import Productos from 'pages/admin/Productos';
import Usuarios from 'pages/admin/Usuarios';
import Ventas from 'pages/admin/Ventas';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={['/admin/', '/admin/Productos', '/admin/Usuarios', '/admin/Ventas']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/Productos'>
                  <Productos />
                </Route>
                <Route path='/admin/Usuarios'>
                  <Usuarios />
                </Route>
                <Route path='/admin/Ventas'>
                  <Ventas />
                </Route>
                <Route path='/admin'>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login', '/resgistration']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/registration'>
                  <Registration />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>
              <Switch>
              <Route path='/'>
                  <Index />
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
