import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

import settings from '../config/settings.js'

const link = new HttpLink({
  uri: settings.server.uri,
  credentials: 'include',
})

const cache = new InMemoryCache()

const defaultOptions = {
  query: {
    errorPolicy: 'all',
  },
  mutation: {
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
})

export default client
