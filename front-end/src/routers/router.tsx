import React from 'react';
import { Switch, Route } from 'react-router-dom';
// imports components
import { RegisterTeacher } from '../pages/RegisterTeacher';
import { Home } from '../pages/Home';
// import { SignIn } from '../pages/SingIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register-teacher" exact component={RegisterTeacher} />
  </Switch>
);

export { Routes };
