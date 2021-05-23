import React from 'react';
import { Switch, Route } from 'react-router-dom';
// imports components
import { Dashboard } from '../pages/Dashboard';
import { ProfileTeacher } from '../pages/ProfileTeacher';
import { RegisterTeacher } from '../pages/RegisterTeacher';
// import { SignIn } from '../pages/SingIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/register-teacher" exact component={RegisterTeacher} />
    <Route path="/profile-teacher" exact component={ProfileTeacher} />
  </Switch>
);

export { Routes };
