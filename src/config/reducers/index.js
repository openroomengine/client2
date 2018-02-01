import {combineReducers} from 'redux'

import path from './path.js'
import user from './user.js'
import messages from './messages.js'

export default combineReducers({
  path,
  user,
  messages,
})
