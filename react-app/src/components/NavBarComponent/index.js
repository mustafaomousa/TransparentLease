import React, { useState } from "react";
import { AppBar, Button } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import './navbar.css';
import SideBarComponent from "./SideBarComponent";
import NotificationComponent from "../NotificationComponent";

const NavBarComponent = ({ user, setAuthenticated, }) => {
    const [sideHidden, setSideHidden] = useState(false)
    return (
        <>
            <AppBar id="navbar">
                <Button icon={<MenuIcon />} focusIndicator={false} id="sidebar-toggle" onMouseEnter={(e) => setSideHidden(true)} />
                <h3>TransparentLease</h3>
                <Button icon={<NotificationsActiveIcon fontSize="20px" />} />
            </AppBar>
            <NotificationComponent />
            <SideBarComponent user={user} sideHidden={sideHidden} setSideHidden={setSideHidden} setAuthenticated={setAuthenticated} />
        </>
    )
};

export default NavBarComponent;