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
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        px: 3,
        py: 2,
      }}
    >
      {/* Header with Logo and Close Icon */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          component={Link}
          to="/"
          onClick={handleDrawerToggle}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Box component="img" src={AALogo} alt="AA Logo" sx={{ height: 50 }} />
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <List>
          {pages.map((page) => {
            const isActive = location.pathname === page.path;
            return (
              <ListItem
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleDrawerToggle}
                sx={{
                  justifyContent: 'center',
                  py: 2,
                  borderRadius: 2,
                  mb: 1,
                  backgroundColor: isActive ? 'action.selected' : 'transparent',
                  color: isActive ? 'primary.main' : 'text.primary',
                  fontWeight: isActive ? 600 : 400,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemText
                  primary={page.name}
                  sx={{ textAlign: 'center' }}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Optional Footer (socials, etc.) */}
      <Divider sx={{ mb: 2 }} />
      <Box
        sx={{
          textAlign: 'center',
          pb: 1,
          color: 'text.secondary',
          fontSize: '0.8rem',
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

          {/* Desktop Nav */}
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

          {/* Mobile Menu Icon */}
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
