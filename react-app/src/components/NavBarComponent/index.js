import React, { useState } from "react";
import { Box, Button, Heading } from 'grommet';
import { Menu, Notification as AlertIcon } from "grommet-icons"
import './navbar.css';
import SideBarComponent from "./SideBarComponent";


const NavBarComponent = ({ user, setAuthenticated, }) => {
    const [sideHidden, setSideHidden] = useState(false)
    return (
        <>
            <Box id="navbar" tag="header" direction="row" align="center" justify="between" background="brand" elevation="medium" height="65px" pad >
                <Button icon={<Menu />} focusIndicator={false} id="sidebar-toggle" onMouseEnter={(e) => setSideHidden(true)} />
                <Heading level="3">TransparentLease</Heading>
                <Button icon={<AlertIcon />} />

            </Box>
            <SideBarComponent user={user} sideHidden={sideHidden} setSideHidden={setSideHidden} setAuthenticated={setAuthenticated} />
        </>
    )
};

export default NavBarComponent;