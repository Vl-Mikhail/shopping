import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login';
import SingUp from './SignUp';
import Search from './Search';
import { fakeAuth } from "../common/api";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      fakeAuth.isAuthenticated ? (
        <Component { ...props } />
      ) : (
        <Redirect
          to={ {
            pathname: "/",
            state: { from: props.location }
          } }
        />
      )
    }
  />
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Login }/>
          <Route exact path="/singup" component={ SingUp }/>
          <PrivateRoute path="/search" component={ Search }/>
        </Switch>
      </div>
    </Router>
  );
};
export default App;