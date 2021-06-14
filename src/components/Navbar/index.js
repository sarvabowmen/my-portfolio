import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = ({toggle}) => {
    return (
      <>
      <Nav>
          <NavbarContainer>
              <NavLogo to="/">
                  Sarvabowmen</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to="skills">Skills</NavLinks>
                  </NavItem>
              </NavMenu>
          </NavbarContainer>
      </Nav>
      </>
    )
}

export default Navbar;
