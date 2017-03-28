import React from 'react';
import { Route, Switch } from 'react-router';

import Root from '../components/Root';
import Home from '../modules/Home';

export default (
  <div>
    <Route component={Root} />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);
