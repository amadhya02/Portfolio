import Close from '@mui/icons-material/Close';
import GitHub from '@mui/icons-material/GitHub';
import Launch from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';

const getTechnologies = (stack) =>
  Object.values(stack || {})
    .flat()
    .map((technology) => technology.text)
    .filter(Boolean);

const ProjectModal = ({ data, open, handleClose }) => (
  <Dialog
    open={open}
    onClose={handleClose}
    maxWidth="lg"
    fullWidth
    scroll="paper"
    aria-labelledby="project-dialog-title"
    slotProps={{
      paper: {
        sx: {
          maxHeight: { xs: '94dvh', md: '88dvh' },
          m: { xs: 1.5, sm: 3 },
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: { xs: 3, md: 4 },
          bgcolor: '#0E151C',
          backgroundImage:
            'radial-gradient(circle at 8% 5%, rgba(255,152,17,0.11), transparent 26rem)',
        },
      },
      backdrop: {
        sx: { bgcolor: 'rgba(2,6,10,0.82)', backdropFilter: 'blur(10px)' },
      },
    }}
  >
    <DialogContent sx={{ p: 0 }}>
      <Box sx={{ position: 'sticky', top: 0, zIndex: 2, display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
        <IconButton
          onClick={handleClose}
          aria-label="Close project details"
          sx={{ bgcolor: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
        >
          <Close />
        </IconButton>
      </Box>

      <Box
        sx={{
          px: { xs: 2.5, sm: 4, md: 5 },
          pb: { xs: 4, md: 5 },
          mt: -4,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.72fr 1.28fr' },
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}
          >
            {data.year} · {data.under}
          </Typography>
          <Typography id="project-dialog-title" variant="h2" sx={{ mb: 2 }}>
            {data.title}
          </Typography>
          <Typography color="text.secondary">{data.role}</Typography>

          <Box
            sx={{
              mt: 3,
              p: 2.5,
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 3,
              bgcolor: 'rgba(255,255,255,0.025)',
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Built with
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {getTechnologies(data.techStack).map((technology) => (
                <Chip
                  key={technology}
                  label={technology}
                  size="small"
                  sx={{ bgcolor: 'rgba(255,255,255,0.055)', color: 'text.secondary' }}
                />
              ))}
            </Box>
          </Box>

          {(data.liveDemoUrl || data.githubUrl) && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
              {data.liveDemoUrl && data.liveDemoUrl !== '#' && (
                <Button
                  href={data.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<Launch />}
                >
                  Visit live project
                </Button>
              )}
              {data.githubUrl && (
                <Button
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHub />}
                >
                  View source
                </Button>
              )}
            </Box>
          )}
        </Box>

        <Box>
          <Typography variant="h3" sx={{ mb: 3 }}>
            The work
          </Typography>
          <Box sx={{ display: 'grid', gap: 0 }}>
            {data.description.map((point, index) => (
              <Box
                key={point}
                sx={{
                  py: 2,
                  display: 'grid',
                  gridTemplateColumns: '42px 1fr',
                  gap: 2,
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Typography variant="body2" sx={{ color: 'primary.main' }}>
                  {String(index + 1).padStart(2, '0')}
                </Typography>
                <Typography color="text.secondary">{point}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </DialogContent>
  </Dialog>
);

export default React.memo(ProjectModal);
