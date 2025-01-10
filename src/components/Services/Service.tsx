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
    title: 'Virtual Consultations with Medical Experts',
    icon: '/service_1.png',
    description: 'Our virtual consultations allow you to connect with our experienced healthcare team from the comfort of your home. We provide personalized care, review your health progress, and ensure that your recovery is on track. Whether you need advice on managing post-ICU symptoms or have questions about your recovery plan, we are here to support you every step of the way.',
    feature: [
      'Schedule a consultation at a time that works for you',
      'Meet virtually with one of our intensivists or healthcare professionals',
      'Receive expert advice on your recovery journey',
      'Discuss any health concerns, medications, or follow-up care needed',
    ],
    buttonText: 'Book a Consultation Now',
    link: '#',
  },
  {
    title: 'Medication Reconciliation',
    icon: '/service_2.png',
    description: 'Post-ICU recovery often involves managing multiple medications, which can be overwhelming and confusing. Medication errors or discrepancies are common, but with our medication reconciliation service, we ensure your medications are aligned with your recovery goals. Our team will work with you to review your prescriptions, prevent harmful drug interactions, and ensure that you\'re taking the right medications at the right times.',
    feature: [
      'We review your prescribed medications with you',
      'Identify and address any potential issues or discrepancies',
      'Help you understand your medications and their purpose',
      'Coordinate with your primary care physician to ensure consistency',
    ],
    buttonText: 'Learn More About Medication Reconciliation',
    link: '#',
  },
  {
    title: 'Post-ICU Recovery Support',
    icon: '/service_3.png',
    description: 'Recovering from an ICU stay can be challenging, both physically and mentally. Our post-ICU recovery support is designed to address the unique needs of ICU survivors. We offer ongoing virtual check-ins to monitor your health, provide guidance on managing Post-Intensive Care Syndrome (PICS), and help you return to daily life more smoothly. Our support extends to both physical recovery and emotional well-being.',
    feature: [
      'Regular virtual follow-ups to track your recovery progress',
      'Personalized recovery plans that focus on strengthening your body and mind',
      'Strategies for managing symptoms of PICS, including fatigue, anxiety, and muscle weakness',
      'Educational resources to help you understand your condition and how to manage it',
    ],
    buttonText: 'Schedule Your Recovery Support Session',
    link: '#',
  },
  {
    title: 'Advanced Directives Assistance',
    icon: '/service_4.png',
    description: 'Planning for the future is essential for peace of mind. We offer guidance on creating and completing advanced directives, ensuring your healthcare wishes are documented and respected. Whether you\'re ready to put your wishes in writing or need help understanding what advanced directives entail, our team is here to support you through the process.',
    feature: [
      'We walk you through the process of creating advanced directives',
      'Explain the different types of directives (e.g., living wills, healthcare power of attorney)',
      'Provide resources to help you make informed decisions about your future healthcare',
    ],
    buttonText: 'Get Started with Advanced Directives',
    link: '#',
  },
  {
    title: 'Collaboration with Primary Care Physicians',
    icon: '/service_5.png',
    description: 'Effective post-ICU care requires close coordination between specialists and your primary care physician. We work alongside your primary care team to ensure that your recovery is holistic and comprehensive. This collaboration allows us to address any ongoing health issues, track progress, and make adjustments to your care plan as needed.',
    feature: [
      'We communicate directly with your primary care physician to share relevant health updates',
      'Coordinate follow-up appointments and necessary tests (e.g., blood work, imaging)',
      'Provide detailed recovery insights to ensure all aspects of your health are covered',
    ],
    buttonText: 'Request a Consultation with Your Primary Care Team',
    link: '#',
  },
  {
    title: 'Patient Education and Resources',
    icon: '/service_6.png',
    description: 'We believe that informed patients recover better. That\'s why we offer a wealth of educational resources to help you understand your condition, your recovery process, and how to manage your health going forward. From videos to written materials, we provide easily accessible information tailored to your needs.',
    feature: [
      'Access educational resources on a variety of recovery topics',
      'Receive tips on improving health and preventing readmissions',
      'Get updates on the latest recovery practices and treatments',
    ],
    buttonText: 'Explore Our Educational Resources',
    link: '#',
  },
];

export default function Service() {
  return (
    <Container
      id="services"
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
          sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
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
                        How it works
                      </Typography>
                    </Box>
                    {tier.feature.map((line) => (
                      <Box
                        key={line}
                        sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}
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
