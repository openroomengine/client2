import {
  ADD_MESSAGE,
  REMOVE_MESSAGE,
  REMOVE_MESSAGES,
  UPDATE_LIFETIME,
} from './types.js'

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: {
    id: message.id, // string; unique identifier of message, old message with same id removed prior to addition
    title: message.title, // string; reflects message content in small views and can be placed above message content
    content: message.content, // string; message content to display to humans
    type: message.type || 'info', // string; success (green), info (blue), warning (orange), error (red)
    tags: message.tags || [], // array of strings; used to select messages for display
    sticky: !!message.sticky, // boolean; whether message should be removed after display or not
  },
})

export const removeMessage = (id) => ({
  type: REMOVE_MESSAGE,
  payload: id,
})

export const removeMessages = (key, value) => ({
  type: REMOVE_MESSAGES,
  payload: {
    key,
    value,
  },
})

export const updateLifetime = () => ({
  type: UPDATE_LIFETIME,
  payload: {},
})
