import {
  ADD_MESSAGE,
  REMOVE_MESSAGE,
  REMOVE_MESSAGES,
} from '../../actions/types.js'

import intersect from '../../helpers/intersect.js'

const initial = []

// message
// {
//   id: '',
//   title: '',
//   content: '',
//   type: '',
//   tags: [],
//   sticky: false,
// }

export default (messages = initial, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const message = action.payload

      return messages
        .filter(({id}) => id !== message.id)
        .concat(message)
    }

    case REMOVE_MESSAGE: {
      return messages
        .filter(({id}) => id !== action.payload)
    }

    case REMOVE_MESSAGES: {
      const {key, value} = action.payload

      // remove messages based on tags (array)
      if (key === 'tags') return messages.filter(({tags}) => !intersect(tags, value))

      // remove message based on other keys (singleton)
      return messages.filter(({[key]: current}) => current !== value)
    }

    default: {
      return messages
    }
  }
}
