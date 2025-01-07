import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';


const tiers = [
  { 
    key: '1',
    description: '“After being discharged from the ICU, I felt overwhelmed by the recovery process. I was unsure how to manage my medications and follow up on my recovery plan. Working with Care Beyond ICU made all the difference. The virtual consultations with my healthcare team were incredibly convenient, and the medication reconciliation process helped me avoid serious issues. I felt supported every step of the way, and I\'m now recovering with confidence.”',
    author: { name: 'John D.',role: 'ICU Survivor', avatar: '/john_avatar.png' },
  },
  {
    key: '2',
    description: '“As a caregiver for my mother after her ICU stay, I was worried about how to best support her while managing her medications and recovery. The team at Care Beyond ICU provided us with the resources and guidance we needed. They helped me understand my mother\'s condition, offered emotional support, and made sure she had the right medications at the right time. It felt like we were never alone in this journey.”',
    author: { name: 'Sarah L.',role: 'Family Caregiver', avatar: '/sarah_avatar.png' },
  },
  {
    key: '3',
    description: '“I didn\'t realize how much I was struggling after being discharged from the ICU until I worked with Care Beyond ICU. The support I received during the post-ICU recovery program helped me regain my strength and my mental clarity. I was able to ask questions, get help with follow-up care, and feel empowered during the process. I\'m doing much better now, and I owe it to the team that was there for me.”',
    author: { name: 'Carlos M.',role: 'ICU Survivor', avatar: '/carlos_avatar.png' },
  },
];

function Author({ author }: { author: { name: string; role: string; avatar: string } }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <Avatar
          alt={author.name}
          src={author.avatar}
          sx={{ width: 38, height: 38 }}
        />
        <Box
          sx={{ py: 1, display: 'flex', flexDirection: 'column', alignItems: 'left' }}
        >
          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
            {author.name}
          </Typography>
          <Typography variant="caption">
            {author.role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function Testimonial() {
  return (
    <Container
      id="testimonial"
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
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 700 }}
          >
            Patient&nbsp;
            <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  background: 'linear-gradient(30deg, #183871, #88D8FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  ...theme.applyStyles('dark', {
                    background: 'linear-gradient(30deg, #183871, #88D8FF)',
                  }),
                })}
              >
                Testimonials
              </Typography>
          </Typography>
      </Box>
        <Grid
          container
          spacing={3}
          sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
          {tiers.map((tier) => (
            <Grid
              size={{ xs: 12, sm: 12 , md: 4 }}
              key={tier.key}
            >
              <Card
                sx={[
                  {
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 1,
                    background: 'white',
                    border: '1px solid #95DDFF',
                    minHeight: {md: 460},
                  },
                ]}
              >
                <CardContent>
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
                  <Author author={tier.author} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Container>
  );
}
