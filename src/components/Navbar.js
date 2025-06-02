import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import AALogo from '../assets/images/AA-logo.png';

const pages = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img
                src={AALogo}
                alt="AA Logo"
                style={{ height: 60, margin: '1rem auto' }}
            />
            <List>
                {pages.map((page) => {
                    const isActive = location.pathname === page.path;
                    return (
                        <ListItem
                            button
                            key={page.name}
                            component={Link}
                            to={page.path}
                            sx={{
                                color: isActive ? 'primary.main' : 'text.primary',
                                fontWeight: isActive ? 600 : 400,
                                backgroundColor: isActive ? 'action.selected' : 'transparent',
                            }}
                        >
                            <ListItemText primary={page.name} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(8px)',
                    boxShadow: 'none',
                }}
            >
                <Toolbar>
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            component="img"
                            src={AALogo}
                            alt="AA Logo"
                            sx={{ height: 60 }}
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {pages.map((page) => {
                            const isActive = location.pathname === page.path;
                            return (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    sx={{
                                        color: isActive ? 'primary.main' : 'text.primary',
                                        fontWeight: isActive ? 600 : 400,
                                        borderBottom: isActive ? '2px solid' : 'none',
                                        borderColor: isActive ? 'primary.main' : 'transparent',
                                        borderRadius: 0,
                                        mx: 1,
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    {page.name}
                                </Button>
                            );
                        })}
                    </Box>

                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
