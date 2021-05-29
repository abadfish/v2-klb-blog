/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const Layout = ({ children, location }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `)

  // const bgImage = () => {
  //   switch (router.pathname) {
  //     case '/':
  //       return image4
  //     case '/about':
  //       return null
  //     case '/buy':
  //       return null
  //     default:
  //       return null
  //   }
  // }
  const getPage = () => {
    
    switch (location?.pathname) {
      case '/':
        return 'static'
      case '/about':
        return 'fixed'
      case '/blog/':
        return 'fixed'
      default:
        return 'fixed'
    }
  }

  return (
    <>
      <LayoutWrapper>
        <Header  />
        <Pages>{children}</Pages>
      </LayoutWrapper>
      <Foot position={ getPage() }>
        <div>
          © {new Date().getFullYear()}, 
          {` `}
          <a href="https://www.gatsbyjs.com">abadfish.tech</a>
        </div>
      </Foot>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const LayoutWrapper = styled.div `
  
`
const Pages = styled.main `
  width: 100%;
  height: 100%;
  // padding-top: 4.45rem;
`

const Foot = styled.footer `
  width: 100%;
  height: 75px;
  line-height: 75px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(25,53,73,1);
  bottom: ${props => props.position === 'fixed' ? 0 : 'auto'};
  position: ${props => props.position};
  z-index: 100;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  a {
    color: #fff;
  }
`
