import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const items = [
  {
    icon: <SupportAgentIcon />,
    title: 'Comprehensive',
    description:
      'Our resources cover every aspect of your recovery, from physical health to emotional well-being.',
  },
  {
    icon: <PersonOutlineOutlinedIcon />,
    title: 'Patient-Centered',
    description:
      'We\'ve tailored our materials to meet the needs of ICU survivors and their families, offering clear and easy-to-follow guidance.',
  },
  {
    icon: <AccessibilityNewOutlinedIcon />,
    title: 'Accessible',
    description:
      'Most of our resources are available for immediate download or access, so you can begin using them right away.',
  },
  {
    icon: <RocketLaunchOutlinedIcon />,
    title: 'Empowering',
    description:
      'We believe that informed patients recover faster, and our resources are designed to empower you to take control of your recovery journey.',
  },
];

export default function Access() {
  return (
    <Box
      id="access"
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
              Why&nbsp;
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
                Access Our Resources?
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
