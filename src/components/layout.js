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


const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Sidebar />
      <Header />
        <main>{children}</main>
    </>
  )
}

export default Layout
