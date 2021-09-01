import React from 'react'
import * as I from './types'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../views/Home/Home'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        {routes.map((route, index) => (
          <Route
            exact
            path={route.path}
            component={route.component}
            key={index}
          />
        ))}

      </Switch>
    </BrowserRouter>
  )
}

const routes: I.RoutesType[] = [
  {
    path: '/',
    component: Home
  }
]
