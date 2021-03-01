import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
