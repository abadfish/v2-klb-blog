import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = ({ siteTitle, styles }) => {


  const links = [
    { to: '/', label: 'KO' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/projects', label: 'Projects' },
  ]

  return (
    <HeaderWrapper 
      pos={ styles.headerPos }
      bg={ styles.headerBg }
    >
      <HeaderBody>
        { links.map((l, i) => (
          <HeaderLink key={i}>
            <Link to={ l.to } >{ l.label }</Link>
          </HeaderLink>
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
  background: ${props => props.bg };
  width: 100%;
  top: 0;
  position: ${props => props.pos };
  z-index: 100;
`
const HeaderBody = styled.div `
  width: 100%;
  height: 4.45rem;
  display: inline-grid;
  grid-template-columns: repeat(4, 25%);
  justify-content: space-around;
  text-align: center;
`
const HeaderLink = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    text-decoration: none;
    text-transform: uppercase;
    // font-family: 'Syne Mono', monospace;
    font-weight: 300;
    color: hsl(180, 96%, 80.2%);
    font-size: calc(10px + 0.5vmin);
    letter-spacing: .75px;
    z-index: 1000;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    &:hover {
      // font-weight: bold;
      // font-size: calc(10px + 1vmin);
      text-shadow: 0px 0px 2px black, 0 0 25px black, 0 0 5px black;
      transform: rotate(4deg);
      -webkit-transform: rotate(4deg);
      -moz-transform: rotate(4deg);
    }
  }
`