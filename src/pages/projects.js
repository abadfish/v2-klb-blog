import React, { useReducer, useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"
import { filterReducer } from '../components/reducers'

const Projects = ({ location }) => {

  const [tag, setTag] = useState('')
  console.log('tag:', tag)
  const [ filter, dispatchFilter ] = useReducer(filterReducer, 'ALL')
  
  const projects = [
    { title: "Farrier's Fix", tag: "javascript" },
    { title: "Baby-namer", tag: "react" }
  ]

  useEffect(() => {
    if (location.state.tag) {
      let tag = location.state.tag
      setTag(tag)
      dispatchFilter({ type: 'SHOW_STATE', payload: tag })
    }
  }, [location])

  const chooseTag = e => {
    setTag(e)
    dispatchFilter({ type: 'SHOW_STATE', payload: e })
  }

  const filteredProjects = projects.filter(p => {
    if (filter === 'ALL') {
      return true
    }
    if (filter === tag && p.tag === tag) {
      return true
    }
    return false
  })

  return (
    <Layout>
      <ProjectsHome>
        <p>Make homepage icons clickable and trigger filter on this page based on tag of icon</p>
      </ProjectsHome>
      <div onClick={() => chooseTag('javascript')}>Javascript</div>
      <div onClick={() => chooseTag('react')}>React</div>
      { filteredProjects.map(p => (
        <p key={p.title}>{p.title}</p>
      )) }
    </Layout>
  )
}

export default Projects

const ProjectsHome = styled.main `
`