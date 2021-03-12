import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Avatar, Button, Divider, Drawer, Input, makeStyles, withStyles } from "@material-ui/core";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import SearchRounded from "@material-ui/icons/SearchRounded";
import MailOutlineOutlined from "@material-ui/icons/MailOutlineOutlined"
import NotificationImportantOutlined from "@material-ui/icons/NotificationImportantOutlined";
import Settings from "@material-ui/icons/Settings";
import LogoutButton from '../auth/LogoutButton';
import './navbar.css'

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';

const SideBarComponent = ({ setAuthenticated, sideHidden, setSideHidden, setWelcomeOpen }) => {
    const history = useHistory();
    const user = useSelector(state => state.user);

    const StyledDrawer = withStyles({
        paperAnchorLeft: {
            backgroundColor: "#383331"
        }
    })(Drawer)

    const StyledSettings = withStyles({
        root: {
            color: "whitesmoke", "&:hover": {
                color: "lightgray"
            }
        }
    })(Settings);

    const StyledNotificationImportantOutlined = withStyles({
        root: {
            color: "#f6b800",
            "&:hover": {
                color: "#c3950c"
            }
        }
    })(NotificationImportantOutlined);

    const StyledCloseOutlined = withStyles({
        root: {
            color: "whitesmoke",
            "&:hover": {
                color: "red"
            }
        }
    })(CloseOutlined);

    const StyledMailOutlineOutlined = withStyles({
        root: {
            color: "lightgray",
            "&:hover": {
                color: "gray"
            }
        }
    })(MailOutlineOutlined)

    const StyledSearchRounded = withStyles({
        root: {
            color: "whitesmoke",
            marginLeft: "25px"
        }
    })(SearchRounded)

    const StyledAvatar = withStyles({
        root: {
            width: "65px",
            height: "65px"
        }
    })(Avatar)


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
                                <Link style={{ color: "whitesmoke" }} to={`/${user.username}`}>{user.username}</Link>
                                <p>{user.broker === true && "Broker"}</p>
                                <p style={{ color: "whitesmoke", fontSize: "14px", fontStyle: "italic" }}>{user.broker !== true && "Smart shopper"}</p>
                            </div>
                        }
                        {!user.id &&
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Link style={{ color: "whitesmoke" }} to={`/sign-up`}>Welcome guest</Link>
                            </div>}
                    </div>
                </div>
                <Divider />
                <div className="sidebar-search-container">
                    <Input placeholder="Search"></Input>
                    <StyledSearchRounded />
                </div>
                <Divider />
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

                </div>
                <div className="sidebar-controls-container">
                    {user.id && <LogoutButton setAuthenticated={setAuthenticated} />}
                    {!user.id && <>
                        <Button onClick={() => setWelcomeOpen(true)} id="navlink" >Login</Button>
                        <Button id="navlink" onClick={() => history.push('/sign-up')}>Sign up</Button>
                    </>}
                    <div className="sidebar-controls-container-buttons">
                        <StyledMailOutlineOutlined />
                        <StyledNotificationImportantOutlined />
                        <StyledSettings />
                    </div>
                </div>
            </div>
        </StyledDrawer>
    )
};

export default SideBarComponent