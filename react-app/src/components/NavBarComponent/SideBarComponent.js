import { Sidebar, Stack, Avatar, Text } from 'grommet';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import LogoutButton from '../auth/LogoutButton';
import './navbar.css'

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';

const SideBarComponent = ({ setAuthenticated, sideHidden, setSideHidden }) => {
    const user = useSelector(state => state.user);

    if (user) return (
        <div id={sideHidden ? "sidebar" : "sidebar-hidden"} width="280px" flex style={{ boxShadow: "0" }} onMouseLeave={e => setSideHidden(false)}>
            <Sidebar>
                <div className="sidebar-profile-container">
                    <Stack alignSelf="start" align="center" anchor="top-right" style={{ paddingRight: "30px", paddingLeft: "20px" }}>
                        <Avatar src={user.profile_image ? user.profile_image : src} />
                    </Stack>
                    {user.id &&
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Link to={`/${user.username}`}>{user.username}</Link>
                            <Text>{user.email}</Text>
                        </div>
                    }
                    {!user.id &&
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Link to={`/sign-up`}>Welcome guest</Link>
                            {/* <Text>{user.email}</Text> */}
                        </div>}
                </div>
                <NavLink id="navlink" to="/">Home</NavLink>
                <NavLink id="navlink" to="/make/BMW">Deals</NavLink>
                {user.broker === true && (
                    <>
                        <NavLink id="navlink" to="/deal/create">New deal</NavLink>
                        <NavLink id="navlink" to="/deal/manage">Manage deals</NavLink>
                    </>
                )}
                <NavLink id="navlink" to="/about">About us</NavLink>
                <NavLink id="navlink" to="/contact">Contact us</NavLink>
                {user.id && <LogoutButton setAuthenticated={setAuthenticated} />}
                {!user.id && <>
                    <NavLink id="navlink" to="/login">Login</NavLink>
                    <NavLink id="navlink" to="/sign-up">Sign up</NavLink>
                </>}
            </Sidebar>
        </div>
    )
};

export default SideBarComponent