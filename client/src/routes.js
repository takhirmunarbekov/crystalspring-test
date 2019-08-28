import React, { Fragment, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Helmet from "react-helmet";

import Landing from "../src/containers/landing";

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  </Fragment>
);

export default Routes;
