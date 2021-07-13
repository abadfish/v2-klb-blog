import React, { useRef } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/layout'
import blogHomeImage from '../images/minified-js.jpg'
// import { node } from 'prop-types'

const BLOG_INDEX_QUERY = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(limit: 5, sort: {
      order: DESC,
      fields: [frontmatter___date],
    }) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const Blog = () => {

  const data = useStaticQuery(BLOG_INDEX_QUERY)
  const postRef = useRef()
  const posts = data.allMarkdownRemark.edges.slice(0, 3)

  const postList = posts?.map(p => (
    <article key={p.node.id}>
      <Link to={`/posts${p.node.frontmatter.slug}`}>
        <h5>{ p.node.frontmatter.title }</h5>
        <h6>{ p.node.frontmatter.date }</h6>
      </Link>
      <p>{ p.node.excerpt }</p>
    </article>
    
  ))
       
  return (
    <Layout>
      <BlogHome>
        <BlogHeading headerImage={ blogHomeImage } >
          <Overlay>
            <h1>{ data.site.siteMetadata?.title }</h1>
            <h3>{ data.site.siteMetadata?.description }</h3>
          </Overlay>
          
        </BlogHeading>
        <PostListSection ref={ postRef }>
          { postList }
        </PostListSection>
        
      </BlogHome>
    </Layout>
  )
}

export default Blog

const PostListSection = styled.section `
  width: 100%;
  // height: calc(100vh * .5);
  height: 100vh;
  padding: 4rem 6rem;
  article {
    color: #fff;
  }
  h5 {
    color: rgb(156, 253, 253);
  }
  h6 {
    color: #d3d3d3;
  }
`

const BlogHome = styled.div `
  background-color: rgba(25,53,73,1);
  // background-color: hsl(168, 76%, 19%); //dark green

  
`
const BlogHeading = styled.header `
  background: url(${props => props.headerImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat-y;
  background-position: center;
  height: 400px;
  
`

const Overlay = styled.div `
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  text-align: center; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  h1, h3 {
    font-family: 'Roboto Mono', monospace;
    color: #fff;
  }
`