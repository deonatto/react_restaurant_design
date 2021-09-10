import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {

    return (
        <SidebarContainer isOpen = {isOpen}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to ="/"> Pizzas</SidebarLink>
                <SidebarLink to ="/"> Deserts</SidebarLink>
                <SidebarLink to ="/"> Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
