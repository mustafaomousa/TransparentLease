import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Drawer } from "@material-ui/core";
import LogoutButton from '../auth/LogoutButton';
import './navbar.css'

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';

const SideBarComponent = ({ setAuthenticated, sideHidden, setSideHidden, setWelcomeOpen }) => {
    const user = useSelector(state => state.user);

    if (user) return (
        <Drawer id="sidebar" anchor="left" open={sideHidden} >
            <div style={{ height: "100%" }} onMouseLeave={e => setSideHidden(false)}>
                <div className="sidebar-profile-container">
                    <div className="avatar-header">
                        <Avatar src={user.profile_image ? user.profile_image : src} />
                    </div>
                    <div className="avatar-footer">
                        {user.id &&
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Link to={`/${user.username}`}>{user.username}</Link>
                            </div>
                        }
                        {!user.id &&
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Link to={`/sign-up`}>Welcome guest</Link>
                            </div>}
                    </div>

                </div>
                <div className="sidebar-body">
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
                        <button onClick={() => setWelcomeOpen(true)} id="navlink" >Login</button>
                        <NavLink id="navlink" to="/sign-up">Sign up</NavLink>
                    </>}
                </div>
            </div>
        </Drawer>
    )
};

export default SideBarComponent