import React, { useReducer, createContext } from 'react'
import { Switch, Route } from 'wouter'
import Home from '~pages/Home'
import Talks from '~pages/Talks'
import { TalksProvider } from '~contexts/talksContext'

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
