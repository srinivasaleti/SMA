import { AppBar, Tabs, ThemeProvider, Tab } from '@material-ui/core';
import React from 'react';
import { theme } from './theme';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import PeersDashboard from './containers/PeersDashboard';
import CompanyDashboard from './containers/CompanyDashboard';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/peers">
              <PeersDashboard />
            </Route>
            <Route path="/company">
              <CompanyDashboard />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div >
  );
}

export default App;
