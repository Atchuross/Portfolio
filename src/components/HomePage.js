import * as React from "react"
import styled from 'styled-components'
import './styles/mouseAnimte.scss'
import useWindowDimensions from './useWindowDimensions'


const HomePage = () => {
  // const { height, width } = useWindowDimensions();
  // const widthmodif = (width - 500) + "px"
  return (
    <Section >
            <h2 className="layer" data-speed="1" id="me">Hi, I'm <span id="me2"> &nbsp;Clément</span></h2>
            <p className="layer" data-speed="2" id="presentation" data-speed="1">Second-year IT developper student, <br/>my life-long study and practice code<br /> with some language like C#, HTML/CSS, Javascript.<br/> You can find several projects on ".projects()" </p>
            <section id="mouseAnimate">
                <div className="mouse"></div>
                <p id="scroll">Scroll</p>
            </section>
    </Section>
  )
}

export default HomePage

const Section = styled.div`
    width: 1200px;
    @media (max-width: 1440px) {
        padding: 0rem 20px !important;
        width: 850px !important;
    }
    @media (max-width: 768px) {
        padding: 0rem 20px !important;
        width: width - 500px;
        height: 400px;
    }
`