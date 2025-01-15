import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import { motion } from 'framer-motion';

const items = [
  {
    icon: `${import.meta.env.BASE_URL}expect_1.png`,
    title: 'Help you manage your medications safely.',
    imageLight: `url("${import.meta.env.BASE_URL}expect_p_1.webp")`,
    imageDark: `url("${import.meta.env.BASE_URL}expect_p_1.webp")`,
    desc: (
      <>
      • Review all your medications to ensure safety and effectiveness.<br />
      • Prevent errors like duplications or harmful interactions.<br />
      • Reconcile prescriptions after discharge for accuracy.<br />
      • Explain medication use, doses, and side effects clearly.<br />
      • Adjust medications as needed during follow-ups.<br />
      • Simplify complex medication schedules.<br />
      • Coordinate care with your healthcare team.<br />
      • Provide on-call support for any medication concerns.
      </>
    )
  },
  {
    icon: `${import.meta.env.BASE_URL}expect_2.png`,
    title: 'Check on your progress and recommend next steps.',
    imageLight: `url("${import.meta.env.BASE_URL}expect_p_2.webp")`,
    imageDark: `url("${import.meta.env.BASE_URL}expect_p_2.webp")`,
    desc: (
      <>
      • Conduct regular virtual check-ins to monitor your recovery.<br />
      • Track symptoms and address any new or ongoing issues.<br />
      • Screen for Post-Intensive Care Syndrome (PICS) symptoms.<br />
      • Review medications and make adjustments as needed.<br />
      • Monitor lab results and tests to assess your health.<br />
      • Communicate with your primary care doctor and specialists to align care.<br />
      • Involve family members or caregivers in your recovery process.<br />
      • Provide clear next steps, like therapy, lifestyle changes, or specialist referrals.
      </>
    )
  },
  {
    icon: `${import.meta.env.BASE_URL}expect_3.png`,
    title: 'Teach you about your health and what to watch for.',
    imageLight: `url("${import.meta.env.BASE_URL}expect_p_3.webp")`,
    imageDark: `url("${import.meta.env.BASE_URL}expect_p_3.webp")`,
    desc: (
      <>
      • Explain your condition and recovery process in simple terms.<br />
      • Provide clear guidance on symptoms to watch for and when to seek help.<br />
      • Share tips for managing your health and preventing complications.<br />
      • Offer educational resources tailored to your needs.<br />
      • Answer any questions to help you feel confident about your recovery.
      </>
    )
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: theme.palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto', flexWrap: 'wrap' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          })}
          style={
            items[selectedItemIndex]
              ? ({
                  '--items-imageLight': items[selectedItemIndex].imageLight,
                  '--items-imageDark': items[selectedItemIndex].imageDark,
                } as any)
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            sx={{ color: 'text.secondary'}}
          >
            {selectedFeature.desc}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Expect() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="expect" 
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
        width: { sm: '100%', md: '80%' },
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
          What You Can&nbsp;
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
            Expect
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          At Care Beyond ICU, we make your recovery journey as seamless and effective as possible. Here&apos;s what you can expect:
        </Typography>
      </motion.div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
          width: {xs: 'inherit'}
        }}
      >
        
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'var(--items-image-height)',
            minHeight: '535px',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignContent: 'center',
              border: 'none',
              backgroundColor: 'inherit'
            }}
          >
            <Box
              sx={(theme) => ({
                m: 'auto',
                width: 480,
                height: 320,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                alignContent: 'center',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              })}
              style={
                items[selectedItemIndex]
                  ? ({
                      '--items-imageLight': items[selectedItemIndex].imageLight,
                      '--items-imageDark': items[selectedItemIndex].imageDark,
                    } as any)
                  : {}
              }
            />
            <Typography gutterBottom variant="body2" color="text.secondary">
            {items[selectedItemIndex].desc}
            </Typography>
          </Card>
        </Box>
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
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
                    <Box
                      component="img"
                      src={icon}
                      alt={icon}
                      sx={{
                        width: 40,
                        height: 40,
                      }}
                    />
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
                    <Typography variant="h4">{title}</Typography>
                  </motion.div>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
      </Box>
    </Container>
  );
}
