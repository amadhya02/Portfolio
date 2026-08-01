import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Close from '@mui/icons-material/Close';
import GitHub from '@mui/icons-material/GitHub';
import Launch from '@mui/icons-material/Launch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { useEffect, useRef } from 'react';

const getTechnologies = (stack) =>
  Object.values(stack || {})
    .flat()
    .map((technology) => technology.text)
    .filter(Boolean);

const actionLinkSx = {
  minWidth: 0,
  px: 0,
  py: 0.4,
  borderRadius: 0,
  color: 'text.primary',
  borderBottom: '1px solid rgba(255,255,255,0.24)',
  justifyContent: 'flex-start',
  transition: 'color 180ms ease, border-color 180ms ease, opacity 180ms ease',
  '&:hover': {
    bgcolor: 'transparent',
    color: 'primary.main',
    borderColor: 'rgba(255,152,17,0.72)',
  },
  '& .MuiButton-endIcon': {
    transition: 'transform 180ms ease',
  },
  '&:hover .MuiButton-endIcon': {
    transform: 'translate(2px, -2px)',
  },
};

const ProjectModal = ({
  data,
  handleClose,
  onSelectProject,
  open,
  projects = [data],
}) => {
  const contentRef = useRef(null);
  const workPoints = data.description.slice(1);
  const currentIndex = projects.findIndex(
    (project) => project.title === data.title
  );
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  useEffect(() => {
    if (open && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [data.title, open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      aria-labelledby="project-dialog-title"
      slotProps={{
        paper: {
          sx: {
            height: {
              xs: 'calc(100dvh - 24px)',
              sm: 'min(88dvh, 780px)',
            },
            maxHeight: {
              xs: 'calc(100dvh - 24px)',
              sm: 'min(88dvh, 780px)',
            },
            m: { xs: 1.5, sm: 3 },
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: { xs: 3, md: 4 },
            bgcolor: '#0C1218',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundImage:
              'radial-gradient(circle at 0% 0%, rgba(255,152,17,0.07), transparent 24rem)',
          },
        },
        backdrop: {
          sx: { bgcolor: 'rgba(2,6,10,0.84)', backdropFilter: 'blur(10px)' },
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        aria-label="Close project details"
        sx={{
          position: 'absolute',
          zIndex: 10,
          top: { xs: 10, sm: 16 },
          right: { xs: 10, sm: 16 },
          width: 44,
          height: 44,
          color: 'text.primary',
          bgcolor: '#131C24',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.34)',
          '&:hover': {
            color: 'primary.main',
            bgcolor: '#18232D',
            borderColor: 'rgba(255,152,17,0.5)',
          },
        }}
      >
        <Close />
      </IconButton>

      <DialogContent
        ref={contentRef}
        sx={{
          minHeight: 0,
          flex: '1 1 auto',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          p: 0,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            px: { xs: 2.5, sm: 4, md: 5 },
            pt: { xs: 6.5, sm: 5 },
            pb: { xs: 3, sm: 3.5 },
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {data.partnerLogo && (
            <Box
              component="img"
              src={data.partnerLogo}
              alt=""
              aria-hidden="true"
              sx={{
                position: 'absolute',
                top: { xs: 82, sm: 64 },
                right: { xs: -36, sm: -20 },
                width: { xs: 145, sm: 190 },
                height: { xs: 145, sm: 190 },
                objectFit: 'contain',
                opacity: { xs: 0.028, sm: 0.034 },
                filter: 'grayscale(1) brightness(2)',
                mixBlendMode: 'screen',
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 42%, black 100%)',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            />
          )}

          <Box
            sx={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'minmax(0, 1.35fr) minmax(250px, 0.65fr)',
              },
              alignItems: 'start',
              gap: { xs: 3, md: 5 },
            }}
          >
            <Box>
              <Box
                sx={{
                  mb: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 1.25,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Case study / {data.year}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255,255,255,0.58)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {data.under}
                </Typography>
              </Box>

              <Typography
                id="project-dialog-title"
                variant="h2"
                sx={{ mb: 1.5, maxWidth: 620 }}
              >
                {data.title}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ maxWidth: 620, lineHeight: 1.7 }}
              >
                {data.description[0]}
              </Typography>
            </Box>

            <Box
              sx={{
                pt: { xs: 2.5, md: 0.75 },
                pl: { md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 2.25,
                borderTop: {
                  xs: '1px solid rgba(255,255,255,0.08)',
                  md: 0,
                },
                borderLeft: {
                  xs: 0,
                  md: '1px solid rgba(255,255,255,0.1)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '160px minmax(0, 1fr)',
                    md: '1fr',
                  },
                  gap: { xs: 1.75, sm: 3, md: 2 },
                }}
              >
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ display: 'block', color: 'primary.main', mb: 0.5 }}
                  >
                    Role
                  </Typography>
                  <Typography variant="body2">{data.role}</Typography>
                </Box>

                <Box>
                  <Typography
                    variant="caption"
                    sx={{ display: 'block', color: 'primary.main', mb: 0.5 }}
                  >
                    Built with
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.65 }}
                  >
                    {getTechnologies(data.techStack).join(' · ')}
                  </Typography>
                </Box>
              </Box>

              {(data.liveDemoUrl || data.githubUrl) && (
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    columnGap: { xs: 2.5, sm: 3 },
                    rowGap: 1.5,
                  }}
                >
                  {data.liveDemoUrl && data.liveDemoUrl !== '#' && (
                    <Button
                      href={data.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="text"
                      endIcon={<Launch />}
                      sx={actionLinkSx}
                    >
                      Open live project
                    </Button>
                  )}
                  {data.githubUrl && (
                    <Button
                      href={data.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="text"
                      startIcon={<GitHub />}
                      sx={{
                        ...actionLinkSx,
                        color: 'text.secondary',
                      }}
                    >
                      Source on GitHub
                    </Button>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            px: { xs: 2.5, sm: 4, md: 5 },
            pt: { xs: 3, md: 3.5 },
            pb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 1.5,
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: 'primary.main',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Execution notes
              </Typography>
              <Typography variant="h3" sx={{ mt: 0.75 }}>
                What I built
              </Typography>
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ maxWidth: 260, textAlign: { sm: 'right' } }}
            >
              Approach, implementation, and outcome.
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              mt: { xs: 1.5, sm: 2 },
              pl: { xs: 3.5, sm: 4.5 },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 10,
                bottom: 10,
                left: { xs: 4, sm: 6 },
                width: '1px',
                bgcolor: 'rgba(255,152,17,0.24)',
              },
            }}
          >
            {workPoints.map((point, index) => (
              <Box
                key={point}
                sx={{
                  position: 'relative',
                  py: { xs: 1.5, sm: 1.75 },
                  borderTop:
                    index === 0 ? 0 : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    position: 'absolute',
                    top: { xs: 23, sm: 25 },
                    left: { xs: -31, sm: -35 },
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    bgcolor: index === 0 ? 'primary.main' : '#0C1218',
                    border: '1px solid rgba(255,152,17,0.72)',
                    boxShadow:
                      index === 0 ? '0 0 0 5px rgba(255,152,17,0.09)' : 'none',
                  }}
                />

                <Typography
                  variant="caption"
                  sx={{
                    color: 'primary.main',
                    letterSpacing: '0.08em',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.65, maxWidth: 760, lineHeight: 1.72 }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>

      {projects.length > 1 && onSelectProject && (
        <Box
          component="nav"
          aria-label="Project navigation"
          sx={{
            flexShrink: 0,
            px: { xs: 2.5, sm: 4, md: 5 },
            py: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
            bgcolor: 'rgba(12,18,24,0.96)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 -14px 30px rgba(4,8,12,0.24)',
          }}
        >
          <Button
            disabled={!previousProject}
            onClick={() => previousProject && onSelectProject(previousProject)}
            startIcon={<ArrowBack />}
            sx={{
              minWidth: 0,
              px: 0,
              py: 0.25,
              minHeight: 48,
              justifyContent: 'flex-start',
              color: 'text.secondary',
              visibility: previousProject ? 'visible' : 'hidden',
              '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
            }}
          >
            <Box sx={{ minWidth: 0, textAlign: 'left' }}>
              <Typography
                variant="caption"
                color="inherit"
                sx={{ display: 'block', lineHeight: 1.1, mb: 0.25 }}
              >
                Previous
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                noWrap
                sx={{
                  lineHeight: 1.35,
                  '@media (max-width:400px)': { display: 'none' },
                }}
              >
                {previousProject?.title}
              </Typography>
            </Box>
          </Button>

          <Button
            disabled={!nextProject}
            onClick={() => nextProject && onSelectProject(nextProject)}
            endIcon={<ArrowForward />}
            sx={{
              minWidth: 0,
              px: 0,
              py: 0.25,
              minHeight: 48,
              justifyContent: 'flex-end',
              color: 'text.secondary',
              visibility: nextProject ? 'visible' : 'hidden',
              '&:hover': { bgcolor: 'transparent', color: 'primary.main' },
            }}
          >
            <Box sx={{ minWidth: 0, textAlign: 'right' }}>
              <Typography
                variant="caption"
                color="inherit"
                sx={{ display: 'block', lineHeight: 1.1, mb: 0.25 }}
              >
                Next
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                noWrap
                sx={{
                  lineHeight: 1.35,
                  '@media (max-width:400px)': { display: 'none' },
                }}
              >
                {nextProject?.title}
              </Typography>
            </Box>
          </Button>
        </Box>
      )}
    </Dialog>
  );
};

export default React.memo(ProjectModal);
