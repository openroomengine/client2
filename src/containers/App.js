import React from 'react'
import {connect} from 'react-redux'

import location from '../selectors/location.js'

import Navigation from '../components/Navigation.js'
import PageNotFound from '../pages/PageNotFound.js'

import Dashboard from '../pages/Dashboard.js'
import Rooms from '../pages/Rooms.js'
import LocationNotFound from '../pages/LocationNotFound.js'

const pages = {
  dashboard: Dashboard,
  rooms: Rooms,
  locationNotFound: LocationNotFound,
}

const mapStateToProps = (state) => ({
  path: state.path,
  location: location(state),
})

@connect(mapStateToProps)
export default class AppContainer extends React.Component {
  render () {
    const {page} = this.props.location
    const Page = pages[page] || PageNotFound

    return (
      <div>
        <Navigation/>
        <Page/>
      </div>
    )
  }
}
