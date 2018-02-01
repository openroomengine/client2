// replacement for page that cannot be viewed with certain permissions
import React from 'react'
import PropTypes from 'prop-types'

import Page from '../styles/Page.js'
import PageTitle from '../styles/PageTitle.js'

const AccessDenied = () =>
  <Page name="pageAccessDenied">
    <PageTitle>Access denied</PageTitle>
    <p>
      Freeze! You have insufficient permissions to view this page.
    </p>
  </Page>

AccessDenied.propTypes = {}

export default AccessDenied
