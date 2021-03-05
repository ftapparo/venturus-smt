import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import CreateTeam from './pages/CreateTeam';

export default function PageRoutes() {
  return (
    <Switch>
      <Route exact path='/'  >
        <Dashboard />
      </Route>
      <Route path='/createteam'>
        <CreateTeam />
      </Route>
    </Switch>
  );
}