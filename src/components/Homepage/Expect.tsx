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
    icon: '/expect_1.png',
    title: 'Help you manage your medications safely.',
    imageLight: `url("/expect_p_1.png")`,
    imageDark: `url("/expect_p_1.png")`,
  },
  {
    icon: '/expect_2.png',
    title: 'Check on your progress and recommend next steps.',
    imageLight: `url("/expect_p_2.png")`,
    imageDark: `url("/expect_p_2.png")`,
  },
  {
    icon: '/expect_3.png',
    title: 'Teach you about your health and what to watch for.',
    imageLight: `url("/expect_p_3.png")`,
    imageDark: `url("/expect_p_3.png")`,
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
          After leaving the ICU, it&apos;s normal to have questions or concerns. We&apos;re here to:
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
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              border: 'none',
              backgroundColor: 'inherit'
            }}
          >
            <Box
              sx={(theme) => ({
                m: 'auto',
                width: 420,
                height: 500,
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
