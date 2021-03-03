import { Box, Nav, Sidebar, Button, Stack, Avatar, Text } from 'grommet';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const src = 'https://c0.klipartz.com/pngpicture/124/934/gratis-png-iconos-de-computadora-persona-avatar.png';

const SideBarHeader = () => (
    <Box align="flex-start" gap="small" direction="row" margin={{ bottom: "large" }}>
        <Stack alignSelf="start" align="center" anchor="top-right">
            <Avatar src={src} />
            {/* <Box>Mustafa Mousa</Box> */}
        </Stack>
        <Text>Guest</Text>
    </Box>
)

const SideBarFooter = () => (
    <Nav>
        <Box>
            <NavLink to="/about">About us</NavLink>
        </Box>
        <Box>
            <NavLink to="/contact">Contact us</NavLink>
        </Box>
    </Nav>
)

const SideBarComponent = () => {
    return (
        <Box id="sidebar" width="230px" height="100%" elevation='large' align='start' justify='center' flex>
            <Sidebar height="100%" footer={<SideBarFooter />} header={<SideBarHeader />}>
                <Nav>
                    <Button>
                        <Box>
                            <NavLink to="/">Home</NavLink>
                        </Box>
                    </Button>
                    <Button>
                        <Box>
                            <NavLink to="/make/BMW">Deals</NavLink>
                        </Box>
                    </Button>
                </Nav>
            </Sidebar>
        </Box>
    )
};

export default SideBarComponent