import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';


export default function Social() {
  return (
    <Box
      id="social"
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
          alignItems: 'left',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '100%' },
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
              variant="h4"
              sx={{  color: 'text.secondary', textAlign: 'left', mb: { xs: 2, sm: 1 }, marginTop: '1rem' }}
          >
            Connect with Us on Social Media
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '100%' }, alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', textAlign: 'left', mb: { xs: 2, sm: 0 } }}
            >
              Stay informed and engaged with helpful resources, tips, and updates. Follow us on social media:
            </Typography>
            <Stack
              direction={{ xs: 'row', sm: 'row' }}
              spacing={1}
              useFlexGap
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              <a
                href="https://www.facebook.com/share/19xRmWeq7p/?mibextid=wwXIfr"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src='/social_facebook.png'
                  sx={{
                  width: 35,
                  height: 35,
                  }}
                />
              </a>
              <a
                href="https://x.com/carebeyondicu?s=21"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src='/social_twitter.png'
                  sx={{
                  width: 35,
                  height: 35,
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/carebeyondicu/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src='/social_instagram.png'
                  sx={{
                  width: 35,
                  height: 35,
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/carebeyondicu/"
                aria-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src='/social_linkedin.png'
                  sx={{
                  width: 35,
                  height: 35,
                  }}
                />
              </a>
            </Stack>
          </Stack>
          <Typography
              variant="body1"
              sx={{ color: 'text.secondary', textAlign: 'left', mt: { xs: 2, sm: 4 } }}
            >
              We understand that post-ICU recovery is challenging, and we&apos;re here to make it easier. Don&apos;t hesitate to reach out—we&apos;re here for you every step of the way.
            </Typography>
        </motion.div>
        </Box>
        
      </Container>
    </Box>
  );
}
