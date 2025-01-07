import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PaymentsIcon from '@mui/icons-material/Payments';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const items = [
  {
    icon: <VolunteerActivismOutlinedIcon />,
    title: 'Expert Care',
    description:
      'Our team includes experienced intensivists and healthcare professionals who specialize in post-ICU recovery.',
  },
  {
    icon: <ThumbUpOffAltIcon />,
    title: 'Convenience',
    description:
      'Virtual consultations make it easy for you to receive care from the comfort of your home.',
  },
  {
    icon: <SupportAgentIcon />,
    title: 'Holistic Support',
    description:
      'We provide a comprehensive approach to recovery, addressing both physical and emotional health.',
  },
  {
    icon: <ChecklistIcon />,
    title: 'Personalized Plans',
    description:
      'We tailor our services to fit your unique needs, ensuring a smooth recovery process.',
  },
  {
    icon: <PaymentsIcon />,
    title: 'Cost-Effective',
    description:
      'By reducing ICU readmissions, our services help lower healthcare costs, while improving your long-term outcomes.',
  },
];

export default function Choose() {
  return (
    <Box
      id="choose"
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
                Choose Us?
              </Typography>
            </Typography>
          </motion.div>
        </Box>
        <Grid container spacing={2} sx={{width: 'fill-available', justifyContent: 'center'}}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
