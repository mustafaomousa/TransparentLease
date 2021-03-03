import { Box, Nav, Sidebar, Button, Stack, Avatar, Text } from 'grommet';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarHeader = () => (
    <Box align="center" gap="small" direction="row" margin={{ bottom: "large" }}>
        <Stack alignSelf="start" align="center" anchor="top-right">
            <Avatar />
            {/* <Box>Mustafa Mousa</Box> */}
        </Stack>
        <Text>Mustafa Mousa</Text>
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
        <Box width="medium" elevation='small' align='center' justify='center' flex>
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