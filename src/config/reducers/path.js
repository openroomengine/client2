import {CHANGE_PATH} from '../../actions/types.js'
import {history} from '../history.js'

const initial = history.location.pathname

export default (path = initial, action) => {
  if (action.type === CHANGE_PATH) return action.payload

  return path
}
