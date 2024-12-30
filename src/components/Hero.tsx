import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

// @third-party
import { motion } from 'framer-motion';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: theme.palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
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
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
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
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              }}
            >
              Your&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  background: 'linear-gradient(30deg, #183871, #88D8FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  ...theme.applyStyles('dark', {
                    background: 'linear-gradient(30deg, #183871, #88D8FF)', // Same gradient for dark mode
                  }),
                })}
              >
                Partner
              </Typography>
              &nbsp;in Recovery
            </Typography>
          </motion.div>
         
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Getting back to normal after an ICU stay can be challenging - but you don&apos;t have to do it alone. At ICU, we&apos;re here to make your recovery as&nbsp; 
            <Typography
              component="span"
              sx={{
                color: '#183871',
                fontWeight: 700,
              }}
            >
              smooth and worry - free as possible
            </Typography>
                . Through virtual visits with experts who understand&nbsp;
            <Typography
              component="span"
              sx={{
                color: '#183871',
                fontWeight: 700,
              }}
            >
              your unique needs
            </Typography>
              , we help you take&nbsp;
            <Typography
              component="span"
              sx={{
                color: '#183871',
                fontWeight: 700,
              }}
            >
              the next step toward feeling better and staying well.
            </Typography>
          </Typography>
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
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: '500px' } }}
            >
              <InputLabel htmlFor="name-hero" sx={visuallyHidden}>
                Name
              </InputLabel>
              <TextField
                id="name-hero"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your Name"
                placeholder="Your Name"
                fullWidth
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': 'Enter your Name',
                  },
                }}
              />
              <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                Email
              </InputLabel>
              <TextField
                id="email-hero"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                placeholder="Your email address"
                fullWidth
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': 'Enter your email address',
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ minWidth: 'fit-content' }}
              >
                Get Started Today
              </Button>
            </Stack>
          </motion.div>
        </Stack>
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
          <StyledBox id="video">
            <video
              src="/hero1.mp4"
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensures the video covers the entire box
              }}
            />
          </StyledBox>
        </motion.div>
      </Container>
    </Box>
  );
}
