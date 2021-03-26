import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, Redirect, useHistory } from 'react-router-dom';
import { Button, Divider, Input } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import { StyledDrawer, StyledAvatar, StyledSearchRounded, StyledMailOutlineOutlined, StyledNotificationImportantOutlined, StyledSettings, StyledCloseOutlined } from "../../component_utils/styledElements";
import LogoutButton from '../auth/LogoutButton';

import './navbar.css'

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';

const SideBarComponent = ({ setAuthenticated, sideHidden, setSideHidden, setWelcomeOpen }) => {
    const history = useHistory();

    const user = useSelector(state => state.user);

    if (user) return (
        <StyledDrawer id="sidebar" anchor="left" open={sideHidden} >
            <div className="sidebar-container" >
                <div className="sidebar-close-container">
                    <Button onClick={() => setSideHidden(false)}>
                        <StyledCloseOutlined id="close-sidebar-button" fontSize="large" style={{ marginRight: "10px" }} />
                    </Button>
                </div>
                <Divider />
                <div className="sidebar-header">
                    <div className="avatar-header">
                        <StyledAvatar src={user.profile_image ? user.profile_image : src} />
                    </div>
                    <div className="avatar-footer">
                        {user.id &&
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Link style={{ color: "whitesmoke" }} onClick={() => setSideHidden(false)} to={user.broker ? `/${user.username}` : '/portfolio'}>{user.username}</Link>
                                <p>{user.broker === true && "Broker"}</p>
                                <p style={{ color: "whitesmoke", fontSize: "14px", fontStyle: "italic" }}>{user.broker !== true && "Smart shopper"}</p>
                            </div>
                        }
                        {!user.id &&
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Link style={{ color: "whitesmoke" }} onClick={() => setSideHidden(false)} to={`/sign-up`}>Welcome guest</Link>
                            </div>}
                    </div>
                </div>
                <Divider />
                <div className="sidebar-search-container">
                    <Input placeholder="Search"></Input>
                    <StyledSearchRounded onClick={() => setSideHidden(false)} />
                </div>
                <Divider />
                <div className="sidebar-body">
                    <NavLink id="navlink" onClick={() => setSideHidden(false)} to="/">Home</NavLink>
                    <NavLink id="navlink" onClick={() => setSideHidden(false)} to="/locate">Locate a deal</NavLink>
                    {user.broker === true && <NavLink id="navlink" onClick={() => setSideHidden(false)} to="/deal">Deal Manager</NavLink>}
                    {user.broker === false && <NavLink id="navlink" onClick={() => setSideHidden(false)} to="/portfolio">Portfolio</NavLink>}
                </div>
                <div className="sidebar-controls-container">
                    {user.id && <LogoutButton setAuthenticated={setAuthenticated} />}
                    {!user.id && <>
                        <Button onClick={() => setWelcomeOpen(true)} id="navlink" >Login</Button>
                        <Button onClick={() => {
                            setSideHidden(false)
                            history.push('/sign-up')
                        }} id="navlink" >Sign up</Button>
                    </>}
                    <div className="sidebar-controls-container-buttons">
                        <LinkedInIcon style={{ color: "white" }} onClick={() => <Redirect to="https://www.linkedin.com/in/mustafa-mousa-8b8053157/" />} />
                        <GitHubIcon style={{ color: "white" }} />
                        <EmailIcon style={{ color: "white" }} />
                    </div>
                </div>
            </div>
        </StyledDrawer>
    )
};

export default SideBarComponent