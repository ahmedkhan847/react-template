import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../config/routes";
import PrivateRoute from "./PrivateRoutes";

function Routes() {
  return (
    <Switch>
      {routes
        .filter((route) => !route.isPrivate)
        .map((route, index) => (
          <Route
            exact
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
      {routes
        .filter((route) => route.isPrivate)
        .map((route, index) => (
          <PrivateRoute
            exact
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
    </Switch>
  );
}

export default Routes;
