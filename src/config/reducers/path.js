import {CHANGE_PATH} from '../../actions/types.js'
import {resolve, history} from '../locations.js'

// get path from address bar (follow redirects)
// NOTE: What is initial user state? How do I get it here?
const user = {role: 'visitor'}
const initial = resolve(history.location.pathname, user).path

// redirect: update address bar
if (initial !== history.location.pathname) history.push(initial)

export default (path = initial, action) => {
  if (action.type === CHANGE_PATH) return action.payload

  return path
}
