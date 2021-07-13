import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const Stack = () => {

  return (
    <StackPage>
      <StackGrid>
        <ImageContainer>
          <Link to='/projects' state={{ tag: 'rails' }}>
            <StaticImage
              src="../images/ruby-on-rails-logo.png"
              width={200}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Rails Icon"
              style={{ marginBottom: `1.45rem` }}
            />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to='/projects' state={{ tag: 'ruby' }}>
            <StaticImage
              src="../images/ruby-logo-red.png"
              width={100}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Ruby Icon"
              style={{ marginBottom: `1.45rem` }}
            />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to='/projects' state={{ tag: 'javascript' }}>
            <StaticImage
              src="../images/js-square.png"
              width={100}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Javascript Icon"
              style={{ marginBottom: `1.45rem` }}
            />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to='/projects' state={{ tag: 'html' }}>
            <StaticImage
              src="../images/orange-html5-logo.png"
              width={100}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="HTML Icon"
              style={{ marginBottom: `1.45rem` }}
            />
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to='/projects' state={{ tag: 'postgres' }}>
            <StaticImage
              src="../images/postgresql-icon.png"
              width={100}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="PostgreSQL Icon"
              style={{ marginBottom: `1.45rem` }}
            />
        </Link>
        </ImageContainer>
        <ImageContainer>
          <Link to='/projects' state={{ tag: 'react' }}>
            <StaticImage
              src="../images/blue-react-logo.png"
              width={100}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="ReactJS Icon"
            />
          </Link>
        </ImageContainer>
      </StackGrid>
    </StackPage>
  )
}

const StackPage = styled.section `
  height: auto;
  width: 100%;
  background-color: #d3d3d3;
`

const StackGrid = styled.div `
  width: 100%;
  height: 100px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  // grid-template-rows: 1fr 1fr;
`

const ImageContainer = styled.article `
    z-index: 2000;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
`