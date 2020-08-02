import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../config/routes";

function Routes() {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route exact key={index} path={route.path}>
                    {route.component}
                </Route>
            ))}
        </Switch>
    );
}

export default Routes;
