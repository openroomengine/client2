import {createSelector} from 'reselect'
import intersect from '../helpers/intersect.js'

// TODO: optimize: memoize based on props

// select messages with requested tag(s)
export default createSelector(
  (state) => state.messages,
  (state, props) => props.tags,
  (messages, tags) => messages.filter((message) => intersect(tags, message.tags)),
)
