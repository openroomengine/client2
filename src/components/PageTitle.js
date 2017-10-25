import React from 'react'
import PropTypes from 'prop-types'

const PageTitleComponent = ({children}) =>
  <h1>{children}</h1>

PageTitleComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitleComponent
