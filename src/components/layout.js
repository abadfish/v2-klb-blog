/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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

  return (
    <>
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Pages>{children}</Pages>
      </LayoutWrapper>
      <Foot>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Foot>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const LayoutWrapper = styled.div `
  display: flex;
  flex-direction: row;
`
const Pages = styled.main `
  width: 100%;
  height: 100%;
  
`

const Foot = styled.footer `
  margin-top: 2rem;
  background: #fff;
  position: absolute;
`
