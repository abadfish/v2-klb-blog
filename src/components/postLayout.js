import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from './layout'

const PostLayout = ({ data }) => {

  const post = data.markdownRemark

  return (
    <Layout>
      <PostPage>
        <h1>{ post.frontmatter.title }</h1>
        <div dangerouslySetInnerHTML={{
          __html: post.html
        }} />
      </PostPage>
    </Layout>
  )
}

export default PostLayout

export const query = graphql `
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`

const PostPage = styled.div `
  min-height: 100vh;
  clear: both;
  padding: 1rem;
  color: #fff;
`