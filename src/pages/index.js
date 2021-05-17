import * as React from "react"
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import '../assets/styles.css'

import Seo from "../components/seo"

const IndexPage = () => {

  // const [showBox, setShowBox] = React.useState(false)

  // const handleBoxToggle = (e) => {
  //   let p    = {x:e.target.offsetLeft, y:e.target.offsetTop}
  //   let mPos = {x:e.pageX, y:e.pageY}
  //   let x    = mPos.x - p.x - 50
  //   let y    = mPos.y - p.y - 50
  //   debugger
  //   setShowBox(!showBox )
  // }

  
  // const [mouseX, setMouseX]=useState(0)
  // const [mouseY, setMouseY]=useState(0)
  // const [xp, setXp]=useState(0)
  // const [yp, setYp]=useState(0)
  // console.log('mouseX' + mouseX)
  // console.log('mouseY' + mouseY)

  useEffect(() => {
    window.addEventListener('mousemove', followMouse)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', followMouse)
    }
  }, [])

  const mouseInterval = useRef()
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const xp = useRef(0)
  const yp = useRef(0)

  const followMouse = e => {
    // let el = document.getElementById("#circle")
    mouseX.current = e.pageX - 30
    mouseY.current = e.pageY - 30
    console.log(mouseX)
  }


  useEffect(() => {
      mouseInterval.current = setInterval(() => { 
        xp.current = (xp += ((mouseX - xp)/6))
        yp.current = (yp += ((mouseY - yp)/6))
        // setXp(xp += ((mouseX - xp)/6))
        // setYp(yp += ((mouseY - yp)/6))
        document.getElementById("#circle").css({left: xp +'px', top: yp +'px'});
      }, 20);
  }, [])

  useEffect(() => {
    return () => {
      clearInterval(mouseInterval.current)
    }
  }, [])

  // setInterval(function(){
  //   xp += ((mouseX - xp)/6);
  //   yp += ((mouseY - yp)/6);
  //   $("#circle").css({left: xp +'px', top: yp +'px'});
  // }, 20);

  // $(window).mousemove (function(e){
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// })

  
  return (
  <Home>
    {/* <Home onMouseOver={ followMouse }></Home> */}
    <Seo title="Home" />
    <h1>KIRSTEN O'FARRELL</h1>
    <h2>Full Stack Engineer</h2>
    {/* <InnerBox showBox='show'></InnerBox> */}
    <div id="circle"></div>
    {/* <div
        className={`container${showBox ? " show" : ""}`}
      >
        <div className="wrapper">
          <div className="innerBox" />
        </div>
      </div> */}
  </Home>
  )
}

export default IndexPage

const Home = styled.div `
  background: #193549;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  h1 {
    font-family: 'Syne Mono', monospace;
    color: rgb(53, 191, 12);
  }
  h2 {
    font-family: 'Syne Mono', monospace;
    color: rgb(156, 253, 253);
  }
`

// const InnerBox = styled.div `
//   margin: 4rem;
//   width: 100px;
//   height: 100px;
//   background: #fff;
//   display: none;
// `

{/* <StaticImage
src="../images/gatsby-astronaut.png"
width={300}
quality={95}
formats={["AUTO", "WEBP", "AVIF"]}
alt="A Gatsby astronaut"
style={{ marginBottom: `1.45rem` }}
/> */}
