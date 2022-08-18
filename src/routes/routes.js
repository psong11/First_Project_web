
import PublicRoute from './PublicRoute'
// import PrivateRoute from './PrivateRoute'

import Home from '../containers/Home'

import { ROUTE_PATHS } from '../utils/constants'

/*
* This object's entries are a list of all routes in the app
* For each entry, include:
*  - the string path, from the constants.js file
*  - the route-type component (PublicRoute or PrivateRoute)
*  - the actual container component to render
*  - whether or not the path must be exact
*/

export const routes = {
  home: {
    path: ROUTE_PATHS.HOME,
    routeComponent: PublicRoute,
    component: Home,
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)
