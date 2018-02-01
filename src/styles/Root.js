import styled from 'styled-components'

export default styled.div`
  font-size: 15px;

  >aside {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 5rem;
  }

  >main {
    padding-left: 5rem;
  }

  /* remove offset when sidebar not present */
  >main:first-child {
    padding-left: 0;
  }
`
