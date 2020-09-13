import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import VerticalLinearStepper from './components/vertical-stepper';
import { theme } from './theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
