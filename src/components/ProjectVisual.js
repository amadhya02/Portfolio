import AutoGraph from '@mui/icons-material/AutoGraph';
import Bolt from '@mui/icons-material/Bolt';
import Code from '@mui/icons-material/Code';
import DataObject from '@mui/icons-material/DataObject';
import Language from '@mui/icons-material/Language';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

const VISUALS = {
  'TrueNorth Gym': {
    metric: 'EN / NL',
    label: 'Bilingual, performance-led experience',
    icon: <Language />,
    accent: '#FF9811',
  },
  'CSV Processing System': {
    metric: '10h → 26m',
    label: 'Processing time for 500K records',
    icon: <Bolt />,
    accent: '#6FD6B3',
  },
  Portfolio: {
    metric: 'AA / 25',
    label: 'A personal design system',
    icon: <Code />,
    accent: '#A68BFF',
  },
  'Developer Data Collector': {
    metric: '4 → 1',
    label: 'Engineering platforms unified',
    icon: <DataObject />,
    accent: '#64B5F6',
  },
  'Metro Atlanta Saves': {
    metric: 'Save + grow',
    label: 'Financial wellness made actionable',
    icon: <AutoGraph />,
    accent: '#F3C969',
  },
  'Alcohol Tracker': {
    metric: 'Data → insight',
    label: 'Health patterns made understandable',
    icon: <AutoGraph />,
    accent: '#E78AA9',
  },
};

const ProjectVisual = ({ compact = false, index = 0, project }) => {
  const visual = VISUALS[project.title] || {
    metric: String(project.year),
    label: project.role,
    icon: <Code />,
    accent: ['#FF9811', '#6FD6B3', '#A68BFF', '#64B5F6'][index % 4],
  };

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'relative',
        minHeight: compact ? 180 : { xs: 230, md: 300 },
        height: '100%',
        overflow: 'hidden',
        borderRadius: compact ? 3 : 4,
        background: `radial-gradient(circle at 88% 8%, ${visual.accent}38, transparent 46%), linear-gradient(145deg, #18212A 0%, #0B1117 100%)`,
        border: '1px solid rgba(255,255,255,0.08)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 18%, black 86%, transparent 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: compact ? 28 : 40,
          left: compact ? 28 : 40,
          width: compact ? 40 : 48,
          height: compact ? 40 : 48,
          display: 'grid',
          placeItems: 'center',
          color: visual.accent,
          border: `1px solid ${visual.accent}55`,
          bgcolor: `${visual.accent}12`,
          borderRadius: 2,
        }}
      >
        {visual.icon}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          left: compact ? 28 : 40,
          right: 30,
          bottom: compact ? 26 : 38,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
            fontSize: compact ? '1.5rem' : { xs: '1.9rem', md: '2.4rem' },
            letterSpacing: '-0.045em',
            color: 'text.primary',
          }}
        >
          {visual.metric}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: visual.accent, maxWidth: 260 }}
        >
          {visual.label}
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: compact ? 28 : 40,
          right: compact ? 28 : 40,
          width: compact ? 68 : 82,
          height: compact ? 40 : 48,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Box
          component="img"
          src={project.partnerLogo}
          alt=""
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: 0.92,
            filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.7))',
          }}
        />
      </Box>
    </Box>
  );
};

export default React.memo(ProjectVisual);
