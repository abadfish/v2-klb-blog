import React, { useRef } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/layout'
import blogHomeImage from '../images/minified-js.jpg'
// import { node } from 'prop-types'


const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      allMarkdownRemark {
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
  `)

  const postRef = useRef()

  const posts = data.allMarkdownRemark.edges.slice(0, 3)
  console.log(posts.length)

  const postList = posts?.map(p => (
    <Link to={`/posts/${p.node.frontmatter.slug}`}>
    <article key={p.node.id}>
        <h5>{ p.node.frontmatter.title }</h5>
        <p>{ p.node.excerpt }</p>
    </article>
    </Link>
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
  height: calc(100vh * .5);
  padding: 4rem 6rem;
  article {
    color: #fff;
  }
`

const BlogHome = styled.section `
  padding: 4.45rem 0 1.45rem;
  background-color: rgba(25,53,73,1);
  
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