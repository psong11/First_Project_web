import gql from 'graphql-tag'

// Modify this query as the backend api requires
export const VIEWER = gql`
  query Viewer {
    viewer {
      id
    }
  }
`
