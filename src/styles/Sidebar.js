import React from 'react'
import styled from 'styled-components'

const SidebarStyle = ({children, ...rest}) =>
  <nav {...rest}>
    <ul>
      {children}
    </ul>
  </nav>

export default styled(SidebarStyle)`
  height: 100%;
  background: #3b3b3b;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`
