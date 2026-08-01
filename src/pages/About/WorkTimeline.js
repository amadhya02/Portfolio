import ArrowOutward from '@mui/icons-material/ArrowOutward';
import Close from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { motion, useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';

import { CAREER_SUMMARIES, getCompanyPeriod } from './careerData';
import CareerDetail from './CareerDetail';
import Eyebrow from '../../components/Eyebrow';
import EXPERIENCE from '../../constants/experience';
import { ARROW_HOVER_TRANSFORM } from '../../constants/motion';

const WorkTimeline = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const prefersReducedMotion = useReducedMotion();
  const selectedIndex = selectedCompany
    ? EXPERIENCE.findIndex(({ name }) => name === selectedCompany.name)
    : -1;

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '180px minmax(0, 1fr)' },
          gap: { xs: 3, md: 7 },
        }}
      >
        <Eyebrow>Selected work</Eyebrow>
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
              transform: ARROW_HOVER_TRANSFORM,
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
          <Eyebrow>Earlier chapters</Eyebrow>
          <Box>
            {EXPERIENCE.slice(1).map((company, itemIndex) => {
              const index = itemIndex + 1;

              return (
                <Box
                  component="button"
                  type="button"
                  key={company.name}
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
                    '&:hover .company-name, &:focus-visible .company-name': {
                      color: '#FFFFFF',
                    },
                    '&:hover .work-arrow, &:focus-visible .work-arrow': {
                      color: 'primary.main',
                      transform: ARROW_HOVER_TRANSFORM,
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

export default WorkTimeline;
