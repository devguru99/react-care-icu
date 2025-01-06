import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Top() {

  return (
    <Box
      id="blogs-top"
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
            Blog
          </Typography>
        </Stack>


        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '90%' }, pt: 2 }}
        >
          <Typography
              variant="h4"
              sx={{  textAlign: 'center', mb: { xs: 2, sm: 1 }, marginTop: '1rem' }}
          >
              Insights for a Healthier Recovery
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: '100%',
            }}
          >
            Welcome to our blog, your go-to resource for practical advice, expert insights, and the latest in post-ICU care. Whether you&apos;re navigating life after an ICU stay or supporting a loved one, we&apos;re here to empower you with the knowledge and tools you need to recover with confidence.
          </Typography>
        </Stack>
        
      </Container>
    </Box>
  );
}
