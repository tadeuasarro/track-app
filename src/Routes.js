import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
