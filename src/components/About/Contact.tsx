import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import Chat from '@mui/icons-material/Chat';
import { motion } from 'framer-motion';

const items = [
  {
    icon: <Phone />,
    title: 'Phone Number',
    description:
      'Call Us 24h: +1 (732) 724-9644',
  },
  {
    icon: <Email />,
    title: 'Email',
    description:
      'Email Us at: admin@carebeyondicu.com',
  },
  {
    icon: <Chat />,
    title: 'Form',
    description:
      'Fill out our Contact Form to get started.',
  },
];

export default function Contact() {
  return (
    <Box
      id="contact"
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
            Let&apos;s make your recovery&nbsp;
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
                Easier, Together
              </Typography>
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: 'text.secondary', mb: { xs: 2, sm: 1 } }}
            >
              Contact Us Today
            </Typography>
        </motion.div>
        </Box>
        <Grid container spacing={2} sx={{width: 'fill-available'}}>
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
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
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
