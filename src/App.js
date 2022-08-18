import React, { useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { persistCache } from 'apollo-cache-persist'

import theme from './theme'
import client, { cache } from './client'
import history from './history'

import GlobalContext from './utils/globalContext'
import AppRouter from './routes/AppRouter'


const App = () => {
  const [apolloClient, setApolloClient] = useState(undefined)

  // Restore cache on App's first render
  useEffect(() => {
    persistCache({
      cache,
      storage: window.localStorage,
    }).then(() => {
      setApolloClient(client)
    })
    return () => {}
  }, [])

  // Cache is still loading, return a loading indicator of some sort
  if (apolloClient === undefined) return null

  // Once cache has been restored, render rest of App
  return (
    <Router history={history}>
      <GlobalContext>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <AppRouter />
          </ApolloProvider>
        </ThemeProvider>
      </GlobalContext>
    </Router>
  )
}
export default App
