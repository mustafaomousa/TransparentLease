import React, { useState } from "react";
import { AppBar, Button } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import SideBarComponent from "./SideBarComponent";
import NotificationComponent from "../NotificationComponent";

import './navbar.css';

const NavBarComponent = ({ user, setAuthenticated, setWelcomeOpen }) => {
    const [sideHidden, setSideHidden] = useState(false)

    return (
        <div>
            <AppBar id="navbar">
                <Button id="sidebar-toggle" onClick={(e) => setSideHidden(true)} ><MenuIcon /></Button>
                <h3>TransparentLease</h3>
                <Button ><NotificationsActiveIcon /></Button>
            </AppBar>
            <NotificationComponent />
            <SideBarComponent user={user} sideHidden={sideHidden} setSideHidden={setSideHidden} setAuthenticated={setAuthenticated} setWelcomeOpen={setWelcomeOpen} />
        </div>
    )
};

export default NavBarComponent;