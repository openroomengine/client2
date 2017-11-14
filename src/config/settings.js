const settings = {
  dev: process.env.NODE_ENV !== 'production',
  server: {
    protocol: 'http',
    host: 'localhost',
    port: 8080,
    graphql: '/graphql',
  },
}

const {protocol, host, port, graphql} = settings.server
settings.server.uri = `${protocol}://${host}:${port}${graphql}`

// file loaded by webpack = commonjs exports
module.exports = settings
