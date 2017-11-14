import React from 'react'

import Link from '../containers/Link.js'

const liStyle = {
  padding: '0.5rem',
  lineHeight: '1em',
  width: '1em',
}

const aStyle = {
  color: '#eee',
  textDecoration: 'none',
}

const NavigationComponent = (props) => (
  <nav style={{
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: '5rem',
    background: '#3b3b3b',
    fontSize: '4rem',
  }}>
    <ul style={{
      padding: 0,
      margin: 0,
      listStyleType: 'none',
      textAlign: 'center',
      // position: 'absolute',
    }}>
      <li style={liStyle}><Link to="/dashboard" style={aStyle}>D</Link></li>
      <li style={liStyle}><Link to="/rooms" style={aStyle}>R</Link></li>
      <li style={{...liStyle, position: 'absolute', bottom: '0'}}><span style={{color: '#eee'}}>L</span></li>
    </ul>
  </nav>
)

NavigationComponent.propTypes = {}

export default NavigationComponent
