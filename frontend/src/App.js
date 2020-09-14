import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme } from './theme';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Dashboard />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
