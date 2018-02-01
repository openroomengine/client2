import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageStyle = ({name, children, ...rest}) => (
  // NOTE: html article = stand-alone unit
  <article id={`page-${name}`} {...rest}>
    {children}
  </article>
)

PageStyle.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default styled(PageStyle)``
