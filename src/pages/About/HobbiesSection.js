import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

import Label from './Label';
import HOBBIES from '../../constants/hobbies';

const HobbiesSection = () => (
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
          Drums, weights, laps, and small builds keep me moving, curious, and
          away from the keyboard.
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
);

export default HobbiesSection;
