import React from 'react'
import {connect} from 'react-redux'

import location from '../selectors/location.js'
import isAuth from '../helpers/isAuth.js'
import camelCase from '../helpers/camelCase.js'

import Navigation from '../components/Navigation.js'
import PageNotFound from '../pages/PageNotFound.js'

import Login from '../pages/Login.js'
import Dashboard from '../pages/Dashboard.js'
import Rooms from '../pages/Rooms.js'
import LocationNotFound from '../pages/LocationNotFound.js'
import AccessDenied from '../pages/AccessDenied.js'

const pages = {
  login: Login,
  dashboard: Dashboard,
  rooms: Rooms,
  locationNotFound: LocationNotFound,
  accessDenied: AccessDenied,
}

const mapStateToProps = (state) => ({
  user: state.user,
  location: location(state),
})

@connect(mapStateToProps)
export default class AppContainer extends React.Component {
  render () {
    const {user, location} = this.props
    const {page, sidebar} = location

    // sufficient permissions → requested / 'page not found' page
    // insufficient permissions → 'access denied' page
    // NOTE: possible that this.props.location leaks data (sidebar?)
    const Page = isAuth(camelCase('page', page), user) ? pages[page] || PageNotFound : AccessDenied

    // main styles
    const mainStyles = sidebar ? {marginLeft: '5rem'} : null

    return (
      <div>
        {sidebar ? <aside><Navigation/></aside> : null}
        <main style={mainStyles}><Page/></main>
      </div>
    )
  }
}
