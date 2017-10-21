import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {changePath} from '../actions/path.js'

const mapDispatchToProps = (dispatch) => ({
  changePath: (path) => dispatch(changePath(path)),
})

@connect(null, mapDispatchToProps)
export default class LinkContainer extends React.Component {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const {children, to} = this.props

    return (
      <a
        // href={}
        onClick={this.handleClick}
      >
        {to}
        {children}
      </a>
    )
  }

  handleClick (e) {
    // shortcut
    const {changePath, to} = this.props

    // stay on page
    e.preventDefault()

    changePath(to)
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
  }
}
