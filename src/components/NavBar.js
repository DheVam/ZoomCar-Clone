import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './Assets/logo.svg';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <Logo>
            <img src={logo} alt="" ></img>
          </Logo>
          <NavLink to='/1' activeStyle>
            OFFERS
          </NavLink>
          <NavLink to='/2' activeStyle>
            SUBSCRIPTION
          </NavLink>
          <NavLink to='/3' activeStyle>
            AMIGO
          </NavLink>
          <NavLink to='/4' activeStyle>
            ZMS
          </NavLink>
          <NavLink to='/5' activeStyle>
            MOBILE APP
          </NavLink>
          <NavLink to='/6' activeStyle>
            SIGN UP
          </NavLink>
          <NavLink to='/7' activeStyle>
            LOGIN
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};


const Nav = styled.nav`
 position: relative;
 background-color: #33414F;
 cursor: default;
 width: 100%;
 height: 64px;
 display: flex;
 align-items: center;
 justify-content: end;
 position: fixed;
 top:0;
 z-index: 999;
 `;

const NavLink = styled(Link)`
  color: white ;
  display: flex;
  align-items: center;
  text-decoration: None;
  font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; 
  font-size: 18px;
  letter-spacing: 0px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
.button{
    border: 1px solid white;
    padding: 10px;
    font-weight: bold;
} 
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  white-space: nowrap; 
  @media screen and (max-width: 570px) {
    display: none;
  }
 `;

const Logo = styled.div`
  img{
    position: absolute;
    left: 15px;
    top: 17px;
    width: 105px;
    height: 27px;
  }
 `



export default Navbar;
