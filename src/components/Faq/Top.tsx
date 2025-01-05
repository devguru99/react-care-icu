import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


// @third-party
import { motion } from 'framer-motion';


export default function Top() {

  return (
    <Box
      id="faq-top"
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
            Frequently Asked Questions (FAQ)
          </Typography>
        </Stack>


        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '100%' }, pt: 5 }}
        >
          <Box
            sx={{
              display: 'flex',
              width: 'inherit',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
              alignItems: {xs: 'center'},
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: { xs: '100%', md: '50%' },
                height: 'var(--items-image-height)',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'left',
                  color: 'text.secondary',
                  width: '100%',
                }}
              >
                At Care Beyond ICU, we understand that recovering from an ICU stay can bring many questions and uncertainties. To help guide you through the process, we&apos;ve compiled answers to some of the most common questions we receive. If you don&apos;t see your question here, feel free to contact us—we&apos;re here to help!
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: { xs: '100%', md: '50%' },
                height: 'var(--items-image-height)',
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  border: 'none',
                  backgroundColor: 'inherit',
                  justifyContent: 'center',
                }}
              >
                  <Box
                      component="img"
                      src='/faq_top.png'
                      sx={{
                        width: {xs: '100%'},
                        height: {xs: 'auto'},
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                      alt='Future'
                    />
              </Card>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
