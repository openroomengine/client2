import {
  CHANGE_PATH,
} from './types.js'

export const changePath = (path) => ({
  type: CHANGE_PATH,
  payload: path,
})
