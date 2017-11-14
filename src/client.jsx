import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ApolloProvider} from 'react-apollo'

import store from './config/redux.js'
import client from './config/apollo.js'

import App from './containers/App.js'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
)

// fetch('http://localhost:8080/graphql', {
//   method: 'POST',
//   headers: new Headers({
//     'Content-Type': 'application/json',
//   }),
//   credentials: 'include',
//   body: JSON.stringify(
//     {
//       'query': `mutation {
//         createSession(username: "Bruno", password: "Derp") {
//           username
//         }
//       }`,
//       'variables': null,
//       'operationName': null,
//     }
//   ),
// }).then(() => {
//   console.log(document.cookie)
// })
