import createHistory from 'history/createBrowserHistory'

import {changePath} from '../actions/path.js'

export const history = createHistory()

export const watchAddressBar = (store) => {
  history.listen((location) => {
    const addressBar = location.pathname
    const {path} = store.getState()

    // console.log('h', path.toString(), addressBar.toString())

    if (path !== addressBar) store.dispatch(changePath(addressBar))
  })
}
