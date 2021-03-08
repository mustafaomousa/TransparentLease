import React, { useState } from "react";
import { Box, Button, Heading } from 'grommet';
import { AppBar } from "@material-ui/core"
import { Menu, Notification as AlertIcon } from "grommet-icons"
import './navbar.css';
import SideBarComponent from "./SideBarComponent";
import NotificationComponent from "../NotificationComponent";

const NavBarComponent = ({ user, setAuthenticated, }) => {
    const [sideHidden, setSideHidden] = useState(false)
    return (
        <>
            <AppBar id="navbar">
                <Button icon={<Menu />} focusIndicator={false} id="sidebar-toggle" onMouseEnter={(e) => setSideHidden(true)} />
                <Heading level="3">TransparentLease</Heading>
                <Button icon={<AlertIcon />} />
            </AppBar>
            <NotificationComponent />
            <SideBarComponent user={user} sideHidden={sideHidden} setSideHidden={setSideHidden} setAuthenticated={setAuthenticated} />
        </>
    )
};

export default NavBarComponent;