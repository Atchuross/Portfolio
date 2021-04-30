/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React,{useEffect, Component, useState }  from 'react';
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import '../components/styles/styles.scss'
import Sidebar from './Sidebar'
import Me from './meSection'
import MouseScroll from './styles/mouseAnimated'
import Skill from './skillComp'
import Experiences from './Experiences'
import Waves from './styles/WavesTransition'


const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    <GlobalStyle />
      <Sidebar/>
      <Header/>
      <Me />
      <Skill />
      <Experiences />
        <main>{children}</main>
    </>
  )
}

export default Layout
