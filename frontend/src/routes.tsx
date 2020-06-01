import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Logon from './pages/Logon';

const Routes: React.FC = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Logon} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
