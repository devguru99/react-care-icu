import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Recovery() {

  return (
    <Container id="recovery" 
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
                sx={{ color: 'text.primary', fontWeight: 700 , display: 'flex', flexDirection:'row', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center' }}
              >
                Dedicated to Your&nbsp;
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
                  Recovery
                </Typography>
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
                  sx={{
                    textAlign: 'left',
                    color: 'text.secondary',
                    width: '100%',
                  }}
                >
                  At Care Beyond ICU, we understand that life after an ICU stay comes with unique challenges. That&apos;s why we&apos;ve made it our mission to support patients as they transition from hospital to home. Our virtual telehealth services are designed to provide the expert care, guidance, and reassurance you need to recover with confidence.
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
            <Button variant="contained"
              component={Link} 
              to="/contact"
              sx={{
                  padding: '10px 20px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  marginTop: '1rem',
              }}
            >
              Get Started Today
              <ChevronRight />
            </Button>
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
                  src={`${import.meta.env.BASE_URL}about_recovery.png`}
                  sx={{
                    width: {xs: '100%', md:'500'},
                    height: {xs: 'auto', md:'500'},
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
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
