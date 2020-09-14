import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme } from './theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import VerticalLinearStepper from './containers/vertical-stepper';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/sma/:id">
              <VerticalLinearStepper />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
