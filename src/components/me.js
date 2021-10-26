import React from 'react'
import { useRef, useEffect } from 'react'
import styled from 'styled-components'
// import { StaticImage } from "gatsby-plugin-image"
import '../assets/styles.css'
import stars from '../images/particle_video.mp4'
// import bgImage from '../images/minified-js.jpg'
import bgImage from '../images/pro-amore-equitum.jpg'
const Captions = ["hello world"]

export const Me = () => {

  // function isMobileDevice() {
  //   return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  // }

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.addEventListener('touchmove', followMouse)
    } else {
      window.addEventListener('mousemove', followMouse)
    }
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', followMouse)
      window.removeEventListener('touchmove', followMouse)
    }
  }, [])

  // var dots = [],
  //   mouse = {
  //     x: 0,
  //     y: 0
  //   };

  // The Dot object used to scaffold the dots
  // var Dot = function() {
  //   x = 0
  //   y = 0
  //   node = (function(){
  //     var n = document.createElement("div")
  //     n.className = "trail"
  //     document.body.appendChild(n)
  //     return n
  //   }())
  // }

  const dots = useRef([])
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const xp = useRef(0)
  const yp = useRef(0)
  const element = "circle"

  function followMouse(e) {
    // requestAnimationFrame(followMouse)
    let circle = document.getElementById(element)
    mouseX.current = e.pageX - 130
    mouseY.current = e.pageY - 130
    xp.current = (xp.current += ((mouseX.current - xp.current)))
    yp.current = (yp.current += ((mouseY.current - yp.current)))
    circle.style.left = Object.values(xp) + "px"
    circle.style.top = Object.values(yp) + "px"
  }

  // https://codepen.io/falldowngoboone/pen/PwzPYv

  // function draw() {
  //   // Make sure the mouse position is set everytime
  //     // draw() is called.
  //   var x = mouse.x,
  //       y = mouse.y;
  //   // This loop is where all the 90s magic happens
  //   dots.forEach(function(dot, index, dots) {
  //     var nextDot = dots[index + 1] || dots[0];
  //     dot.x = x;
  //     dot.y = y;
  //     dot.draw();
  //     x += (nextDot.x - dot.x) * .6;
  //     y += (nextDot.y - dot.y) * .6;
  //   });
  // }

  // Dot.prototype.draw = function() {
  //   node.style.left = x + "px"
  //   node.style.top = y + "px"
  // }

  return (
    <Home>
      <Backdrop>
        <FullScreenVideo loop muted autoPlay poster="">
          <source src={ stars }  type="video/mp4"/>
          <track kind="captions" srcLang="en" src={ Captions } />
        </FullScreenVideo>

      </Backdrop>
      <Overlay>
        <FixedName>
          <div>
            <h1>EXPERIMENTAL</h1>
            <h2>UI Tricks</h2>
          </div>
        </FixedName>
        <Circle id="circle">
          {/* <CircleVideo loop muted autoPlay poster="">
            <source src={ stars }  type="video/mp4"/>
            <track kind="captions" srcLang="en" src={ Captions } />
          </CircleVideo> */}

        </Circle>
      </Overlay>
    </Home>
  )
}

const Home = styled.section `
  width: 100vw;
  height: 100vh;
`
const Backdrop = styled.div `
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #000;
  
`
const FullScreenVideo = styled.video `
  width: 100vw;
  height: auto;
  min-height: 100%;
  overflow: hidden;
  -webkit-transform: translate(-0%, -0%);
  -moz-transform: translate(-0%, -0%);
  -ms-transform: translate(-0%, -0%);
  transform: translate(-0%, -0%);
`

const Overlay = styled.div `
  // background: rgba(25,53,73,0.5); //blue
  position: relative;
  background-size: cover;
  height: 100%;
  z-index: 50;
`
const Trail = styled.div `
// .trail { /* className for the trail elements */
//   position: absolute;
//   height: 6px; width: 6px;
//   border-radius: 3px;
//   background: teal;
// }
`
const Circle = styled.div `
  width: 300px;
  height: 300px;
  position: absolute;
  border-radius: 50%;
  // background: url("${stars}");
  background: url("${bgImage}");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  -moz-box-shadow:    inset 0 0 20px #000000;
  -webkit-box-shadow: inset 0 0 20px #000000;
  box-shadow:         inset 0 0 20px #000000;
`
const CircleVideo = styled.video `
  width: 100vw;
  height: auto;
  min-height: 100%;
  overflow: hidden;
  -webkit-transform: translate(-0%, -0%);
  -moz-transform: translate(-0%, -0%);
  -ms-transform: translate(-0%, -0%);
  transform: translate(-0%, -0%);
`

const FixedName = styled.div `
  height: 100%;
  width: 100%;
  position: absolute;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  div {
    padding: 3rem;
    text-align: center;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    &:hover {
      text-shadow: 0px 0px 2px black, 0 0 25px black, 0 0 5px darkblue;
    }
  }
  h1 {
    font-size: calc(20px + 5vmin);
    font-family: 'Syne Mono', monospace;
    color: hsl(48, 89%, 60%);
  }
  h2 {
    font-size: calc(10px + 2vmin);
    font-family: 'Syne Mono', monospace;
    color: hsl(180, 96%, 80.2%);
  }
`



  // const [mouseX, setMouseX]=useState(0)
  // const [mouseY, setMouseY]=useState(0)
  // const [xp, setXp]=useState(0)
  // const [yp, setYp]=useState(0)
  // console.log('mouseX' + mouseX)
  // console.log('mouseY' + mouseY)

  // <Quadrants>
  //       <div>
  //         <StaticImage
  //           src="../images/ruby-lang-icon.svg"
  //           width={100}
  //           quality={95}
  //           formats={["AUTO", "WEBP", "AVIF"]}
  //           alt="A Gatsby astronaut"
  //           style={{ marginBottom: `1.45rem` }}
  //         />
  //       </div>
  //       <div>Hello</div>
  //       <div>Hello</div>
  //       <div>Hello</div>
  //     </Quadrants>

  //   const Quadrants = styled.div `
  //   height: 100%;
  //   width: 100%;
  //   position: absolute;
  //   display: inline-grid;
  //   grid-template-rows: 50% 50%;
  //   grid-template-columns: 50% 50%;
  // `


