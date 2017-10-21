import {
  CHANGE_PATH,
} from '../../actions/types.js'
import {history} from '../history.js'
import {changePath} from '../../actions/path.js'

export default (store) => {
  // update state when address bar changes
  history.listen((location) => {
    const addressBar = location.pathname
    const {path} = store.getState()

    // do not dispatch when state is up to date
    if (path !== addressBar) store.dispatch(changePath(addressBar))
  })

  return (next) => (action) => {
    // do not swallow actions
    next(action)

    // update address bar when state changes
    if (action.type === CHANGE_PATH) {
      const addressBar = history.location.pathname
      const path = action.payload

      // do not create history entry twice
      if (addressBar !== path) history.push(action.payload)
    }
  }
}
