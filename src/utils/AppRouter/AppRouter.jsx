import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from 'src/views/Home';

export const AppRouter = () =>
  <Router>
    <Switch>
        <Route path="/">
          <Home />
        </Route>
    </Switch>
  </Router>;

export default AppRouter;