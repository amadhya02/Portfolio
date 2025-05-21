import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Typography } from '@mui/material';

const EducationTimeline = () => {
  const items = [
    {
      year: '2021',
      title: 'B.Tech in Computer Science',
      institution: 'ABC Institute of Tech',
    },
    {
      year: '2017',
      title: 'High School',
      institution: 'XYZ Senior Secondary',
    },
  ];

  return (
    <div id="education">
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Timeline position="left">
        {items.map((edu, idx) => (
          <TimelineItem key={idx}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {idx !== items.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{edu.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.institution} — {edu.year}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default EducationTimeline;
