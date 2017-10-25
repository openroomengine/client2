import React from 'react'

import Page from '../components/Page.js'
import PageTitle from '../components/PageTitle.js'

const PageNotFoundPage = () =>
  <Page name="pageNotFound">
    <PageTitle>Page not found</PageTitle>
    <p>
      Oops! The current url maps to a location, but the page to display does not exist.
    </p>
  </Page>

PageNotFoundPage.propTypes = {}

export default PageNotFoundPage
