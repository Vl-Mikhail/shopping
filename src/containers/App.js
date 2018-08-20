import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import SingUp from './SignUp';
import Search from './Search';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/singup" component={SingUp} />
          <Route exact path="/search" component={Search} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>
  );
};
export default App;