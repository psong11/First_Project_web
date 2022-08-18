import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { renderRoutes } from './routes'
import { ROUTE_PATHS } from '../utils/constants'

// Maps over the routes contained in the routes.js file and
// creates a react-router-dom <Route> component for each
const AppRouter = () => (
  <Switch>
    {renderRoutes.map(([key, value]) => (
      <Route
        key={key}
        path={value.path}
        exact={value.exact}
        render={props => (
          <value.routeComponent>
            <value.component {...props} />
          </value.routeComponent>
        )}
      />
    ))}
    <Route path="*">
      <Redirect to={ROUTE_PATHS.HOME} />
    </Route>
  </Switch>
)

export default AppRouter
