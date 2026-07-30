import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AALogo from '../assets/images/AA-logo.png';

const pages = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  const NavLink = ({ name, path, mobile = false }) => (
    <Button
      component={Link}
      to={path}
      aria-current={isActive(path) ? 'page' : undefined}
      sx={{
        minHeight: mobile ? 64 : 44,
        justifyContent: mobile ? 'flex-start' : 'center',
        width: mobile ? '100%' : 'auto',
        px: mobile ? 0 : 1.75,
        borderRadius: mobile ? 0 : 2,
        color: isActive(path) ? 'text.primary' : 'text.secondary',
        fontSize: mobile ? '2rem' : '0.95rem',
        fontFamily: mobile ? '"Space Grotesk", sans-serif' : 'inherit',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: mobile ? 0 : '50%',
          bottom: mobile ? 4 : 3,
          width: isActive(path) ? (mobile ? 40 : 20) : 0,
          height: 2,
          bgcolor: 'primary.main',
          transform: mobile ? 'none' : 'translateX(-50%)',
          transition: 'width 0.2s ease',
        },
        '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
      }}
    >
      {name}
    </Button>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(9, 14, 19, 0.88)' : 'transparent',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(255,255,255,0.08)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, sm: 76 } }}>
            <Link to="/" aria-label="Amadhya Anand home">
              <Box
                component="img"
                src={AALogo}
                alt=""
                sx={{ display: 'block', width: 40, height: 40, objectFit: 'contain' }}
              />
            </Link>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {pages.map((page) => (
                <NavLink key={page.path} {...page} />
              ))}
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{ ml: 1.5, minHeight: 42, px: 2.25 }}
              >
                Let&apos;s talk
              </Button>
            </Box>

            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, color: 'text.primary' }}
              aria-label="Open navigation"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{ paper: { sx: { width: '100%', bgcolor: '#0B1016' } } }}
      >
        <Container
          maxWidth="sm"
          sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', py: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component="img" src={AALogo} alt="" sx={{ width: 42, height: 42 }} />
            <Box sx={{ flex: 1 }} />
            <IconButton onClick={handleDrawerToggle} aria-label="Close navigation">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            component="nav"
            aria-label="Primary navigation"
            sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1 }}
          >
            {pages.map((page) => (
              <NavLink key={page.path} {...page} mobile />
            ))}
            <NavLink name="Contact" path="/contact" mobile />
          </Box>

          <Box sx={{ pb: 3 }}>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              fullWidth
              sx={{ minHeight: 54 }}
            >
              Start a conversation
            </Button>
          </Box>
        </Container>
      </Drawer>
    </>
  );
};

export default Navbar;
