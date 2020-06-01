import React from "react";
import { Route, Switch } from "react-router-dom";

import FeedRoute from "./FeedRoute";
import UsersRoute from "./UsersRoute";
import ProfileRoute from "./ProfileRoute";
import NewUserRoute from "./NewUserRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={FeedRoute}></Route>
    <Route exact path="/users" component={UsersRoute}></Route>
    <Route path="/users/:username" component={ProfileRoute}></Route>
    <Route path="/newuser" component={NewUserRoute}></Route>
  </Switch>
);

export default Routes;
