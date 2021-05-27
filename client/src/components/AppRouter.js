import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { recipeRoute } from "../constants";
import { routes } from "../routes";

const AppRouter = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route
          exact
          key={path}
          path={path}
          component={isLoading ? Loading : component}
        />
      ))}
      <Redirect to={recipeRoute} />
    </Switch>
  );
};

export default AppRouter;
