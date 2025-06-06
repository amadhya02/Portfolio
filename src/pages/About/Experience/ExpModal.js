import AccessTime from '@mui/icons-material/AccessTime';
import LocationOn from '@mui/icons-material/LocationOn';
import {
  Typography,
  Stack,
} from '@mui/material';
import React from 'react';

import DescriptionModal from "../../../components/DescriptionModal";

const ExpModal = ({ data, open, handleClose }) => {

  return (
      <DescriptionModal description={data.desc} techStack={data.tech} open={open} handleClose={handleClose} logo={data.logo}>
        <Typography variant="h2" fontWeight={500} gutterBottom>
          {data.role}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          <AccessTime fontSize="small" />
          <Typography variant="body2">{data.duration}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LocationOn fontSize="small" />
          <Typography variant="body2">{data.location}</Typography>
        </Stack>
      </DescriptionModal>
  );
};

export default React.memo(ExpModal);
