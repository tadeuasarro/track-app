import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/home/Home';
import Measures from './containers/measures/Measures';
import Progress from './containers/progress/Progress';
import More from './containers/more/More';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/measures" component={Measures} />
      <Route path="/progress" component={Progress} />
      <Route path="/more" component={More} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
