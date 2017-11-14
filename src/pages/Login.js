import React from 'react'

import Page from '../components/Page.js'
import PageTitle from '../components/PageTitle.js'

// 100% x 100% flexbox
const wprStyle = {height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}
// contains title, labels, fields
const formStyle = {width: '350px'}
const labelStyle = {margin: '0'}
const inputStyle = {display: 'block', marginBottom: '15px', width: '100%'}

export default class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const {id, value} = e.target

    if (id === 'username' || id === 'password') this.setState({[id]: value})
  }

  handleSubmit (e) {
    // prevent sending get request
    e.preventDefault()

    // TODO: send request
  }

  render () {
    const {username, password} = this.state

    return (
      <Page name="login">
        <div style={wprStyle}>
          <form onSubmit={this.handleSubmit} style={formStyle}>
            <PageTitle>Login</PageTitle>

            <label
              htmlFor="username"
              style={labelStyle}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              style={inputStyle}
            />

            <label
              htmlFor="password"
              style={labelStyle}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              style={inputStyle}
            />

            <button type="submit" style={inputStyle}>Login</button>
          </form>
        </div>
      </Page>
    )
  }

  static propTypes = {}
}
