import React from 'react'
import styled from 'styled-components'

const SidebarLogoutStyle = ({children, ...rest}) =>
  <li {...rest}>
    <span>{children}</span>
  </li>

export default styled(SidebarLogoutStyle)`
  span {
    position: absolute;
    bottom: 0;
    padding: 1rem;
    width: 5rem;
    height: 5rem;
    display: block;

    font-size: 3rem;
    line-height: 1.15em; /* HACK: align font vertically */
    color: white;
    text-align: center;
  }
`
