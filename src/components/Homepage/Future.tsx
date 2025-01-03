import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';


export default function Future() {

  return (
    <Container id="features" 
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'inherit',
          flexDirection: { xs: 'column', md: 'row-reverse' },
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
            alignItems: 'center',
            textAlign: 'center',
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
                sx={{ color: 'text.primary', fontWeight: 700 , display: 'flex', flexDirection:'column', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center' }}
              >
                <Typography
                  component="span"
                  variant="h3"
                  sx={(theme) => ({
                    fontSize: 'inherit',
                    background: 'linear-gradient(30deg, #183871, #88D8FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    ...theme.applyStyles('dark', {
                      background: 'linear-gradient(30deg, #183871, #88D8FF)',
                    }),
                    fontWeight: 700,
                  })}
                >
                  A Healthier Future&nbsp; 
                </Typography>
                Starts Here
              </Typography>
              </motion.div>
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
                variant="h5"
                sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 }, display: 'flex', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center' }}
              >
                We&apos;ll work with you to make sure you&apos;re on the right track - because your recovery is our priority.
              </Typography>
            </motion.div>
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
              pointerEvents: 'none',
              border: 'none',
              backgroundColor: 'inherit',
              justifyContent: 'center',
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
              <Box
                  component="img"
                  src='/home_future.png'
                  sx={{
                    width: 500,
                    height: 350,
                  }}
                  alt='Future'
                />
            </motion.div>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
