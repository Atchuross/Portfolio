import * as React from "react"
import styled from 'styled-components'
import img8 from '../images/1.png'
import img1 from '../images/2.png'
import img2 from '../images/3.png'
import img3 from '../images/4.png'
import img4 from '../images/5.png'
import img5 from '../images/6.png'
import img6 from '../images/7.png'
import img7 from '../images/8.png'
import img9 from '../images/9.png'
import img10 from '../images/10.png'
import img11 from '../images/11.png'
import img12 from '../images/12.png'
import {Helmet} from "react-helmet";
import testScript from '../data/testScript'
import HomePage from './HomePage'
import bgSvg from "../images/Wavebg.svg"

const Me = () => {
  return (
    <Section>
      <Helmet>
      <link rel="canonical" href={testScript} />
      </Helmet>
        <HomePage />
        <Image src={img8} data-speed="9" className="layer" />
        <Image src={img1} data-speed="6" className="layer" />
        <Image src={img2} data-speed="6" className="layer" />
        <Image src={img3} data-speed="9" className="layer" />
        <Image src={img4} data-speed="7" className="layer" />
        <Image className="img6" src={img5} data-speed="6" className="layer" />
        <Image src={img6} data-speed="6" className="layer" />
        <Image className="img7" src={img7} data-speed="7" className="layer" />
        <Image src={img9} data-speed="9" className="layer" />
        <Image src={img10} data-speed="9" className="layer" />
        <Image src={img11} data-speed="7" className="layer" />
        <Image src={img12} data-speed="9" className="layer" />
    </Section>
    
  )
}
  



export default Me

export const Section = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1440px){
      .img5{
        display: none;
      }
    }
`

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`