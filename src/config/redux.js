import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers/'
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

export default store
