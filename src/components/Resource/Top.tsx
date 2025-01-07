import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Top() {

  return (
    <Box
      id="resource-top"
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
            Patient Resources
          </Typography>
        </Stack>


        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '100%' }, pt: 2 }}
        >
          <Typography
              variant="h4"
              sx={{  textAlign: 'center', mb: { xs: 2, sm: 1 }, marginTop: '1rem' }}
          >
              Tools to Support Your Recovery
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              width: '100%',
            }}
          >
            At Care Beyond ICU, we believe that knowledge is a vital part of recovery. That&apos;s why we&apos;ve created this Patient Resources page to provide you with useful information, tools, and guidance to help you understand your health, navigate your recovery process, and make informed decisions about your care.
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              width: '100%',
            }}
          >
            Whether you&apos;re adjusting to life after an ICU stay, managing new medications, or exploring options for continued care, our resources are here to support you every step of the way.
          </Typography>
        </Stack>
        
      </Container>
    </Box>
  );
}
