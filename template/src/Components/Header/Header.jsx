import React from "react";
import { Link } from "react-router-dom";
import {MainNav} from './MainNav.styled'
import {useState, useEffect} from 'react'
import styled from "styled-components";
import useIsOpenNavStore from './useIsOpenNavStore'

const Header = () => {
  const {isOpen, setIsOpen} = useIsOpenNavStore()
  const [shrinkHeader, setShrinkHeader] = useState(false);

  useEffect(() => {
    const handler = () => {
      let shrink = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? true : false;
      setShrinkHeader(shrink)
    }

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const Hamburger = styled.div`
  flex-direction: column;
  
  cursor: pointer;
  span{
    height: 5px;
    width: 25px;
    background-color: #000000;
    margin-bottom: 4px;
    border-radius: 5px;

    @media screen and (max-width: 768px){
      display: flex;
    }
  }
`

const Menu = styled.nav`
overflow: hidden;
display: flex;
justify-content: space-between;
align-items: center;
gap: 0.5rem;
position: relative;

@media (max-width: 768px){
  flex-direction: column;
  transition: max-height 0.3 ease-in;
  width: 100%;
  z-index: 50000;
  max-height: ${({isOpen}) => isOpen ? 'auto' : '0'};
}
`

const MenuLink = styled(Link)`
  padding: .4rem 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: red;
  transition: all 0.3s ease-in;
  background-color: #333;
  font-size: .9rem;
  &:hover{
    color: orange;
  }

  @media (max-width: 768px){
    display: block;
    width: 100%;
  }
`
  return (
    <MainNav shrinkHeader={shrinkHeader}>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
       <span></span>
       <span></span>
       <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
      <li>
        <MenuLink to="/">Home</MenuLink>
      </li>
      <li>
        <MenuLink to="/about">About</MenuLink>
      </li>
      <li>
        <MenuLink to="/login">Login</MenuLink>
      </li>
      </Menu>
    </MainNav>
  );

};

export default Header;