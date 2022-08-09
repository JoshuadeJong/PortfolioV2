import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuButton from "./components/MenuButton";
import LinkButton from "./components/LinkButton";



const pages = ['home', 'projects', 'timeline', 'about'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

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
                            <LinkButton text={page} onClick={handleCloseNavMenu}/>
                        ))}
                    </Box>


                    {/* Mobile */}
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'flex', sm: 'none' },
                            marginLeft: 'auto',
                    }}>
                        <MenuButton onClick={handleOpenNavMenu}/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;