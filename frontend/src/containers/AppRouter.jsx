import * as React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { ROE } from './ROE';
import { DERatio } from './DERatio';
import { HOLDINGS } from './Holdings';

export const AppRouter = (props) => {

  return (
    <div>
      <Switch>
        <Route path="/sma/:id/roe">
          <ROE data={props.data} />
        </Route>
        <Route path="/sma/:id/de">
          <DERatio data={props.data} />
        </Route>
        <Route path="/sma/:id/holdings">
          <HOLDINGS data={props.data} />
        </Route>
      </Switch>
    </div>
  )
}
