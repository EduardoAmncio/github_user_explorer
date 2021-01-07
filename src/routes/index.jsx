import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import UserInfoMap from '../pages/UserInfoMap';
// import Repository from '../pages/Repository';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/user" exact component={UserInfoMap} />
      {/* <Route path="/repository/:repository+" component={Repository} /> */}
    </Switch>
  );
};

export default Router;