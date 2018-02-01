import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from '../containers/Link.js'

const SidebarLinkStyle = ({to, children, ...rest}) =>
  <li {...rest}>
    <Link to={to}>{children}</Link>
  </li>

SidebarLinkStyle.propTypes = {
  to: PropTypes.string.isRequired,
}

export default styled(SidebarLinkStyle)`
  a {
    padding: 1rem;
    height: 5rem;
    display: block;

    font-size: 3rem;
    line-height: 1.15em; /* HACK: align font vertically */
    color: white;
    text-align: center;
    text-decoration: none;

    :hover {
      background: #454545;
    }
  }
`
