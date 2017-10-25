import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './config/redux.js'

import App from './containers/App.js'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
