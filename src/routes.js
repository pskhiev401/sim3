import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';

export default (
  <Switch>
    <Route exact path='/' component={Auth} />
    <Route path='/dashboard/:username' component={Dashboard} />
    <Route
      path='*'
      render={() => (
        <img
          src='https://cdn-images-1.medium.com/max/1600/1*qdFdhbR00beEaIKDI_WDCw.gif'
          alt='404 ERROR - PAGE NOT FOUND'
        />
      )}
    />
  </Switch>
);
