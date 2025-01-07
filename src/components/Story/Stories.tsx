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
    title: 'Grace\'s Journey to Recovery',
    icon: '/grace_avatar.png',
    description: 'When Grace was discharged from the ICU after battling a severe respiratory infection, she was left physically weak and mentally drained. Her family was worried about managing her complex medication regimen and ensuring her recovery was on track. After enrolling in our Post-ICU Recovery Program, Grace received virtual consultations from our team of healthcare professionals who tailored a recovery plan specific to her needs. With regular follow-up appointments and a personalized medication reconciliation process, Grace\'s family felt more confident in her care. Today, Grace is fully recovered and back to enjoying her favorite activities, all thanks to the ongoing support she received through our program.',
  },
  {
    title: 'Tom\'s Successful Post-ICU Recovery',
    icon: '/tom_avatar.png',
    description: 'Tom spent several weeks in the ICU due to a severe heart condition. After discharge, he struggled with fatigue, memory loss, and the mental toll of his experience. He was also at risk of readmission due to complications related to his medication. Tom reached out to us for support, and with our medication reconciliation service, we were able to identify discrepancies and ensure he was taking the correct medications. Additionally, with our mental health resources, Tom gained tools to manage anxiety and depression. After a few months of virtual consultations and continued support, Tom is thriving and now enjoys a higher quality of life with renewed strength.',
  },
  {
    title: 'Lily\'s Positive Experience with Advanced Directives',
    icon: '/lily_avatar.png',
    description: 'Lily had always been proactive about her healthcare, but after a long ICU stay, she realized she needed to formalize her healthcare wishes. She reached out to us for guidance on creating advanced directives and healthcare planning. With the help of our team, Lily was able to create a comprehensive living will and healthcare power of attorney that reflected her values and wishes. Knowing that her healthcare decisions were documented and respected gave her peace of mind during her recovery, and she now feels more in control of her future health.',
  },
];

export default function Stories() {
  return (
    <Container
      id="stories"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 12 },
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
            Success&nbsp;
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
                Stories
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
              size={{ xs: 12, sm: 12 , md: 12 }}
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
                      sx={{ py: 1, display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'space-between', flexDirection: {xs: 'column-reverse', md: 'row'} }}
                    >
                    <div>
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
                    </div>
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
                          width: 200,
                          height: 200,
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
