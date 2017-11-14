import {ApolloClient} from 'apollo-client' // x
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

import settings from '../config/settings.js'

const link = new HttpLink({
  uri: settings.server.uri,
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
})

export default client
