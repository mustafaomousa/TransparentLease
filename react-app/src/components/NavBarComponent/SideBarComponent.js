import { Box, Nav, Sidebar, Button, Stack, Avatar, Text } from 'grommet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCurrentUser } from '../../store/user';
import LogoutButton from '../auth/LogoutButton';
import './navbar.css'

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';

const SideBarHeader = ({ user }) => (
    < Box align="flex-start" gap="small" direction="row" margin={{ bottom: "large" }}>
        <Stack alignSelf="start" align="center" anchor="top-right">
            <Avatar src={user.profile_image ? user.profile_image : src} />
            {console.log(user)}
        </Stack>
        <Text>{user.username}</Text>
    </Box >
)

const SideBarFooter = ({ setAuthenticated }) => (
    <Nav style={{ width: "100%", textAlign: "center" }}>
        <Box>
            <NavLink to="/about">About us</NavLink>
        </Box>
        <Box>
            <NavLink to="/contact">Contact us</NavLink>
        </Box>
        <div style={{ textAlign: "center" }}>
            <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
    </Nav>
)

const SideBarComponent = ({ setAuthenticated, visible }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    useEffect(() => {
        dispatch(getCurrentUser())
    }, [])

    if (user) return (
        <div id={visible ? "hidden" : "sidebar"} width="280px" flex style={{ boxShadow: "0" }}>
            <Sidebar footer={<SideBarFooter setAuthenticated={setAuthenticated} />} header={<SideBarHeader user={user} />}>
                <Nav id="sidebar-nav" style={{ display: "flex", alignItems: "center" }}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/make/BMW">Deals</NavLink>
                </Nav>
            </Sidebar>
        </div>
    )
};

export default SideBarComponent