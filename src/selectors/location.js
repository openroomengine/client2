import {createSelector} from 'reselect'

import {getLocation} from '../config/locations'

export default createSelector(
  (state) => state.path,
  (path) => getLocation(path), // resolve() not needed; stored path is always resolved
)
