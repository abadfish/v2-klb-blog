import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import bgImage from '../images/pro-amore-equitum.jpg'


const About = () => {
  return (
    <Layout>
      <PageBg >
      <AboutPage>
      <h1>About</h1>
      <p>I'm baby brooklyn synth fixie pok pok viral man bun 3 wolf moon portland art party next level locavore la croix food truck gentrify skateboard. Cardigan four loko affogato lumbersexual slow-carb twee. Tacos PBR&B venmo, vegan single-origin coffee lomo bicycle rights vexillologist locavore biodiesel art party. Forage cliche DIY, lyft cornhole keffiyeh coloring book art party tousled church-key gochujang heirloom truffaut. Hell of tote bag hashtag, post-ironic cold-pressed truffaut kombucha intelligentsia pinterest franzen scenester cronut retro everyday carry bushwick. Small batch heirloom woke jean shorts, banh mi gochujang tattooed chartreuse occupy enamel pin sustainable aesthetic butcher letterpress.</p>
      </AboutPage>
      </PageBg>
    </Layout>
  )
}

export default About


const PageBg = styled.div `
  height: 92vh;
  width: 100%;
  background: url("${bgImage}");
  // background-image: url(${props => props.layoutImage});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`
const AboutPage = styled.div `
  position: relative;
  margin: 0 auto;
  background: rgba(0,0,0,0.6);
  padding: 1.45rem 1.0875rem 1.45rem;
  width: 100%;
  height: 100%;
  color: #fff;
`
