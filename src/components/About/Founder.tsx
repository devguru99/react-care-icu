import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { styled } from '@mui/material/styles';

// @third-party
import { motion } from 'framer-motion';
import { Skeleton } from '@mui/material';

interface FounderProps {
  loading?: boolean;
}

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

export default function Founder(props: FounderProps) {
  const { loading = false } = props;

  return (
    <Box
      id="founder"
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
          sx={{ alignItems: 'center', width: '100%' }}
        >
            <Card
                sx={[
                  {
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    background: 'white',
                    border: 'none',
                    padding: '0px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 0 12px 8px hsla(100, 25%, 80%, 0.2)',   
                  },
                ]}
            >
               {loading ? (
                  <Skeleton 
                    variant="rectangular" 
                    width="auto" 
                    height={700} 
                    animation="wave" 
                  />
              ):(
                <CardMedia
                  component="img"
                  sx={{ 
                      width: { xs: '100%', md: 'auto' },
                      height: { xs: 'auto', md: 'auto' },
                    }}
                  image="/about_founder.png"
                  alt="Founder"
                  loading="lazy"
                />
                )}
                <Box
                  sx={[
                    {
                      mb: 1,
                      width: { xs: '100%', md: 'auto' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: 2,
                      padding: { xs: 4, md: 5 },
                    },
                  ]}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
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
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                          justifyContent: 'flex-start',
                          textAlign: 'center',
                          paddingTop: '1rem',
                        }}
                      >
                        Meet the Founder of&nbsp;
                        <Typography
                          variant="inherit"
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
                          CareBeyondICU
                        </Typography>
                      </Typography>
                  </motion.div>
                <CardActions sx={{ paddingTop: '2rem' }}>
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
                      Dr.
                      <Typography
                        component="span"
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        Abo-Zed&nbsp;
                      </Typography>
                      is a board-certified physician with specialties in Internal Medicine, Pulmonary, and Critical Care. After completing three years of residency at the University of Pittsburgh Medical Center and three years of fellowship at Rutgers New Jersey Medical School, he decided to focus on helping patients recover better after their ICU stay.&nbsp;
                      <br />
                      He founded&nbsp;
                      <Typography
                        component="span"
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        Care Beyond ICU&nbsp;
                      </Typography>
                      to make sure patients get the support they need after leaving the hospital. Through services like virtual follow-ups and pharmacy help, Dr. Abo-Zed works to prevent readmissions and ensure smoother recoveries.
                      <br />
                      Dr. Abo-Zed is also passionate about stopping problems before they start. One of his projects, a&nbsp;
                      <Typography
                        component="span"
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        maternal sepsis study
                      </Typography>
                      , was published in&nbsp;<i>CHEST Journal</i>&nbsp;and focuses on catching infections early in pregnant women to keep them out of the ICU. He&apos;s also a co-author of&nbsp;<i>Rapid Response Events in the Critically Ill</i>, a book that teaches students how to handle emergency situations in healthcare.
                      <br />
                      <br />
                      Credentials <br /> <br />
                      <FiberManualRecordIcon fontSize="inherit"/> Board Certified in Internal Medicine, Pulmonary, and Critical Care <br />
                      <FiberManualRecordIcon fontSize="inherit"/> 3 Years of Residency: University of Pittsburgh Medical Center <br />
                      <FiberManualRecordIcon fontSize="inherit"/> 3 Years of Fellowship: Rutgers New Jersey Medical School <br />
                      <FiberManualRecordIcon fontSize="inherit"/> Co-author: <i>Rapid Response Events in the Critically Ill</i>
                    </Typography>
                  </motion.div>
                  </CardActions>
                  </CardContent>
                  </Box>
               
              </Card>
        </Stack>
      </Container>
    </Box>
  );
}
