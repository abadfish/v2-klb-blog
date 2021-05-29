import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = ({ siteTitle }) => {

  const links = [
    { to: '/', label: 'KO' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/using-typescript/', label: 'Projects' },
  ]

  return (
    <HeaderWrapper>
      <HeaderBody>
        { links.map((l, i) => (
          <HeaderLink to={ l.to } key={i}>{ l.label }</HeaderLink>
        ))}
      </HeaderBody>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.nav `
  background: transparent;
  width: 100%;
  position: absolute;
  z-index: 100;
  margin-bottom: 3rem;
`
const HeaderBody = styled.div `
  padding: 1.45rem 1.0875rem;
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(4, 25%);
  justify-content: space-around;
  text-align: center;
`
const HeaderLink = styled(Link) `
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  font-weight: 300;
  color: rgb(156, 253, 253);
  font-size: 14px;
  letter-spacing: .75px;
  z-index: 1000;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  transition: all .5s ease;
  padding-bottom: 3rem;
  &:hover {
    font-weight: bold;
    font-size: calc(10px + 1vmin);
    text-shadow: 0px 0px 2px black, 0 0 25px black, 0 0 5px black;
  }
`