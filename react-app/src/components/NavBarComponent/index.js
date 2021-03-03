import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { Menu, Dropdown, Icon, Button, Form, Input, Search, Grid, Sidebar, Segment, Header, Image } from "semantic-ui-react";
import { Avatar, Anchor, Nav, Grommet, Header, Box, Sidebar, Button } from 'grommet';
import { grommet } from 'grommet/themes';
import LogoutButton from "../auth/LogoutButton"
import './navbar.css'


const NavBarComponent = (props) => {
    const history = useHistory();
    const [activeItem, setActiveItem] = useState("")

    const updateActiveItem = (e) => {
        setActiveItem(e.target.id)
        history.push(`/${e.target.id}`)
    }



    return (
        <Box id="navbar" tag="header" direction="row" align="center" justify="between" background="brand" elevation="medium" height="65px" pad {...props}>

        </Box>
    )
};

export default NavBarComponent