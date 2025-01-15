import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';


export default function Mission() {
  return (
    <Container
      id="mission"
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
           <Grid
              size={{ xs: 12, sm: 12 , md: 4 }}
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
                    src={`${import.meta.env.BASE_URL}about_mission_1.png`}
                    sx={{
                      width: {xs: '100%', md:'auto'},
                      height: {xs: 'auto', md:'auto'},
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                    alt='mission_1'
                  />
              </motion.div>
          </Grid>
          <Grid
              size={{ xs: 12, sm: 12 , md: 4 }}
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
                    height: '435.6px'
                  },
                ]}
              >
                <CardContent>
                  <Box
                    sx={[
                      {
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                      },
                    ]}
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
                      Our&nbsp;
                      <Typography
                          component="span"
                          variant="h3"
                          sx={(theme) => ({
                            fontSize: 'inherit',
                            background: 'linear-gradient(30deg, #183871, #88D8FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            ...theme.applyStyles('dark', {
                              background: 'linear-gradient(30deg, #183871, #88D8FF)', // Same gradient for dark mode
                            }),
                            fontWeight: 700,
                          })}
                        >
                          Mission
                        </Typography>
                    </Typography>
                  </motion.div>
                  </Box>
                  <Box
                    sx={
                      {
                        mt: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#183871',
                        gap: 2,
                      }
                    }
                  >
                    <Typography component="h3" variant="h4">
                    To improve the lives of ICU survivors by making recovery easier, reducing readmissions, and empowering patients to take control of their health.
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
          </Grid>
          <Grid
              size={{ xs: 12, sm: 12 , md: 4 }}
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
                    src={`${import.meta.env.BASE_URL}about_mission_2.png`}
                    sx={{
                      width: {xs: '100%', md:'auto'},
                      height: {xs: 'auto', md:'auto'},
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                    alt='mission_2'
                  />
              </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
