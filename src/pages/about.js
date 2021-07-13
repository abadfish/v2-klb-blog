import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import bgImage from '../images/pro-amore-equitum.jpg'


const About = ({ location }) => {
  return (
    <Layout location={ location }>
      <PageBg >
      <AboutPage>
        <h1>About</h1>
        <p>I'm a full stack web developer from Stamford, CT with experience building scalable REST APIs and React clients. I started my career in the financial industry with my earliest code written in VBA but have since evolved to focus on practical solutions to everyday workflow challenges using web tech. I have a growing passion for Javascript and it's many available resources and tools. </p>
      </AboutPage>
      </PageBg>
    </Layout>
  )
}

export default About


const PageBg = styled.div `
  height: 100vh;
  width: 100%;
  background: url("${bgImage}");
  // background-image: url(${props => props.layoutImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`
const AboutPage = styled.div `
  margin: 0 auto;
  background: rgba(0,0,0,0.6);
  padding: 4.45rem 1.0875rem 1.45rem;
  width: 100%;
  height: 100%;
  color: #fff;
`
