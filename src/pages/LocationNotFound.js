// replacement when page is absent because location (defined in ../config/locations.js) does not exists
import React from 'react'

import Page from '../styles/Page.js'
import PageTitle from '../styles/PageTitle.js'

const LocationNotFoundPage = () =>
  <Page name="locationNotFound">
    <PageTitle>Location not found (404)</PageTitle>
    <p>
      Oops! The current url leads to nowhere.
      You either made a typo, clicked on a broken link or
      misconfigured <code>config/locations.js</code>.
    </p>
  </Page>

LocationNotFoundPage.propTypes = {}

export default LocationNotFoundPage
