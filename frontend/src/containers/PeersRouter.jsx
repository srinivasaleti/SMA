import * as React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { ROE } from './ROE';
import { DERatio } from './DERatio';
import { HOLDINGS } from './Holdings';
import { EPS } from './EPS';

export const PeersRouter = (props) => {

  return (
    <div>
      <Switch>
        <Route path="/peers/:id/roe">
          <ROE data={props.data} />
        </Route>
        <Route path="/peers/:id/de">
          <DERatio data={props.data} />
        </Route>
        <Route path="/peers/:id/eps">
          <EPS data={props.data} />
        </Route>
        <Route path="/peers/:id/holdings">
          <HOLDINGS data={props.data} />
        </Route>
      </Switch>
    </div>
  )
}
