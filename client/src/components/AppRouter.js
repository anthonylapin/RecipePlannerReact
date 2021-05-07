import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { recipeRoute } from "../constants";
import { routes } from "../routes";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
      <Redirect to={recipeRoute} />
    </Switch>
  );
};

export default AppRouter;
