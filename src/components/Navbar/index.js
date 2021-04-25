import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon } from './NavbarElements';
const Navbar = () => {
    return (
      <>
      <Nav>
          <NavbarContainer>
              <NavLogo to="/">
                  Hello</NavLogo>
              <MobileIcon>
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
          </NavbarContainer>
      </Nav>
      </>
    )
}

export default Navbar;
