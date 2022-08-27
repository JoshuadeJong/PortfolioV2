import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {
    Divider,
    List,
    SwipeableDrawer
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import EmailIcon from '@mui/icons-material/Email';


import SessionContext from "provider/SessionContext";
import Views from "constant/views";
import MenuButton from "./components/MenuButton";
import LinkButton from "./components/LinkButton";
import ResumeButton from "./components/ResumeButton";
import MobileMenuItem from "./components/MobileMenuItem";
import DescriptionIcon from '@mui/icons-material/Description';


const pages = [Views.ABOUT, Views.EMPLOYMENT, Views.SKILLS, Views.PROJECTS];

function Header() {
    const {jumpToView} = React.useContext(SessionContext)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setIsMenuOpen(open)
        };

    const getIcon = (page: Views) => {
        switch (page) {
            case Views.HOME:
                return <HomeIcon />
            case (Views.ABOUT):
                return <FaceIcon />
            case Views.EMPLOYMENT:
                return <WorkIcon />
            case Views.SKILLS:
                return <SchoolIcon />
            case Views.PROJECTS:
                return <TerminalIcon />
            case Views.CONNECT:
                return <EmailIcon />
        }
    }

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
                            <LinkButton text={page} onClick={() => jumpToView(page)}/>
                        ))}
                        <ResumeButton text="Resume" onClick={ () => console.log("Implement the resume button")}/>
                    </Box>


                    {/* Mobile */}
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'flex', sm: 'none' },
                            marginLeft: 'auto',
                    }}>
                        <MenuButton onClick={toggleDrawer(true)}/>
                        <SwipeableDrawer
                            anchor='top'
                            open={isMenuOpen}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                        >
                            <List>
                                {pages.map((page) => (
                                    <MobileMenuItem
                                        text={page}
                                        icon={getIcon(page)}
                                        onClick={() => {setIsMenuOpen(false); jumpToView(page)}}
                                    />
                                ))}
                                <MobileMenuItem
                                    text={Views.CONNECT}
                                    icon={getIcon(Views.CONNECT)}
                                    onClick={() => {setIsMenuOpen(false); jumpToView(Views.CONNECT)}}
                                />
                            </List>
                            <Divider />
                            <List>
                                <MobileMenuItem
                                    text='Resume'
                                    icon={<DescriptionIcon />}
                                    onClick={() => {setIsMenuOpen(false); console.log("Implement the resume button")}}
                                />
                            </List>
                        </SwipeableDrawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;