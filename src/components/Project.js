import * as React from "react"
import './styles/projectStyle.scss'
import styled from 'styled-components'
import WavesReverse from './styles/WavesTransitionReverse.js'


const Project = () => {
  return (
    <Projectsection>
        <WavesReverse />
        <Whitediv />
        <Headersection className="AboutPersonal__Heading">.about(<span id="me2">me.skill</span>)</Headersection>
        <br/>
        <div className="fake-magicwall" id="home-magicwalle">
            <ul>
                <li id="litest1">
                    <section id="tile1" className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://jacekjeznach.com/wp-content/uploads/2017/10/Bez-nazwy-3-e1508357920340.jpg")`}}></section>
                    <div className="hover-content vcenter tile1-vcenter"></div>
                    <a href="/" className="colorbox cboxElement"></a>
                </li>
                <li id="litest2">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://jacekjeznach.com/wp-content/uploads/2019/11/ttelo.png")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="/" className="colorbox cboxElement"></a>
                </li>
                <li id="litest3">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://jacekjeznach.com/wp-content/uploads/2017/10/3.jpg"")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="/" className="colorbox cboxElement"></a>
                </li>
                <li id="litest4">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://jacekjeznach.com/wp-content/uploads/2019/01/Adrian-Flux-Motorsport-e1546707189414.jpg")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="/" className="colorbox cboxElement"></a>
                </li>
                <li id="litest5">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://jacekjeznach.com/wp-content/uploads/2017/10/ttelo.png")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="/" className="colorbox cboxElement"></a>
                </li>
                <li id="litest6">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://jacekjeznach.com/wp-content/uploads/2019/06/Bez-nazwy-3.jpg")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="/" className="colorbox cboxElement"></a>
                </li>
            </ul>
        </div>
    </Projectsection>
  )
}

export default Project


const Whitediv = styled.div`
    width: 100px;
    height: 2px;
    border: 1px solid #EDF2F4;
    margin: 0 auto;
    border-radius: 2px;
    margin-bottom: 50px;
`

export const Projectsection = styled.section`
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  @media (max-width: 1440px){
    height: 100%;
  }
`

export const Headersection = styled.h2`
  padding-bottom: 5%;
`