import React from 'react'

import Link from '../containers/Link.js'

const NavigationComponent = (props) => (
  <nav>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/rooms">Rooms</Link></li>
    </ul>
  </nav>
)

NavigationComponent.propTypes = {}

export default NavigationComponent
