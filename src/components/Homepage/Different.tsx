import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';


const tiers = [
  {
    title: 'Specialized Support',
    icon: '/home_diff_1.png',
    description: 'Meet with doctors who specialize in ICU recovery. We\'ll focus on preventing problems and helping you heal.',
  },
  {
    title: 'Guidance You Can Trust',
    icon: '/home_diff_2.png',
    description: 'From managing your medications to understanding your recovery plan, we\'re with you every step of the way.',
  },
  {
    title: 'Care on Your Terms',
    icon: '/home_diff_3.png',
    description: 'Our virtual appointments make it easy to get the care you need without leaving home.',
  },
];

export default function Different() {
  return (
    <Container
      id="different"
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
            Why We&apos;re&nbsp;
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
                Different
              </Typography>
          </Typography>
        </motion.div>
      </Box>
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
        <Grid
          container
          spacing={3}
          sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
          {tiers.map((tier) => (
            <Grid
              size={{ xs: 12, sm: 12 , md: 4 }}
              key={tier.title}
            >
              <Card
                sx={[
                  {
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    background: 'white',
                    border: '1px solid #95DDFF',
                  },
                  tier.title === 'Professional' &&
                    ((theme) => ({
                      border: 'none',
                      background:
                        'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                      boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                      ...theme.applyStyles('dark', {
                        background:
                          'radial-gradient(circle at 50% 0%, hsl(240, 1.90%, 10.40%), hsl(220, 30%, 16%))',
                        boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                      }),
                    })),
                ]}
              >
                <CardContent>
                  <Box
                    sx={[
                      {
                        mb: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                      },
                      tier.title === 'Professional'
                        ? { color: 'grey.100' }
                        : { color: '' },
                    ]}
                  >
                    <Box
                      component="img"
                      src={tier.icon}
                      alt={tier.title}
                      sx={{
                        width: 150,
                        height: 150,
                      }}
                    />
                  </Box>
                  <Box
                    sx={
                      {
                        mb: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#183871',
                        gap: 2,
                      }
                    }
                  >
                    <Typography component="h3" variant="h4">
                      {tier.title}
                    </Typography>
                  </Box>
                    <Box
                      sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                    >
                      <Typography
                        sx={{
                          textAlign: 'left',
                          color: 'text.secondary',
                          fontSize: '1rem',
                          width: '100%',
                        }}
                      >
                        {tier.description}
                      </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
