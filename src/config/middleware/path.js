import {
  CHANGE_PATH,
} from '../../actions/types.js'
import {changePath} from '../../actions/path.js'
import {history, resolve} from '../locations.js'

const addressBarToPath = (store) => {
  // listen for address bar changes
  history.listen((location) => {
    const addressBar = location.pathname
    const {path} = store.getState()

    // update store (dispatch action)
    if (path !== addressBar) store.dispatch(changePath(addressBar))
  })
}

const pathToAddressBar = (next, action) => {
  // listen for CHANGE_PATH
  if (action.type === CHANGE_PATH) {
    const addressBar = history.location.pathname
    const {path} = resolve(action.payload)

    // propagate action
    // NOTE: will probably break if extra properties are added to CHANGE_PATH
    next(changePath(path))

    // update address bar
    if (path !== addressBar) history.push(path)
  } else {
    // let irrelevant actions through
    next(action)
  }
}

export default (store) => {
  addressBarToPath(store)

  return (next) => (action) => pathToAddressBar(next, action)
}
