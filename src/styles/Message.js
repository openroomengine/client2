import React from 'react'
import styled from 'styled-components'

const types = {
  success: '#bbdd75',
  info: '#75d5dd',
  warning: '#fcc676',
  error: '#dd7579',
}

// NOTE: use `e.target.parentNode.id` to find out what message to delete in onCLick handler
const MessageStyle = ({close, children, ...rest}) =>
  <li {...rest}>
    {close ? <span className="message-close" onClick={close}>x</span> : null}
    {children}
  </li>

export default styled(MessageStyle)`
  position: relative;
  padding: 1em;
  background: ${({type}) => types[type]};

  line-height: 1em;

  p:last-child {
    margin-bottom: 0;
  }

  h1 {
    ${close ? 'padding-right: 1em;' : null}
  }

  .message-close {
    position: absolute;
    right: 1em;
    font-weight: bold;
  }
`
