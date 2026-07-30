import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Meta, Title } from 'react-head';

import CanonicalLink from '../components/CanonicalLink';
import { SEO_CONFIG, SOCIAL_PROFILES } from '../constants/seo';

const contactLinks = [
  {
    label: 'Email',
    value: SOCIAL_PROFILES.email,
    href: `mailto:${SOCIAL_PROFILES.email}`,
    icon: <EmailOutlined />,
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: SOCIAL_PROFILES.linkedin,
    icon: <LinkedIn />,
  },
  {
    label: 'GitHub',
    value: 'Explore the code',
    href: SOCIAL_PROFILES.github,
    icon: <GitHub />,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [1, 0.96, 0.64]
  );
  const linksY = useTransform(scrollYProgress, [0, 1], [0, 210]);

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:${SOCIAL_PROFILES.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Box component="main" sx={{ minHeight: '100vh' }}>
      <Title>Contact | Amadhya Anand Portfolio</Title>
      <Meta
        name="description"
        content="Get in touch with Amadhya Anand for collaborations, freelance work, or product engineering opportunities."
      />
      <Meta name="keywords" content="Amadhya Anand, contact, hire developer, freelance, collaboration" />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="Contact | Amadhya Anand Portfolio" />
      <Meta property="og:description" content="Start a conversation with Amadhya Anand about software, products, or collaboration." />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/contact`} />
      <Meta property="og:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`} />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/contact`} />

      <Box
        ref={heroRef}
        component="section"
        sx={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          isolation: 'isolate',
          background:
            'radial-gradient(circle at 14% 78%, rgba(255,152,17,0.07), transparent 25rem)',
        }}
      >
        <Box
          component={motion.div}
          aria-hidden="true"
          style={{ y: prefersReducedMotion ? 0 : gridY }}
          sx={{
            position: 'absolute',
            zIndex: -1,
            inset: '-12% -8%',
            opacity: 0.28,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'linear-gradient(to bottom, transparent 4%, black 32%, black 76%, transparent 100%)',
          }}
        />

        <Container maxWidth="lg" sx={{ minHeight: '100svh' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.95fr 0.75fr' },
              gap: { xs: 4, md: 9 },
              alignItems: 'center',
              minHeight: '100svh',
              pt: { xs: 12, md: 10 },
              pb: { xs: 7, md: 8 },
            }}
          >
            <Box
              component={motion.div}
              style={{
                y: prefersReducedMotion ? 0 : copyY,
                opacity: prefersReducedMotion ? 1 : copyOpacity,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', mb: 1.5 }}
              >
                Contact
              </Typography>
              <Typography variant="h1">
                Let&apos;s build something useful.
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 2.5, maxWidth: 560 }}>
                Have a product challenge, an engineering opportunity, or a
                thoughtful idea? Send me the context and I&apos;ll get back to
                you within two business days.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              style={{ y: prefersReducedMotion ? 0 : linksY }}
              sx={{
                display: 'grid',
                borderTop: '1px solid rgba(255,255,255,0.11)',
              }}
            >
              {contactLinks.map(({ label, value, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  underline="none"
                  sx={{
                    py: { xs: 1.8, sm: 2.1 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: 'text.primary',
                    borderBottom: '1px solid rgba(255,255,255,0.11)',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateX(3px)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>{icon}</Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{label}</Typography>
                    <Typography variant="body2" color="text.secondary">{value}</Typography>
                  </Box>
                  <ArrowOutward sx={{ fontSize: 19, color: 'text.secondary' }} />
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0F161D' }}>
        <Container maxWidth="md">
          <Box
            sx={{
              mb: 4,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '0.8fr 1.2fr' },
              gap: 2,
              alignItems: 'end',
            }}
          >
            <Box>
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', mb: 1.25 }}
              >
                Your context
              </Typography>
              <Typography variant="h2">Tell me about the opportunity.</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 430 }}>
              Add the essentials below. This opens your email client with the
              details ready to send.
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              pt: { xs: 3, sm: 4 },
              borderTop: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <TextField
                label="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
              />
            </Box>
            <TextField
              label="What would you like to discuss?"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              multiline
              minRows={7}
              fullWidth
              sx={{ mt: 2 }}
            />
            <Button type="submit" variant="contained" endIcon={<ArrowForward />} sx={{ mt: 3 }}>
              Compose email
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
