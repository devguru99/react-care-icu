import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const items = [
  {
    icon: <VolunteerActivismOutlinedIcon />,
    title: 'Expert Care',
    description:
      'Our team of intensivists and healthcare professionals specializes in post-ICU recovery.',
  },
  {
    icon: <SupportAgentIcon />,
    title: 'Personalized Support',
    description:
      'We offer tailored care plans designed to address the specific needs of each patient.',
  },
  {
    icon: <ThumbUpOffAltIcon />,
    title: 'Convenience',
    description:
      'Virtual consultations make it easy to stay on track with your recovery, no matter where you are.',
  },
  {
    icon: <RocketLaunchOutlinedIcon />,
    title: 'Comprehensive Approach',
    description:
      'We focus on physical, emotional, and mental health to ensure a well-rounded recovery process.',
  },
];

export default function Trust() {
  return (
    <Box
      id="trust"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
            <Typography
              component="h2"
              variant="h3"
              gutterBottom
              sx={{ color: 'text.primary', fontWeight: 700 }}
            >
              Why Our Patients&nbsp;
              <Typography
                component="span"
                variant="h3"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  background: 'linear-gradient(30deg, #183871, #88D8FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  ...theme.applyStyles('dark', {
                    background: 'linear-gradient(30deg, #183871, #88D8FF)', // Same gradient for dark mode
                  }),
                  fontWeight: 700,
                })}
              >
                Trust Us?
              </Typography>
            </Typography>
          </motion.div>
        </Box>
        <Grid container spacing={2} sx={{width: 'fill-available', justifyContent: 'center'}}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  background: 'white',
                  p: 3,
                  height: '100%',
                  border: '1px solid #95DDFF',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium', color: '#183871' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
