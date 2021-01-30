import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '~pages/Home'

export const Routes = () => (
  <Router>
    <Switch>
      <Route>
        <Home />
      </Route>
    </Switch>
  </Router>
)
