import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';


const tiers = [
  {
    title: 'Post-ICU Recovery Guide',
    icon: '/resource_1.png',
    description: 'Recovering from an ICU stay can be complex and overwhelming. Our comprehensive guide provides insights into what to expect during your recovery, how to manage physical and mental health challenges, and how to build a successful recovery plan.',
    feature: [
      'Steps to manage Post-Intensive Care Syndrome (PICS)',
      'Tips for physical rehabilitation and strength-building',
      'Guidance on mental health and emotional recovery',
      'Coping strategies for family members and caregivers',
    ],
    buttonText: 'Download the Post-ICU Recovery Guide',
    link: '#',
  },
  {
    title: 'Medication Management Resources',
    icon: '/resource_2.png',
    description: 'Managing medications after ICU discharge is essential for preventing complications and promoting healing. We\'ve created a set of resources to help you understand your prescriptions, avoid common medication errors, and ensure you\'re following your treatment plan effectively.',
    feature: [
      'Medication reconciliation checklist',
      'Tips on organizing and tracking medications',
      'Information on common drug interactions and side effects',
      'A guide to speaking with your healthcare team about your medications',
    ],
    buttonText: 'Download the Medication Management Guide',
    link: '#',
  },
  {
    title: 'Advanced Directives and Healthcare Planning',
    icon: '/resource_3.png',
    description: 'Planning for future healthcare decisions is an important part of ensuring your wishes are respected. Our advanced directives resources explain what advanced directives are, why they are important, and how to create them. We also offer guidance on selecting a healthcare power of attorney to ensure that your care preferences are followed.',
    feature: [
      'Step-by-step guide to creating advanced directives',
      'Information on living wills, healthcare power of attorney, and DNR orders',
      'A list of questions to ask when considering advanced care planning',
      'Sample forms for creating your own directives',
    ],
    buttonText: 'Explore Advanced Directives Resources',
    link: '#',
  },
  {
    title: 'Exercise and Physical Rehabilitation Tips',
    icon: '/resource_4.png',
    description: 'Physical recovery after an ICU stay often requires intentional rehabilitation. Our exercise and rehabilitation resources provide tips and recommendations for safe exercises, recovery routines, and strategies for regaining strength and mobility.',
    feature: [
      'Gentle exercises to improve strength and flexibility',
      'Stretching and breathing techniques to reduce stress',
      'How to set realistic recovery goals',
      'Recommended activities for improving cardiovascular health',
      'Safety precautions when starting rehabilitation',
    ],
    buttonText: 'Download the Exercise & Rehabilitation Guide',
    link: '#',
  },
  {
    title: 'Mental Health and Emotional Support',
    icon: '/resource_5.png',
    description: 'The emotional impact of an ICU stay can be significant. Our mental health resources offer practical tips for managing anxiety, depression, and stress during recovery. We also provide information on coping strategies and how to seek professional support when needed.',
    feature: [
      'Coping with anxiety and depression after ICU',
      'Stress management techniques for recovery',
      'Support groups and community resources',
      'How to communicate your emotional needs to family and caregivers',
      'The importance of seeking professional mental health support',
    ],
    buttonText: 'Explore Mental Health Resources',
    link: '#',
  },
  {
    title: 'Family and Caregiver Support',
    icon: '/resource_6.png',
    description: 'We understand that family members and caregivers play a crucial role in recovery. Our resources for families and caregivers provide valuable tips for supporting your loved one, managing stress, and ensuring that both the patient and caregiver have the tools they need for a smooth recovery process.',
    feature: [
      'How to provide emotional and physical support for recovery',
      'Managing caregiver burnout and stress',
      'Tips for organizing medical care and appointments',
      'Resources for caregiving organizations and support groups',
    ],
    buttonText: 'Download the Family & Caregiver Guide',
    link: '#',
  },
  {
    title: 'Recovery Tools and Apps',
    icon: '/resource_7.png',
    description: 'Technology can be a great aid in the recovery process. We\'ve compiled a list of apps and tools that can help you stay on track with your health goals, manage medications, and track recovery progress.',
    feature: [
      'Medication reminder apps',
      'Health tracking apps for monitoring physical progress',
      'Apps for mental health and stress management',
      'Tools for organizing medical appointments and follow-up care',
    ],
    buttonText: 'Check Out Our Recommended Recovery Apps',
    link: '#',
  },
];

export default function Resources() {
  return (
    <Container
      id="resource"
      sx={{
        pt: { xs: 4, sm: 6 },
        pb: { xs: 8, sm: 8 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      
        <Grid
          container
          spacing={3}
          sx={{ alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}
        >
          {tiers.map((tier) => (
            <Grid
              size={{ xs: 12, sm: 12 , md: 6 }}
              key={tier.title}
            >
              <Card
                sx={[
                  {
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 4,
                    background: 'white',
                    border: '1px solid #95DDFF',
                    minHeight: { md: 670 },
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
                          width: 100,
                          height: 100,
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
                    <Box
                      sx={
                        {
                          mb: 1,
                          display: 'flex',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          color: '#183871',
                          gap: 2,
                        }
                      }
                    >
                      <Typography component="h5" variant="h6">
                        What&apos;s Included
                      </Typography>
                    </Box>
                    {tier.feature.map((line) => (
                      <Box
                        key={line}
                        sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}
                      >
                        <GppGoodOutlinedIcon
                          sx={[
                            {
                              width: 20,
                            },
                            tier.title === 'Professional'
                              ? { color: 'primary.light' }
                              : { color: 'primary.main' },
                          ]}
                        />
                        <Typography
                          variant="subtitle2"
                          component={'span'}
                          sx={[
                            tier.title === 'Professional'
                              ? { color: 'grey.50' }
                              : { color: 'text.secondary' },
                          ]}
                        >
                          {line}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </motion.div>
                <CardActions>
                  <Button
                  fullWidth
                  variant='contained'
                  color='primary'
                >
                  {tier.buttonText}
                </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Container>
  );
}
