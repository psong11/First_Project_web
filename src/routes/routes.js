
import PublicRoute from './PublicRoute'
// import PrivateRoute from './PrivateRoute'

import Home from '../containers/Home'
import AboutMe from '../containers/AboutMe'
import Contact from '../containers/Contact'
import Music from '../containers/Music'
import Photos from '../containers/Photos'
import Quotes from '../containers/Quotes'

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
  aboutme: {
    path: ROUTE_PATHS.ABOUTME,
    routeComponent: PublicRoute,
    component: AboutMe,
    exact: true,
  },
  contact: {
    path: ROUTE_PATHS.CONTACT,
    routeComponent: PublicRoute,
    component: Contact,
    exact: true,
  },
  music: {
    path: ROUTE_PATHS.MUSIC,
    routeComponent: PublicRoute,
    component: Music,
    exact: true,
  },
  photos: {
    path: ROUTE_PATHS.PHOTOS,
    routeComponent: PublicRoute,
    component: Photos,
    exact: true,
  },
  quotes: {
    path: ROUTE_PATHS.QUOTES,
    routeComponent: PublicRoute,
    component: Quotes,
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)
