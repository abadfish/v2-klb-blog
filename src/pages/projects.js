import React from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"

const Projects = () => {
  return (
    <Layout>
      <ProjectsHome>
        <p>create tags for projects. filter with useReducer</p>
        <p>Make homepage icons clickable and trigger filter on this page based on tag of icon</p>
      </ProjectsHome>
    </Layout>
  )
}

export default Projects

const ProjectsHome = styled.main `
`