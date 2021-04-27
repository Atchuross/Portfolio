/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"
import '../components/styles/styles.scss'
import Sidebar from './Sidebar'
import Me from './meSection'
import MouseScroll from './styles/mouseAnimated'
import Skill from './skillComp'


const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Sidebar />
      <Header />
      <Me />
      <Skill />
        <main>{children}</main>
    </>
  )
}

export default Layout