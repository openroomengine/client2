import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers/'
import {watchAddressBar} from './history.js'
import pathMiddleware from './middleware/path.js'

const middleware = applyMiddleware(
  pathMiddleware,
)

const store = createStore(
  reducers,
  composeWithDevTools(
    middleware,
  )
)

// watchAddressBar(store)

export default store
