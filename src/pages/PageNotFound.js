// replacement when page does not exist (file not present in ../pages or entry not in array ../containers/App.js)
import React from 'react'

import Page from '../styles/Page.js'
import PageTitle from '../styles/PageTitle.js'

const PageNotFoundPage = () =>
  <Page name="pageNotFound">
    <PageTitle>Page not found</PageTitle>
    <p>
      Oops! The current url maps to a location, but the page to display does not exist.
    </p>
  </Page>

PageNotFoundPage.propTypes = {}

export default PageNotFoundPage
