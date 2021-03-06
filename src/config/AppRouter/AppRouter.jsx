import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import BasicLayout from 'components/layouts/BasicLayout';
import Dashboard from 'views/chat/Dashboard';
import LoginForm from 'views/auth/LoginForm';
import RegisterForm from 'views/auth/RegisterForm';
import AboutUs from 'views/misc/AboutUs';
import Donate from 'views/misc/Donate';

export const AppRouter = ({ userLoggedOut }) =>
  <Router>
    <Switch>
        <Route exact path="/">
          <BasicLayout>
            <Dashboard />
          </BasicLayout>
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/dship">
          <BasicLayout>

          </BasicLayout>
        </Route>
        <Route exact path="/calendar">
          <BasicLayout>

          </BasicLayout>
        </Route>
        <Route exact path="/about-us">
          <BasicLayout constrainedWidth>
            <AboutUs />
          </BasicLayout>
        </Route>
        <Route exact path="/donate">
          <BasicLayout constrainedWidth>
            <Donate />
          </BasicLayout>
        </Route>
    </Switch>
  </Router>;

export default AppRouter;
