import React from 'react'
import {connect} from 'react-redux'

import location from '../selectors/location.js'
import isAuth from '../helpers/isAuth.js'
import camelCase from '../helpers/camelCase.js'

import Root from '../styles/Root.js'
import Sidebar from '../styles/Sidebar.js'
import Link from '../styles/SidebarLink.js'
import Logout from '../styles/SidebarLogout.js'
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

    // NOTE: possible that this.props.location leaks data (sidebar?)
    const Page = isAuth(camelCase('page', page), user)
      ? pages[page] || PageNotFound // sufficient permissions → page/notFound
      : AccessDenied // insufficient permissions

    const dashboardAuth = isAuth('pageDashboard', user)
    const roomsAuth = isAuth('pageRooms', user)
    const logoutAuth = isAuth('logout', user)

    // decide to show sidebar
    const aside = sidebar && (dashboardAuth || roomsAuth || logoutAuth)

    return (
      <Root>
        {aside ? (
          <aside>
            <Sidebar>
              {dashboardAuth ? <Link to="/dashboard">D</Link> : null}
              {roomsAuth ? <Link to="/rooms">R</Link> : null}
              {logoutAuth ? <Logout>L</Logout> : null}
            </Sidebar>
          </aside>
        ) : null}
        <main>
          <Page/>
        </main>
      </Root>
    )
  }
}
