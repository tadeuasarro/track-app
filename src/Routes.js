import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Measures from './components/measures/Measures';
import Progress from './components/progress/Progress';
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
