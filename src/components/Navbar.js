import React, { useState, useCallback } from 'react';
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
  Divider,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import AALogo from '../assets/images/AA-logo.png';

const pages = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  const drawer = (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        bgcolor: 'background.default',
        px: 3,
        py: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link to="/" onClick={handleDrawerToggle}>
          <Box component="img" src={AALogo} alt="AA Logo" sx={{ height: 50 }} />
        </Link>
        <IconButton onClick={handleDrawerToggle} aria-label="Close Menu">
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <List>
          {pages.map(({ name, path }) => (
            <ListItem
              key={name}
              component={Link}
              to={path}
              onClick={handleDrawerToggle}
              sx={{
                justifyContent: 'center',
                py: 2,
                mb: 1,
                borderRadius: 2,
                bgcolor: isActive(path) ? 'action.selected' : 'transparent',
                color: isActive(path) ? 'primary.main' : 'text.primary',
                fontWeight: isActive(path) ? 600 : 400,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <ListItemText primary={name} sx={{ textAlign: 'center' }} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Divider sx={{ mb: 2 }} />
      <Box
        sx={{
          textAlign: 'center',
          pb: 1,
          fontSize: '0.8rem',
          color: 'text.secondary',
        }}
      >
        &copy; {new Date().getFullYear()} AA Portfolio
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Link to="/" aria-label="Home">
            <Box
              component="img"
              src={AALogo}
              alt="AA Logo"
              sx={{ height: 60, mr: 2 }}
            />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                component={Link}
                to={path}
                sx={{
                  mx: 1,
                  borderBottom: isActive(path) ? '2px solid' : 'none',
                  borderColor: isActive(path) ? 'primary.main' : 'transparent',
                  fontWeight: isActive(path) ? 600 : 400,
                  color: isActive(path) ? 'primary.main' : 'text.primary',
                  borderRadius: 0,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {name}
              </Button>
            ))}
          </Box>

          {/* Mobile Toggle */}
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
            aria-label="Open Menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
