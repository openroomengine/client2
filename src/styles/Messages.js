import styled from 'styled-components'

export default styled.section`
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      margin-bottom: 1em;

      :last-child {
        margin-bottom: 0;
      }
    }
  }
`
