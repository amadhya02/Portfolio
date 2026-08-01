import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

import Label from './Label';
import EDUCATION from '../../constants/education';

const EducationSection = () => (
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
          Computing systems and engineering shaped how I reason about scale,
          constraints, and the details beneath an interface.
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
                  index === 0 ? 'primary.main' : 'rgba(111,214,179,0.78)',
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
                color: index === 0 ? 'primary.main' : 'rgba(111,214,179,0.82)',
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
                    index === 0 ? 'primary.main' : 'rgba(111,214,179,0.86)',
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
);

export default EducationSection;
