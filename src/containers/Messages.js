import React from 'react'
import {connect} from 'react-redux'

import messages from '../selectors/messages.js'
import {removeMessage} from '../actions/message.js'

import Message from '../styles/Message.js'
import Messages from '../styles/Messages.js'
import MessageTitle from '../styles/MessageTitle.js'

const mapStateToProps = (state, props) => ({
  messages: messages(state, props),
})

const mapDispatchToProps = (dispatch) => ({
  removeMessage: (id) => dispatch(removeMessage(id)),
})

@connect(mapStateToProps, mapDispatchToProps)
export default class MessagesContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose (e) {
    this.props.removeMessage(e.target.parentNode.id)
  }

  render () {
    const {messages, removeMessage, ...rest} = this.props

    // only render when messages should be displayed
    if (!messages.length) return null

    return (
      <Messages {...rest}>
        <ul>
          {messages.map(({id, type, title, content}) =>
            <Message
              key={id}
              id={id} // needed by this.handleClose
              type={type}
              close={this.handleClose}
            >
              {title ? <MessageTitle>{title}</MessageTitle> : null}
              {content}
            </Message>
          )}
        </ul>
      </Messages>
    )
  }

  static propTypes = {}
}
