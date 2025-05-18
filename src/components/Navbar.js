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
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import AALogo from '../assets/images/AA-logo.png';

const pages = [
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img
        src={AALogo}
        alt="AA Logo"
        style={{ height: 60, margin: '1rem auto' }}
      />
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
      <AppBar
        position="fixed" // use fixed for better overlay
        elevation={0} // removes shadow
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: 'blur(8px)', // optional: glass effect
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
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
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
