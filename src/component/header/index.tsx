import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import StateContext from "provider/StateContext";
import Views from "constant/views";
import MenuButton from "./components/MenuButton";
import LinkButton from "./components/LinkButton";



const pages = [Views.ABOUT, Views.EMPLOYMENT, Views.SKILLS, Views.PROJECTS];

function Header() {
    const {jumpToView} = React.useContext(StateContext)

    return (
        <AppBar position="relative" color="transparent" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop */}
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: {xs: 'none', sm: 'flex'},
                            marginLeft: 'auto',
                        }}>
                        {pages.map((page) => (
                            // TODO: Add ID for each Link Button
                            <LinkButton text={page} onClick={() => jumpToView(page)}/>
                        ))}
                        <LinkButton text="Resume" onClick={ () => console.log("Implement the resume button")} variant={'outlined'}/>
                    </Box>


                    {/* Mobile */}
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'flex', sm: 'none' },
                            marginLeft: 'auto',
                    }}>
                        <MenuButton onClick={() => console.log("Implement the mobile menu button")}/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;