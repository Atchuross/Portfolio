import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { FaTimes } from 'react-icons/fa'
import { menuData } from "/src/data/MenuData"


const Sidebar = () => {
    return(
        <SidebarContainer id='side'>
            <Icon>
                <CloseIcon onClick={closeSide}/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {menuData.map((item, index) => (
                        <SidebarLink className="navigation" to={item.link} key={index}>
                            {item.title}
                        </SidebarLink>
                    ))}
                </SidebarMenu>
                <SideBtnWrap>
                <SidebarBtnLink className="btn-side" to="/resume">Resume</SidebarBtnLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

export function openSide() {
    document.getElementById("side").style.opacity  = "100%";
    document.getElementById("side").style.top = "0%";
    document.getElementById("side").style.width = "100%";
    console.log("Click !");
}

export function closeSide() {
    document.getElementById("side").style.display  = "0%";
    document.getElementById("side").style.top = "-1000%";
    console.log("Click !");
}

export const SidebarMenu = styled(Link)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    
    @media screen and (max-width: 600px){
        grid-template-rows(5, 60px);
    }
`

export const SidebarContainer = styled.aside`
    position: fixed; 
    background: #222a30;
    z-index: 999;
    height: calc(${window.screen.height}px);
    //width: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0; 
    transition: 0.5s ease-in-out;
    opacity: 0%;
    top: -100%;
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div `
    color: #fff;
`

export const SidebarLink = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #EDF2F4;
    cursor: pointer;

    &:hover{
        color: #2a9d8f;
        transition: 0.2s ease-in-out
    }
`

export const SideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`

export const SidebarBtnLink = styled(Link)`
    border-radius: 50px;
    background: #2a9d8f;
    white-space: nowrap;
    padding: 16px 64px;
    color: #EDF2F4;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`