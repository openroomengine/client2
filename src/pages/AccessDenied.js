import React from 'react'
import PropTypes from 'prop-types'

import Page from '../components/Page.js'
import PageTitle from '../components/PageTitle.js'

const AccessDenied = () =>
  <Page name="pageAccessDenied">
    <PageTitle>Access denied</PageTitle>
    <p>
      Freeze! You have insufficient permissions to view this page.
    </p>
  </Page>

AccessDenied.propTypes = {}

export default AccessDenied
