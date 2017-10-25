import React from 'react'
import PropTypes from 'prop-types'

const PageComponent = ({name, children}) =>
  // NOTE: html article = stand-alone unit
  <article id={`page-${name}`}>
    {children}
  </article>

PageComponent.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default PageComponent
