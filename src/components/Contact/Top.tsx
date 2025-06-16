import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


// @third-party
import { motion } from 'framer-motion';


export default function Top() {

  return (
    <Box
      id="contact"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 3 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              flexWrap: 'wrap',
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            Contact Us - We&apos;re Here to&nbsp;Support&nbsp;Your Recovery
          </Typography>
        </Stack>


        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '90%' }, pt: 2 }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: '100%',
            }}
          >
            At Care Beyond ICU, we&apos;re committed to helping you navigate your recovery journey with personalized care and attention. Whether you have questions about our services, need help with your post-ICU recovery, or just want to learn more about how we can assist you, we&apos;re here to listen and help.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: '100%',
            }}
          >
            Please feel free to reach out to us through any of the following options:
          </Typography>
          <Typography
              variant="h4"
              sx={{  textAlign: 'center', mb: { xs: 2, sm: 1 }, marginTop: '1rem' }}
          >
              Get in Touch
          </Typography>

        </Stack>
        <Stack
          spacing={4}
          sx={{
            width: '100%',
            maxWidth: '1200px',
            mx: 'auto',
            mt: 4,
            px: 2,
          }}
        >
          {/* <Typography variant="h4" align="center">
            Schedule an Appointment
          </Typography> */}

            <Box
              component="iframe"
              src="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=04bc39bf0678b4a513f96d8257763cf53aa1ea7a5ad2812fad6b91f197d85b43c791341ca9a05ba4f2e36ee0c5b68975d2bec0af04f23226"
              sx={{
                width: '100%',
                height: { md: '900px', xs: '800px' },
                border: 0,
              }}
              title="Schedule Appointment"
              loading="lazy"
            />
        </Stack>
      </Container>
    </Box>
  );
}
