import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LandingPage } from './components/LandingPage';
import { Events } from './components/Events';

export const App: React.FunctionComponent = () => {
  return (
    
      <Router>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/events' component={Events} />
        </Switch>
      </Router>
    
  );
};
