import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from "../data/MenuData"
import { openSide } from "../components/Sidebar/index";

const Header = () => {
  return (
    <Nav>
      <NavLink to="/" className="logo">Explorix</NavLink>
      <Bars onClick={openSide} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink className="navigation" to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
        <NavBtnLink className="btn" to="/resume">Resume</NavBtnLink>
      </NavMenu>
        
    </Nav>
  )
}
  



export default Header


const Nav = styled.nav`
  background: #2B2D42;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  color: #fff;
  display: none;
  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavBtnLink = styled(Link)``