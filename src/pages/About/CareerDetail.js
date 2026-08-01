import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  CAREER_EDITORIAL,
  CAREER_SUMMARIES,
  TECH_CATEGORY_LABELS,
  getCompanyPeriod,
} from './careerData';
import Eyebrow from '../../components/Eyebrow';
import { ARROW_HOVER_TRANSFORM } from '../../constants/motion';

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
        <Eyebrow>Chapter {String(index + 1).padStart(2, '0')}</Eyebrow>
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
              transform: ARROW_HOVER_TRANSFORM,
            },
          }}
        >
          {editorial.project.label}
        </Button>
      )}
    </Box>
  );
};

export default CareerDetail;
