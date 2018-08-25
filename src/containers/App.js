import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Loadable from "react-loadable";
import { fakeAuth } from "../common/api";

const Loading = () => <div>Loading...</div>;

const Login = Loadable({
  loader: () => import("./Login"),
  loading: Loading
});

const SingUp = Loadable({
  loader: () => import("./SignUp"),
  loading: Loading
});

const Search = Loadable({
  loader: () => import("./Search"),
  loading: Loading
});

const NoMatch = Loadable({
  loader: () => import("../components/NoMatch"),
  loading: Loading
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/singup" component={SingUp} />
        <PrivateRoute path="/search/:user" component={Search} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
export default App;
