import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { SOCIAL_PROFILES } from '../constants/seo';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: SOCIAL_PROFILES.github },
  { label: 'LinkedIn', href: SOCIAL_PROFILES.linkedin },
  { label: 'Email', href: `mailto:${SOCIAL_PROFILES.email}` },
];

const PAGE_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      borderTop: '1px solid',
      borderColor: 'rgba(255,255,255,0.08)',
      bgcolor: '#090E13',
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
          alignItems: 'end',
          gap: { xs: 3.5, md: 8 },
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          >
            Open to thoughtful collaborations
          </Typography>
          <Typography variant="h2" sx={{ maxWidth: 700 }}>
            Have a product problem worth solving?
          </Typography>
        </Box>

        <Link
          component={RouterLink}
          to="/contact"
          underline="none"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: 'text.primary',
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
            fontSize: { xs: '1.35rem', md: '1.55rem' },
            '& svg': { transition: 'transform 0.2s ease' },
            '&:hover': {
              color: 'primary.main',
              '& svg': { transform: 'translateX(5px)' },
            },
          }}
        >
          Let&apos;s talk
          <ArrowForward />
        </Link>
      </Box>

      <Box
        sx={{
          py: 3,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr auto auto' },
          alignItems: 'center',
          gap: { xs: 2.5, md: 5 },
          borderTop: '1px solid rgba(255,255,255,0.09)',
        }}
      >
        <Typography
          component={RouterLink}
          to="/"
          variant="body2"
          sx={{ color: 'text.primary', fontWeight: 600, textDecoration: 'none' }}
        >
          Amadhya Anand · Amsterdam
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>
          {PAGE_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              component={RouterLink}
              to={to}
              color="text.secondary"
              underline="none"
              variant="body2"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              {label}
            </Link>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 2.5 } }}>
          {SOCIAL_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              color="text.secondary"
              underline="none"
              variant="body2"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.4,
                '&:hover': { color: 'primary.main' },
              }}
            >
              {label}
              <ArrowOutward sx={{ fontSize: 14 }} />
            </Link>
          ))}
        </Box>
      </Box>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', pb: 3.5 }}
      >
        © {new Date().getFullYear()} Amadhya Anand
      </Typography>
    </Container>
  </Box>
);

export default React.memo(Footer);
