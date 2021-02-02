import React from 'react'
import { Switch, Route } from 'wouter'
import Home from '~pages/Home'

export const Routes = () => (
  <>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/knot">
        <Home />
      </Route>
      <Route path="/bomb">
        <Home />
      </Route>
    </Switch>
  </>
)
