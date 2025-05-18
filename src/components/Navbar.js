import React from 'react';

import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const pages = [
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/work' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const drawer = (
        <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Amadhya
            </Typography>
            <List>
                {pages.map((page) => (
                    <ListItem button key={page.name} component={Link} to={page.path}>
                        <ListItemText primary={page.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static" sx={{ bgcolor: theme.palette.background.paper }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Amadhya
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {pages.map((page) => (
                            <Button key={page.name} component={Link} to={page.path} sx={{ color: 'text.primary' }}>
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                sx={{ display: { sm: 'none' } }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
