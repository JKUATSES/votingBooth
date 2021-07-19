import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import * as pages from "../pages";
import * as path from "./paths";
import {cheapCheckLogin} from "../helpers/LoginUtilities";

const RouteWrapper = () => {
        return (
        <>
            {
                (
                    <Router>
                        <Switch>
                            <Route exact path={path.LOGIN} render={(props) =>
                                <pages.LoginPage {...props} authenticated={false}/>
                            }/>
                            <PrivateRoute exact path={[path.HOME, path.DASHBOARD_DEFAULT, path.DASHBOARD]}
                                          component={pages.DashboardPage} />
                            <Route component={pages.NotFoundPage}/>
                        </Switch>
                    </Router>
                )
            }
        </>
    );
};

export default RouteWrapper;

// A wrapper for <Route> that redirects to the login
// screen if you're not authenticated.
function PrivateRoute({component: Component, ...rest}) {
    let loggedIn = cheapCheckLogin();

    return (
        <Route
            {...rest}
            render={(props) =>
                loggedIn ? (
                    <Component {...props}/>
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
