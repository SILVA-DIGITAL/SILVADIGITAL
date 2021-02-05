import React from 'react'
import { Switch, Route } from 'wouter'
import { TalksProvider } from '~contexts/talksContext'
import Home from '~pages/Home'
import Talks from '~pages/Talks'

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
    <Route path="/talks">
      <TalksProvider>
        <Talks />
      </TalksProvider>
    </Route>
  </>
)
