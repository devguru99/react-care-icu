import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronRight } from '@mui/icons-material';

const backgroundImage = '/about_banner.png';

export default function Reason () {
    return (
        
    <Box
        sx={{
            display: 'flex',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            color: '#fff',
            height: { xs: '100%', sm: 400 },
        }}
    >
        <Container id="reason" 
            sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            WebkitAlignItems: 'flex-start',
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
                    <Typography
                        component="h2"
                        variant="h3"
                        gutterBottom
                        sx={{ color: 'text.primary', fontWeight: 700 , mt: 3, display: 'flex', flexDirection:'row', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}
                    >
                        Why We&nbsp;
                    <Typography
                        component="span"
                        variant="h3"
                        sx={(theme) => ({
                        fontSize: 'inherit',
                        background: 'linear-gradient(30deg, #183871, #88D8FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        ...theme.applyStyles('dark', {
                            background: 'linear-gradient(30deg, #183871, #88D8FF)',
                        }),
                        fontWeight: 700,
                        })}
                    >
                        Do It
                    </Typography>
                </Typography>
                <Typography component="h3" variant="h4" sx={{ color: 'text.primary', textAlign: 'center', mt: 3 }}>
                    The journey home from the ICU can feel overwhelming. Up to 50% of ICU survivors experience challenges like weakness, memory issues, or medication problems—and many are readmitted to the hospital within weeks. We believe everyone deserves personalized care to help them heal, recover, and thrive.
                </Typography>
            </motion.div>
        </Container>
    </Box>
  );
};