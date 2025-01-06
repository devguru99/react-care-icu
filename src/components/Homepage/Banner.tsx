import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronRight } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const backgroundImage = '/home_banner.png';

export default function Banner () {
    return (
        
    <Box
        sx={{
            display: 'flex',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            color: '#fff',
            height: 300,
        }}
    >
        <Container id="banner" 
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
                    sx={{ color: 'text.primary', fontWeight: 700 , display: 'flex', flexDirection:'row', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center' }}
                    >
                        Let&apos;s Take&nbsp;
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
                        This Journey&nbsp;
                    </Typography>
                    Together
                    </Typography>
                <Button variant="contained"
                    component={NavLink} 
                    to="/contact"
                    sx={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        borderRadius: '8px'
                    }}
                    >
                        Get Started Today
                        <ChevronRight />
                </Button>
            </motion.div>
        </Container>
    </Box>
  );
};