import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import * as pages from "../pages";

import * as path from "./paths";
import {useDispatch} from "react-redux";
import {checkLogin} from "../helpers/CheckLogin";

const RouteWrapper = () => {
  return (
      <Router>
        <Switch>
          <Route path={path.LOGIN} component={pages.LoginPage}/>
          <PrivateRoute exact path={path.HOME} component={pages.DashboardPage}/>

          <Route component={pages.NotFoundPage}/>
        </Switch>
      </Router>
  );
};

export default RouteWrapper;

// A wrapper for <Route> that redirects to the login
// screen if you're not authenticated.
function PrivateRoute({component: Component, ...rest}) {
  const dispatch = useDispatch();

  let loggedIn = checkLogin(dispatch);

  return (
      <Route
          {...rest}
          render={(props) =>
              loggedIn ? (
                  <Component {...props} />
              ) : (
                  <Redirect
                      to={{
                        pathname: "/login",
                        state: {from: props.location},
                      }}
                  />
              )
          }
      />
  );
}
