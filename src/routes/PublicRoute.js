import React from 'react'
import { Route } from 'react-router-dom'
import { useGlobalContext } from '../utils/globalContext'

const PublicRoute = ({ children, error, ...rest }) => {
  const { isSignedIn } = useGlobalContext()
  return (
    <Route {...rest}>
      {!isSignedIn ? (
        <>
          {children}
        </>
      ) : (
        <>
          {children}
        </>
      )}
    </Route>
  )
}

export default PublicRoute
