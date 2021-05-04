import * as React from "react"
import './styles/projectStyle.scss'
import styled from 'styled-components'
import WavesReverse from './styles/WavesTransitionReverse.js'


const Project = () => {
  return (
    <Projectsection>
        <WavesReverse />
        <Whitediv />
        <Headersection id="projects" className="AboutPersonal__Heading">.<span id="me2">projects</span>()</Headersection>
        <br/>
        <div className="fake-magicwall" id="home-magicwalle">
            <ul>
                <li id="litest1">
                    <section id="tile1" className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Swift_logo.png/600px-Swift_logo.png")`}}></section>
                    <div className="hover-content vcenter tile1-vcenter"></div>
                    <a href="https://github.com/Atchuross/Combat-RPG-Swift" target="_blank" className="colorbox cboxElement"></a>
                </li>
                <li id="litest2">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://logowik.com/content/uploads/images/flutter5786.jpg")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="https://github.com/Atchuross/CESI_BORNE-Public" target='_blank' className="colorbox cboxElement"></a>
                </li>
                <li id="litest3">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Swift_logo.png/600px-Swift_logo.png")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="https://github.com/Atchuross/Landscape-Swift-Tuto" target="_blank" className="colorbox cboxElement"></a>
                </li>
                <li id="litest4">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="https://github.com/Atchuross/Snake_JS" target="_blank" className="colorbox cboxElement"></a>
                </li>
                <li id="litest5">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://d33wubrfki0l68.cloudfront.net/21e2a22d0240a5a1088a7ca485328bec4d836c49/b2a49/img/posts/java_logo_640.jpg")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="https://github.com/Atchuross/Projet_JAVA_DI" target="_blank" className="colorbox cboxElement"></a>
                </li>
                <li id="litest6">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://zupimages.net/up/21/17/8bpa.png")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="https://github.com/tomlinus/projet-web-DI" target="_blank" className="colorbox cboxElement"></a>
                </li>
                <li id="litest6">
                    <section className="magic-wall_item lazyloaded" style={{backgroundImage: `url("https://agilecontinental.com/wp-content/uploads/2018/03/symfony.png")`}}></section>
                    <div className="hover-content vcenter"></div>
                    <a href="https://github.com/Atchuross/HorlogeSymfony" target="_blank" className="colorbox cboxElement"></a>
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