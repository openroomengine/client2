import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {addMessage, removeMessages} from '../actions/message.js'

import Messages from '../containers/Messages.js'
import Page from '../styles/Page.js'
import PageTitle from '../styles/PageTitle.js'

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(addMessage(message)),
  removeMessages: (key, value) => dispatch(removeMessages(key, value)),
})

const loginMutation = gql`
  mutation createSession($username: String!, $password: String!) {
    createSession (username: $username, password: $password) {
      username
    }
  }
`

@connect(null, mapDispatchToProps)
@graphql(loginMutation)
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

  async handleSubmit (e) {
    // prevent sending get request (default form behavior)
    e.preventDefault()

    const {username, password} = this.state
    const {addMessage, removeMessages} = this.props

    // remove old login messages
    removeMessages({
      key: 'tags',
      value: ['login'],
    })

    try {
      const mutate = await this.props.mutate({
        variables: {username, password},
      })

      console.log(mutate)
    } catch ({graphQLErrors, networkError}) {
      // turn every graphql error into message
      if (graphQLErrors) {
        for (const {message} of graphQLErrors) {
          addMessage({
            id: 'error-login-details',
            content: message,
            type: 'error',
            tags: ['login'],
          })
        }
      }
    }
  }

  render () {
    const {username, password} = this.state

    return (
      <StyledPage name="login">
        <StyledMessages tags={['login']}/>
        <Center>
          <form onSubmit={this.handleSubmit}>
            <PageTitle>OpenRoom</PageTitle>

            <label
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              autoComplete="username"
              onChange={this.handleChange}
            />

            <label
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={this.handleChange}
            />

            <button type="submit">Login</button>
          </form>
        </Center>
      </StyledPage>
    )
  }

  static propTypes = {}
}

const StyledPage = styled(Page)`
  display: flex;
  align-items: center; /* center children horizontally */
  flex-direction: column;
  min-height: 100vh; /* use full screen, but dont let login form and messages sit over eachother in extreme cases */
`

const StyledMessages = styled(Messages)`
  width: 50%;

  :first-child {
    padding-top: 1em;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* claim exess space */

  form {
    width: 350px;
  }

  label {
    margin: 0;
  }

  input, button {
    display: block;
    margin-bottom: 15px;
    width: 100%;
  }
`
