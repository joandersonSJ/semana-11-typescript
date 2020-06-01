import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

const Routes: React.FC = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Logon} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
