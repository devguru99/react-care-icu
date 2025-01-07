import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Top() {

  return (
    <Box
      id="services-top"
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
            Our Services
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
              Empowering Your Post-ICU Recovery
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              width: '100%',
            }}
          >
            At Care Beyond ICU, we offer comprehensive virtual telehealth services designed to support ICU survivors and enhance their recovery. Our goal is to bridge the gap between hospital care and home recovery, ensuring you have the tools and guidance you need to thrive.
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              width: '100%',
            }}
          >
            Whether you&apos;re recovering from an ICU stay, managing medications, or navigating the challenges of post-ICU life, we are here to help. Our services are tailored to meet your individual needs, with a focus on improving health outcomes and reducing the risk of readmission.
          </Typography>
        </Stack>
        
      </Container>
    </Box>
  );
}
