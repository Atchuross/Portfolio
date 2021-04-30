import React,{useEffect, useState} from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from "../data/MenuData"
import { openSide, closeSide } from "../components/Sidebar/index";
import './skillComp'
//import './styles/NavBar.scss'

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 1810){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <div id="stick">
      <Nav className='navigation' scrollNav={scrollNav}>
        <NavLink scrollNav={scrollNav} to="/" className="logo">Explorix</NavLink>
        <Bars onClick={openSide} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink 
            scrollNav={scrollNav} to={item.loc} className="navigation" key={index}>
              {item.title}
            </NavLink>
          ))}
          <NavBtnLink scrollNav={scrollNav} className="btn" to="/">Resume</NavBtnLink>
        </NavMenu>
      </Nav>
    </div>
  )
};
  



export default Header


const Nav = styled.nav`
  background: #222a30;
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
  color: #EDF2F4;
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

  @media screen and (max-width: 1440px){
    padding-right: 45px;
  }

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavBtnLink = styled(Link)``