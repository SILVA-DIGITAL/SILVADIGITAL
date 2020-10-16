import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from '~components/Header'
import Home from '~pages/home'

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
