import React from 'react'

import Page from '../components/Page.js'
import PageTitle from '../components/PageTitle.js'

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
