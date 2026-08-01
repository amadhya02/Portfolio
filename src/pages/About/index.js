import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Close from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Meta, Title } from 'react-head';
import { Link as RouterLink } from 'react-router-dom';

import portrait from '../../assets/images/myself.jpg';
import CanonicalLink from '../../components/CanonicalLink';
import EDUCATION from '../../constants/education';
import EXPERIENCE from '../../constants/experience';
import HOBBIES from '../../constants/hobbies';
import { SEO_CONFIG } from '../../constants/seo';

const Label = ({ children, dark = false }) => (
  <Typography
    variant="caption"
    sx={{
      color: dark ? '#9B5B10' : 'primary.main',
      fontWeight: 800,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
    }}
  >
    {children}
  </Typography>
);

const CAREER_SUMMARIES = [
  'Built an event-driven AWS pipeline that cut a 500K-row process from 10 hours to 26 minutes.',
  'Designed and shipped the company’s public web presence from the ground up.',
  'Worked across the live classroom experience, analytics, and real-time communication.',
  'Mentored students through data structures, algorithms, and interview preparation.',
];

const TECH_CATEGORY_LABELS = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
};

const CAREER_EDITORIAL = {
  'Booking.com': {
    context:
      'Partner-facing systems sit at the intersection of large data volumes, legacy platforms, and teams that need to move independently.',
    impacts: [
      {
        title: '10 hours → 26 minutes',
        body: 'Re-architected a 500K-row CSV workflow as an observable, event-driven AWS pipeline.',
      },
      {
        title: 'Onboarding in minutes',
        body: 'Created a YAML-driven platform and schema-rendered interface that teams could adopt independently.',
      },
      {
        title: 'Signals teams could act on',
        body: 'Connected delivery, quality, and adoption data across GitLab, Jira, SonarQube, and internal systems.',
      },
    ],
    project: {
      label: 'Explore the CSV processing case study',
      title: 'CSV Processing System',
    },
  },
  'Aerial Telecom Solutions': {
    context:
      'The company needed a credible digital home that could explain a technical service offering clearly and feel established from day one.',
    impacts: [
      {
        title: 'A digital presence from zero',
        body: 'Designed and built a responsive public website that clarified the company’s services, team, and credibility.',
      },
    ],
    project: {
      label: 'Explore the ATS website case study',
      title: 'ATS Website',
    },
  },
  Cuemath: {
    context:
      'A live classroom product has to make complex media, learning data, and real-time interaction feel effortless for teachers and students.',
    impacts: [
      {
        title: 'A stronger live classroom',
        body: 'Integrated calls, screen sharing, and stability improvements into the core student–teacher experience.',
      },
      {
        title: 'Learning made measurable',
        body: 'Built analytics instrumentation, dashboards, and progress reports for teachers, students, and parents.',
      },
      {
        title: 'From interface to infrastructure',
        body: 'Worked across React experiences, Python services, data pipelines, and classroom media processing.',
      },
    ],
  },
  'Coding Ninjas': {
    context:
      'Early-career developers often need more than correct answers—they need repeatable ways to reason through unfamiliar problems.',
    impacts: [
      {
        title: 'Mentorship at human scale',
        body: 'Guided 15–20 students through coursework with regular sessions and individual feedback.',
      },
      {
        title: 'Better problem-solving habits',
        body: 'Used data structures, algorithms, and mock interviews to strengthen technical confidence.',
      },
    ],
  },
};

const getCompanyPeriod = (company) => {
  const years = company.roles.flatMap(
    ({ duration }) => duration.match(/\d{4}/g) || []
  );
  const start = Math.min(...years.map(Number));
  const end = company.roles.some(({ duration }) => duration.includes('Present'))
    ? 'Now'
    : Math.max(...years.map(Number));

  return `${start} — ${end}`;
};

const CareerDetail = ({ company, index, showResponsibilities = false }) => {
  const editorial = CAREER_EDITORIAL[company.name];
  const highlights = editorial?.impacts || [];
  const technologyGroups = Object.keys(TECH_CATEGORY_LABELS)
    .map((category) => {
      const technologies = company.roles
        .flatMap(({ tech }) => tech?.[category] || [])
        .filter(
          (technology, technologyIndex, collection) =>
            collection.findIndex(({ text }) => text === technology.text) ===
            technologyIndex
        );

      return [category, technologies];
    })
    .filter(([, technologies]) => technologies.length > 0);

  return (
    <Box
      component={motion.div}
      key={company.name}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          mb: { xs: 2.5, sm: 3.5 },
        }}
      >
        <Label>Chapter {String(index + 1).padStart(2, '0')}</Label>
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.64)',
            letterSpacing: '0.08em',
          }}
        >
          {getCompanyPeriod(company)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.02fr 0.98fr' },
          gap: { xs: 3, md: 8 },
          alignItems: 'end',
        }}
      >
        <Box>
          <Typography
            id="work-detail-title"
            component="h2"
            variant="h3"
            sx={{
              color: '#F5F1E8',
              fontSize: { xs: '2.35rem', sm: '3rem' },
              lineHeight: 1,
              letterSpacing: '-0.045em',
            }}
          >
            {company.name}
          </Typography>
          <Typography
            sx={{
              mt: 1.2,
              color: 'rgba(255,255,255,0.7)',
              fontSize: { xs: '0.92rem', md: '0.98rem' },
            }}
          >
            {company.location}
          </Typography>
        </Box>

        <Box
          sx={{
            pl: { md: 3 },
            borderLeft: { md: '2px solid rgba(255,152,17,0.58)' },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 750,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            At a glance
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: 'rgba(255,255,255,0.84)',
              fontSize: { xs: '1rem', md: '1.08rem' },
              lineHeight: 1.65,
            }}
          >
            {CAREER_SUMMARIES[index]}
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          mt: { xs: 5, md: 7 },
          pt: { xs: 3, md: 4 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '150px minmax(0, 1fr)' },
          gap: { xs: 1.5, sm: 4 },
          borderTop: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        <Typography
          component="h3"
          variant="caption"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Context
        </Typography>
        <Typography
          sx={{
            maxWidth: 680,
            color: 'rgba(255,255,255,0.76)',
            lineHeight: 1.75,
          }}
        >
          {editorial?.context}
        </Typography>
      </Box>

      <Box component="section" sx={{ mt: { xs: 5, md: 6 } }}>
        <Typography
          component="h3"
          variant="caption"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Contribution
        </Typography>
        <Box sx={{ mt: 1.8 }}>
          {company.roles.map((role, roleIndex) => (
            <Box
              key={`${role.role}-${role.duration}`}
              sx={{
                py: { xs: 2.5, md: 3 },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '180px minmax(0, 1fr)' },
                gap: { xs: 1.7, sm: 4 },
                borderTop: '1px solid rgba(255,255,255,0.13)',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.55 }}>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.92)',
                    fontWeight: roleIndex === 0 ? 760 : 650,
                    lineHeight: 1.35,
                  }}
                >
                  {role.role}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'rgba(255,255,255,0.58)', lineHeight: 1.5 }}
                >
                  {role.duration}
                </Typography>
              </Box>

              {showResponsibilities && (
                <Box
                  component="ul"
                  sx={{
                    mt: 0,
                    mb: 0,
                    pl: 2.2,
                    color: 'rgba(255,255,255,0.7)',
                    '& li': { mb: 1.15, pl: 0.5 },
                    '& li:last-of-type': { mb: 0 },
                    '& li::marker': { color: 'primary.main' },
                  }}
                >
                  {role.desc.map((item) => (
                    <Box
                      component="li"
                      key={item}
                      sx={{
                        fontSize: { xs: '0.92rem', md: '0.96rem' },
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Box component="section" sx={{ mt: { xs: 5, md: 6 } }}>
        <Typography
          component="h3"
          variant="caption"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Impact
        </Typography>
        <Box
          component="ol"
          sx={{
            p: 0,
            mt: 1.8,
            mb: 0,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: highlights.length > 1 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
            },
            columnGap: 4,
            listStyle: 'none',
          }}
        >
          {highlights.map((highlight, highlightIndex) => (
            <Box
              component="li"
              key={highlight.title}
              sx={{
                py: 2,
                display: 'grid',
                gridTemplateColumns: '30px 1fr',
                gap: 1.5,
                borderTop: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: 'primary.main', fontWeight: 800 }}
              >
                {String(highlightIndex + 1).padStart(2, '0')}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.94)',
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  {highlight.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.65,
                    maxWidth: 650,
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: { xs: '0.92rem', md: '0.96rem' },
                    lineHeight: 1.65,
                  }}
                >
                  {highlight.body}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box component="section" sx={{ mt: { xs: 5, md: 6 } }}>
        <Typography
          component="h3"
          variant="caption"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Technology
        </Typography>
        <Box sx={{ mt: 1.8, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          {technologyGroups.map(([category, technologies]) => (
            <Box
              key={category}
              sx={{
                py: 1.75,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '120px 1fr' },
                gap: { xs: 1, sm: 2 },
                borderBottom: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.62)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {TECH_CATEGORY_LABELS[category]}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.84)',
                  lineHeight: 1.65,
                }}
              >
                {technologies.map(({ text }) => text).join(' · ')}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {editorial?.project && (
        <Button
          component={RouterLink}
          to="/projects"
          state={{ projectTitle: editorial.project.title }}
          endIcon={<ArrowOutward />}
          sx={{
            mt: { xs: 3.5, md: 4.5 },
            px: 0,
            py: 0.5,
            color: 'text.primary',
            fontWeight: 700,
            '&:hover': {
              bgcolor: 'transparent',
              color: 'primary.main',
            },
            '& .MuiButton-endIcon': {
              transition: 'transform 180ms ease',
            },
            '&:hover .MuiButton-endIcon': {
              transform: 'translate(3px, -3px)',
            },
          }}
        >
          {editorial.project.label}
        </Button>
      )}
    </Box>
  );
};

const WorkIndex = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const prefersReducedMotion = useReducedMotion();
  const selectedIndex = selectedCompany
    ? EXPERIENCE.findIndex(({ name }) => name === selectedCompany.name)
    : -1;

  return (
    <>
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: 2,
          mt: { xs: 0, md: '-100svh' },
          pt: { xs: 9, md: 14 },
          pb: 0,
          overflow: 'hidden',
          bgcolor: '#0B1016',
          borderTop: { xs: 0, md: '1px solid rgba(255,255,255,0.1)' },
          boxShadow: '0 -28px 70px rgba(0,0,0,0.34)',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.32,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 58%)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '8%',
            right: '-18rem',
            width: '42rem',
            height: '42rem',
            borderRadius: '50%',
            pointerEvents: 'none',
            background:
              'radial-gradient(circle, rgba(111,214,179,0.035), transparent 66%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '180px minmax(0, 1fr)' },
              gap: { xs: 3, md: 7 },
            }}
          >
            <Label>Selected work</Label>
            <Box sx={{ position: 'relative', minHeight: { md: 245 } }}>
              <Box
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  zIndex: 0,
                  top: { xs: -52, md: -64 },
                  right: { xs: -82, sm: -20, md: 10 },
                  width: { xs: 230, md: 290 },
                  height: { xs: 230, md: 290 },
                  opacity: { xs: 0.34, md: 0.46 },
                  pointerEvents: 'none',
                }}
              >
                <Box
                  component={motion.div}
                  animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 28,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,152,17,0.25)',
                    borderLeftColor: 'rgba(111,214,179,0.55)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '8%',
                      left: '22%',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      boxShadow: '0 0 18px rgba(255,152,17,0.65)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: '18%',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.11)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: '36%',
                    borderRadius: '50%',
                    border: '1px solid rgba(111,214,179,0.26)',
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'grid',
                    placeItems: 'center',
                    color: 'rgba(255,255,255,0.42)',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                  }}
                >
                  2018—NOW
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: 760,
                  fontSize: { xs: '2.4rem', md: '3.8rem' },
                  lineHeight: 1.02,
                  letterSpacing: '-0.04em',
                }}
              >
                The work behind
                <br />
                the titles.
              </Typography>
              <Typography
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  mt: 2.5,
                  maxWidth: 620,
                  color: 'rgba(255,255,255,0.62)',
                  lineHeight: 1.75,
                }}
              >
                A concise timeline here; the decisions, outcomes, and technology
                live one layer deeper.
              </Typography>

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  mt: 3.5,
                  display: 'block',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255,255,255,0.62)',
                    letterSpacing: '0.06em',
                  }}
                >
                  Four chapters ·{' '}
                  <Box
                    component="span"
                    sx={{ color: 'primary.main', fontWeight: 800 }}
                  >
                    6+ years
                  </Box>{' '}
                  · product to systems
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mt: { xs: 7, md: 10 },
            }}
          >
            <Box
              component="button"
              type="button"
              aria-label={`View details for ${EXPERIENCE[0].name}`}
              onClick={() => setSelectedCompany(EXPERIENCE[0])}
              sx={{
                position: 'relative',
                width: '100%',
                py: { xs: 4, md: 5.5 },
                px: { xs: 2.5, sm: 3.5, md: 5 },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
                gap: { xs: 3.5, md: 7 },
                color: 'inherit',
                textAlign: 'left',
                font: 'inherit',
                bgcolor: 'transparent',
                border: 0,
                borderLeft: '2px solid rgba(255,152,17,0.72)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'border-color 220ms ease',
                '&:hover, &:focus-visible': {
                  borderLeftColor: 'primary.main',
                },
                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: 4,
                },
                '&:hover .work-arrow, &:focus-visible .work-arrow': {
                  color: 'primary.main',
                  transform: 'translate(3px, -3px)',
                },
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      boxShadow: '0 0 14px rgba(255,152,17,0.5)',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Current chapter
                  </Typography>
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    mt: 1.8,
                    color: '#FFFFFF',
                    fontSize: { xs: '1.7rem', md: '2.45rem' },
                    fontWeight: 780,
                    lineHeight: 1.05,
                    letterSpacing: '-0.035em',
                  }}
                >
                  {EXPERIENCE[0].name}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.9,
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: { xs: '0.9rem', md: '0.98rem' },
                  }}
                >
                  {EXPERIENCE[0].roles[0].role} · {EXPERIENCE[0].location}
                </Typography>
              </Box>

              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 2.5,
                }}
              >
                <Typography
                  sx={{
                    maxWidth: 620,
                    color: 'rgba(255,255,255,0.78)',
                    fontSize: { xs: '1rem', md: '1.08rem' },
                    lineHeight: 1.7,
                  }}
                >
                  {CAREER_SUMMARIES[0]}
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(255,255,255,0.62)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {getCompanyPeriod(EXPERIENCE[0])}
                  </Typography>
                  <ArrowOutward
                    className="work-arrow"
                    sx={{
                      color: 'rgba(255,255,255,0.68)',
                      fontSize: 21,
                      transition: 'transform 180ms ease, color 180ms ease',
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                mt: { xs: 5.5, md: 7 },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '180px minmax(0, 1fr)' },
                gap: { xs: 2.5, md: 7 },
              }}
            >
              <Label>Earlier chapters</Label>
              <Box>
                {EXPERIENCE.slice(1).map((company, itemIndex) => {
                  const index = itemIndex + 1;

                  return (
                    <Box
                      component="button"
                      type="button"
                      key={company.name}
                      aria-label={`View details for ${company.name}`}
                      onClick={() => setSelectedCompany(company)}
                      sx={{
                        width: '100%',
                        py: { xs: 2.6, md: 3 },
                        px: 0,
                        display: 'grid',
                        gridTemplateColumns: {
                          xs: '34px minmax(0, 1fr) auto',
                          md: '44px minmax(210px, 0.8fr) minmax(260px, 1fr) 116px',
                        },
                        columnGap: { xs: 1.2, md: 2.5 },
                        rowGap: 0.7,
                        alignItems: 'center',
                        color: 'inherit',
                        textAlign: 'left',
                        font: 'inherit',
                        bgcolor: 'transparent',
                        border: 0,
                        borderTop: '1px solid rgba(255,255,255,0.11)',
                        cursor: 'pointer',
                        transition: 'padding 180ms ease',
                        '&:last-of-type': {
                          borderBottom: '1px solid rgba(255,255,255,0.11)',
                        },
                        '&:focus-visible': {
                          outline: '2px solid',
                          outlineColor: 'primary.main',
                          outlineOffset: 4,
                        },
                        '& .work-arrow, & .company-name': {
                          transition: 'transform 180ms ease, color 180ms ease',
                        },
                        '&:hover .company-name, &:focus-visible .company-name':
                          {
                            color: '#FFFFFF',
                          },
                        '&:hover .work-arrow, &:focus-visible .work-arrow': {
                          color: 'primary.main',
                          transform: 'translate(3px, -3px)',
                        },
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: 'primary.main', fontWeight: 800 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </Typography>

                      <Box>
                        <Typography
                          className="company-name"
                          sx={{
                            color: 'rgba(255,255,255,0.88)',
                            fontSize: { xs: '1.04rem', md: '1.2rem' },
                            fontWeight: 720,
                            lineHeight: 1.2,
                          }}
                        >
                          {company.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            mt: 0.5,
                            display: 'block',
                            color: 'rgba(255,255,255,0.58)',
                          }}
                        >
                          {company.roles[0].role}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          display: { xs: 'none', md: 'block' },
                          color: 'rgba(255,255,255,0.66)',
                          fontSize: '0.9rem',
                          lineHeight: 1.55,
                        }}
                      >
                        {CAREER_SUMMARIES[index]}
                      </Typography>

                      <Box
                        sx={{
                          gridColumn: { xs: '3', md: 'auto' },
                          gridRow: { xs: '1 / span 2', md: 'auto' },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          gap: { xs: 1, md: 2 },
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            display: { xs: 'none', sm: 'block' },
                            color: 'rgba(255,255,255,0.54)',
                          }}
                        >
                          {getCompanyPeriod(company)}
                        </Typography>
                        <ArrowOutward
                          className="work-arrow"
                          sx={{
                            color: 'rgba(255,255,255,0.58)',
                            fontSize: 18,
                          }}
                        />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>

          <Box
            component="section"
            sx={{
              position: 'relative',
              width: '100vw',
              ml: 'calc(50% - 50vw)',
              mt: { xs: 10, md: 13 },
              py: { xs: 9, md: 12 },
              overflow: 'hidden',
              bgcolor: '#0F161D',
              '&::before': {
                content: '""',
                position: 'absolute',
                right: { xs: -28, md: '4%' },
                top: { xs: 24, md: -24 },
                width: { xs: 190, md: 330 },
                height: { xs: 190, md: 330 },
                opacity: { xs: 0.055, md: 0.045 },
                backgroundImage: `url(${EDUCATION[0].logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                filter: 'grayscale(1) brightness(1.9) contrast(0.85)',
                pointerEvents: 'none',
              },
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '0.76fr 1.24fr' },
                gap: { xs: 6.5, md: 11 },
              }}
            >
              <Box>
                <Label>Education</Label>
                <Typography
                  component="h2"
                  variant="h3"
                  sx={{
                    mt: 1.5,
                    maxWidth: 420,
                    color: '#F5F1E8',
                    fontSize: { xs: '2rem', md: '3rem' },
                    lineHeight: 1.04,
                    letterSpacing: '-0.04em',
                  }}
                >
                  Formal foundations.
                  <br />
                  Applied thinking.
                </Typography>
                <Typography
                  sx={{
                    mt: 2.2,
                    maxWidth: 390,
                    color: 'rgba(255,255,255,0.68)',
                    lineHeight: 1.7,
                  }}
                >
                  Computing systems and engineering shaped how I reason about
                  scale, constraints, and the details beneath an interface.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: { xs: 6.5, md: 7 },
                  alignItems: 'start',
                }}
              >
                {EDUCATION.slice(0, 2).map((item, index) => (
                  <Box
                    key={item.institute}
                    sx={{
                      position: 'relative',
                      pt: { xs: 0, md: index === 1 ? 9 : 0 },
                      pl: { xs: 2.5, md: 3 },
                      borderLeft: '2px solid',
                      borderColor:
                        index === 0
                          ? 'rgba(255,152,17,0.72)'
                          : 'rgba(111,214,179,0.64)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: { xs: 0, md: index === 1 ? 72 : 0 },
                        left: -5,
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor:
                          index === 0
                            ? 'primary.main'
                            : 'rgba(111,214,179,0.78)',
                        boxShadow:
                          index === 0
                            ? '0 0 16px rgba(255,152,17,0.34)'
                            : '0 0 16px rgba(111,214,179,0.25)',
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        color:
                          index === 0
                            ? 'primary.main'
                            : 'rgba(111,214,179,0.82)',
                        fontWeight: 800,
                        letterSpacing: '0.11em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {index === 0 ? 'Graduate studies' : 'Undergraduate'}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{
                        mt: 1.7,
                        color: '#F5F1E8',
                        fontSize: { xs: '1.4rem', md: '1.62rem' },
                        fontWeight: 780,
                        lineHeight: 1.18,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {item.institute}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1.1,
                        color: 'rgba(255,255,255,0.76)',
                        fontSize: { xs: '1rem', md: '1.05rem' },
                        lineHeight: 1.55,
                      }}
                    >
                      {item.degree}
                    </Typography>

                    <Box
                      sx={{
                        mt: 2.8,
                        display: 'grid',
                        gridTemplateColumns: '82px minmax(0, 1fr)',
                        alignItems: 'start',
                        columnGap: 1.2,
                      }}
                    >
                      <Typography
                        sx={{
                          color:
                            index === 0
                              ? 'primary.main'
                              : 'rgba(111,214,179,0.86)',
                          fontSize: '1.12rem',
                          fontWeight: 800,
                        }}
                      >
                        {item.other}
                      </Typography>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            color: 'rgba(255,255,255,0.68)',
                            lineHeight: 1.4,
                          }}
                        >
                          {item.location}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            mt: 0.25,
                            display: 'block',
                            color: 'rgba(255,255,255,0.5)',
                            lineHeight: 1.4,
                          }}
                        >
                          {item.duration}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>

          <Box
            component="section"
            sx={{
              position: 'relative',
              width: '100vw',
              ml: 'calc(50% - 50vw)',
              py: { xs: 10, md: 14 },
              overflow: 'hidden',
              bgcolor: '#0B1016',
              backgroundImage:
                'radial-gradient(circle at 82% 110%, rgba(111,214,179,0.045), transparent 25rem)',
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '0.7fr 1.3fr' },
                gap: { xs: 7, md: 12 },
                alignItems: 'center',
              }}
            >
              <Box>
                <Label>Outside work</Label>
                <Typography
                  component="h2"
                  variant="h4"
                  sx={{
                    mt: 1.2,
                    color: '#F5F1E8',
                    fontSize: { xs: '2.05rem', md: '2.7rem' },
                    lineHeight: 1.1,
                    letterSpacing: '-0.035em',
                  }}
                >
                  Room to reset.
                </Typography>
                <Typography
                  sx={{
                    mt: 1.35,
                    maxWidth: 390,
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: { xs: '1rem', md: '1.08rem' },
                    lineHeight: 1.65,
                  }}
                >
                  Drums, weights, laps, and small builds keep me moving,
                  curious, and away from the keyboard.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  columnGap: { xs: 2, md: 3 },
                  rowGap: { xs: 4, md: 2 },
                }}
              >
                {HOBBIES.map((hobby, index) => (
                  <Box
                    key={hobby.title}
                    sx={{
                      position: 'relative',
                      flex: {
                        xs: '0 0 calc(50% - 8px)',
                        md: '1 1 0',
                      },
                      minWidth: 0,
                      minHeight: { xs: 148, md: 192 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1.35,
                      px: { xs: 0.5, md: 1 },
                      py: 1.5,
                      textAlign: 'center',
                      transform: {
                        md: `translateY(${index % 2 === 1 ? 18 : -8}px)`,
                      },
                      '& img, & p': {
                        transition:
                          'transform 200ms ease, opacity 200ms ease, color 200ms ease',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: { xs: 4, md: 8 },
                        left: '50%',
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        bgcolor:
                          index % 2 === 0
                            ? 'primary.main'
                            : 'rgba(111,214,179,0.78)',
                        transform: 'translateX(-50%)',
                        boxShadow:
                          index % 2 === 0
                            ? '0 0 12px rgba(255,152,17,0.28)'
                            : '0 0 12px rgba(111,214,179,0.22)',
                      },
                      '&:hover img': {
                        opacity: 0.86,
                        transform: 'translateY(-3px) rotate(-2deg)',
                      },
                      '&:hover p': {
                        color: 'rgba(255,255,255,0.92)',
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        top: { xs: 0, md: 4 },
                        right: { xs: 10, md: 4 },
                        color:
                          index % 2 === 0
                            ? 'rgba(255,152,17,0.66)'
                            : 'rgba(111,214,179,0.64)',
                        fontWeight: 750,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1.15,
                      }}
                    >
                      <Box
                        component="img"
                        src={hobby.icon}
                        alt=""
                        aria-hidden="true"
                        sx={{
                          flex: '0 0 auto',
                          width: { xs: 58, md: 68 },
                          height: { xs: 58, md: 68 },
                          objectFit: 'contain',
                          opacity: 0.64,
                          filter: 'grayscale(1) contrast(1.1)',
                        }}
                      />
                      <Typography
                        sx={{
                          color: 'rgba(255,255,255,0.82)',
                          fontSize: { xs: '0.92rem', md: '1.02rem' },
                          fontWeight: 680,
                          lineHeight: 1.25,
                        }}
                      >
                        {hobby.title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>

      <Dialog
        open={Boolean(selectedCompany)}
        onClose={() => setSelectedCompany(null)}
        aria-labelledby="work-detail-title"
        maxWidth="md"
        fullWidth
        scroll="paper"
        TransitionProps={{ timeout: 260 }}
        PaperProps={{
          sx: {
            m: { xs: 0, sm: 3 },
            width: { xs: '100%', sm: 'calc(100% - 48px)' },
            maxHeight: { xs: '100dvh', sm: 'calc(100% - 64px)' },
            minHeight: { xs: '100dvh', sm: 'auto' },
            borderRadius: { xs: 0, sm: 1.5 },
            color: '#F5F1E8',
            bgcolor: '#101820',
            backgroundImage:
              'linear-gradient(145deg, rgba(255,255,255,0.025), transparent 44%)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 24px 90px rgba(0,0,0,0.58)',
          },
        }}
        BackdropProps={{
          sx: {
            bgcolor: 'rgba(4,7,10,0.82)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 2,
            px: { xs: 2.2, sm: 4.5 },
            py: { xs: 1.5, sm: 2 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'rgba(16,24,32,0.94)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Work detail · {String(selectedIndex + 1).padStart(2, '0')}
            </Typography>
            {selectedCompany && (
              <Typography
                sx={{
                  mt: 0.25,
                  color: 'rgba(255,255,255,0.74)',
                  fontSize: '0.82rem',
                }}
              >
                {selectedCompany.name}
              </Typography>
            )}
          </Box>
          <IconButton
            aria-label="Close work details"
            onClick={() => setSelectedCompany(null)}
            sx={{
              color: 'rgba(255,255,255,0.72)',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'rgba(255,255,255,0.06)',
              },
              '&:focus-visible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: 2,
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>

        <DialogContent
          sx={{
            px: { xs: 2.2, sm: 4.5 },
            py: { xs: 3.5, sm: 5 },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {selectedCompany && (
            <CareerDetail
              company={selectedCompany}
              index={selectedIndex}
              showResponsibilities
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

const AboutSection = () => {
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const disableParallax = useMediaQuery('(max-width:899.95px)');
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 62]);
  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [1, 0.96, 0.62]
  );
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 230]);

  return (
    <Box
      component="main"
      sx={{
        bgcolor: '#0B1016',
        '& + footer': {
          borderTop: 0,
        },
      }}
    >
      <Title>About | Amadhya Anand Portfolio</Title>
      <Meta
        name="description"
        content="Learn about Amadhya Anand's journey, experience, and philosophy as a full-stack engineer focused on performance, reliability, and thoughtful product experiences."
      />
      <Meta
        name="keywords"
        content="Amadhya Anand, about, full-stack developer, experience, skills, education"
      />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" content="About | Amadhya Anand Portfolio" />
      <Meta
        property="og:description"
        content="Discover Amadhya Anand's development background, values, and expertise in building modern products."
      />
      <Meta property="og:url" content={`${SEO_CONFIG.siteUrl}/about`} />
      <Meta
        property="og:image"
        content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImageUrl}`}
      />
      <CanonicalLink url={`${SEO_CONFIG.siteUrl}/about`} />

      <Box
        ref={heroRef}
        sx={{
          position: 'relative',
          height: { xs: '100svh', md: '200svh' },
          bgcolor: '#090E13',
        }}
      >
        <Box
          component="section"
          sx={{
            position: { xs: 'relative', md: 'sticky' },
            top: 0,
            height: '100svh',
            overflow: 'hidden',
            isolation: 'isolate',
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: -2,
              background:
                'radial-gradient(circle at 76% 32%, rgba(255,152,17,0.11), transparent 28rem), linear-gradient(135deg, #0E151C 0%, #080C11 72%)',
            }}
          />
          <Box
            component={motion.div}
            aria-hidden="true"
            style={{
              y: prefersReducedMotion || disableParallax ? 0 : gridY,
            }}
            sx={{
              position: 'absolute',
              inset: '-12% 0',
              zIndex: -1,
              opacity: 0.18,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage:
                'linear-gradient(to bottom, transparent, black 35%, transparent 94%)',
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              zIndex: -1,
              width: '1px',
              height: { xs: '42%', md: '58%' },
              right: { xs: '43%', md: '31%' },
              bottom: 0,
              bgcolor: 'rgba(255,152,17,0.22)',
            }}
          />

          <Container
            maxWidth="lg"
            sx={{ position: 'relative', minHeight: '100svh' }}
          >
            <Box
              component={motion.div}
              style={{
                y: prefersReducedMotion || disableParallax ? 0 : copyY,
                opacity:
                  prefersReducedMotion || disableParallax ? 1 : copyOpacity,
              }}
              sx={{
                position: 'absolute',
                zIndex: 3,
                top: { xs: '16%', sm: '18%', md: '23%' },
                left: { xs: 16, sm: 24 },
                right: { xs: 16, sm: 24 },
                maxWidth: 830,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 2.5,
                }}
              >
                <Label>About / Amadhya Anand</Label>
                <Box
                  sx={{
                    width: 54,
                    height: '1px',
                    bgcolor: 'rgba(255,255,255,0.28)',
                  }}
                />
              </Box>
              <Typography
                variant="h1"
                sx={{
                  maxWidth: 800,
                  fontSize: {
                    xs: 'clamp(2.1rem, 9.5vw, 2.65rem)',
                    sm: '3.8rem',
                    md: '5.7rem',
                  },
                  lineHeight: { xs: 1.02, md: 0.93 },
                  letterSpacing: '-0.055em',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    whiteSpace: { xs: 'nowrap', md: 'normal' },
                  }}
                >
                  I work in systems.
                </Box>
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    whiteSpace: { xs: 'nowrap', md: 'normal' },
                  }}
                >
                  I think in{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    rhythm.
                  </Box>
                </Box>
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  mt: 3,
                  maxWidth: { xs: 525, sm: 440, md: 590 },
                  fontSize: { xs: '0.92rem', md: '1.08rem' },
                  lineHeight: { xs: 1.62, md: 1.75 },
                }}
              >
                Full-stack engineer at Booking.com, drawn to the messy space
                between product decisions and production systems.
              </Typography>
            </Box>

            <Box
              component={motion.figure}
              style={{
                y: prefersReducedMotion || disableParallax ? 0 : imageY,
              }}
              sx={{
                position: 'absolute',
                zIndex: 1,
                m: 0,
                right: { xs: 16, sm: 24, md: 16 },
                top: { xs: '60%', sm: 'auto' },
                bottom: { xs: 'auto', sm: 42, md: 0 },
                width: { xs: 152, sm: 220, md: 360 },
                height: { xs: 210, sm: 300, md: '66%' },
                maxHeight: 560,
                opacity: { xs: 0.82, sm: 0.82, md: 1 },
                '@media (max-width:599.95px) and (max-height:700px)': {
                  top: '61%',
                  width: 132,
                  height: 182,
                  opacity: 0.68,
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '-12px 12px 12px -12px',
                    display: { xs: 'none', sm: 'block' },
                    borderTop: '1px solid rgba(255,152,17,0.55)',
                    borderLeft: '1px solid rgba(255,152,17,0.55)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={portrait}
                  alt="Amadhya Anand playing drums"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: { xs: '50% 32%', md: '50% 30%' },
                    filter: 'saturate(0.62) contrast(1.1) brightness(0.78)',
                    maskImage:
                      'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
                  }}
                />
                <Typography
                  component="figcaption"
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    right: { xs: 0, md: -10 },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    px: 0.8,
                    py: 1.25,
                    bgcolor: 'primary.main',
                    color: '#080C11',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    writingMode: 'vertical-rl',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.28)',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  Off-screen / on rhythm
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                zIndex: 3,
                left: { xs: 16, sm: 24 },
                bottom: { xs: 32, sm: 58, md: 54 },
                width: { xs: 135, sm: 220, md: 330 },
                pt: 2,
                borderTop: '1px solid rgba(255,255,255,0.16)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Software Engineer II · Amsterdam
              </Typography>
              <Button
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                sx={{
                  position: 'relative',
                  minWidth: 0,
                  p: 0,
                  color: 'text.primary',
                  transition: 'color 180ms ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -3,
                    height: '1px',
                    bgcolor: 'primary.main',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 180ms ease',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                  },
                  '& .resume-arrow': {
                    display: 'inline-block',
                    ml: 0.5,
                    transition: 'transform 180ms ease',
                  },
                  '&:hover .resume-arrow': {
                    transform: 'translate(3px, -3px)',
                  },
                }}
              >
                View résumé
                <Box component="span" className="resume-arrow">
                  ↗
                </Box>
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>

      <WorkIndex />
    </Box>
  );
};

export default React.memo(AboutSection);
