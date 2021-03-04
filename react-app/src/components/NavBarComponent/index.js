import React from "react";
import { Box } from 'grommet';
import './navbar.css';


const NavBarComponent = (props) => (
    <Box id="navbar" tag="header" direction="row" align="center" justify="between" background="brand" elevation="medium" height="65px" pad {...props} />
);

export default NavBarComponent;