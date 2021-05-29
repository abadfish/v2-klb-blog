import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderBody>
      <h1 style={{ margin: 0 }}>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </h1>
      <h5>
        <HeaderLink to='/about'>About</HeaderLink>
      </h5>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </HeaderBody>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.nav `
  background: slategray;
  height: 92vh;
  width: 200px;
`
const HeaderBody = styled.div `
  padding: 1.45rem 1.0875rem;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const HeaderLink = styled(Link) `
  color: white;
  text-decoration: none;
`