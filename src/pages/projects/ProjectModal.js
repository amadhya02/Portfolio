import GitHub from '@mui/icons-material/GitHub';
import Launch from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';

import DescriptionModal from "../../components/DescriptionModal";

const ProjectModal = ({ data, open, handleClose }) => {
  console.log(data);
  return (
      <DescriptionModal description={data.description} techStack={data.techStack} open={open} handleClose={handleClose} logo={data.partnerLogo}>
        <Typography variant="h2" fontWeight={500}>
          {data.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.role}
        </Typography>
        <Stack direction="row" spacing={2}>
          {data.liveDemoUrl && (
              <Tooltip title="Live Demo">
                <IconButton
                    href={data.liveDemoUrl}
                    target="_blank"
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
                >
                  <Launch />
                </IconButton>
              </Tooltip>
          )}
          {data.githubUrl && (
              <Tooltip title="GitHub Repo">
                <IconButton
                    href={data.githubUrl}
                    target="_blank"
                    sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
          )}
        </Stack>
      </DescriptionModal>
  );
};

export default React.memo(ProjectModal);
