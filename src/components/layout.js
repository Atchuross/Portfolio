/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import '../components/styles/styles.scss'
import Sidebar from './Sidebar'
import Me from './meSection'
import Skill from './skillComp'
import Experiences from './Experiences'
import Project from './Project'
import Contact from './contact'


const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Sidebar/>
      <Header/>
      <Me />
      <Skill />
      <Experiences />
      <Project />
      <Contact />
        <main>{children}</main>
    </>
  )
}

export default Layout
