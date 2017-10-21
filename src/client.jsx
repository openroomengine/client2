import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './config/redux.js'

import Link from './containers/Link.js'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/rooms">rooms</Link>
      <Link to="/rooms/room1">room 1</Link>
    </div>
  </Provider>,
  document.getElementById('app')
)
