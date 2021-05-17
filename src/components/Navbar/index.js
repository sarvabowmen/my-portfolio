import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = ({toggle}) => {
    return (
      <>
      <Nav>
          <NavbarContainer>
              <NavLogo to="/">
                  Hello</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to="about">About</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="discover">Discver</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="services">Services</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to="signup">SignUp</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/signin">
                    Signin
                  </NavBtnLink>
              </NavBtn>
          </NavbarContainer>
      </Nav>
      </>
    )
}

export default Navbar;
