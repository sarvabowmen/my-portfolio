import React from 'react'
import { Icon, CloseIcon, SidebarContainer, SidebarWrapper, SideBtnWrap, SidebarRoute, SidebarLink, SidebarMenu } from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer onClick={toggle}  isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about"  onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover"  onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services"  onClick={toggle}>
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
