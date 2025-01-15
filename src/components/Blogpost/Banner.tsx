import React from 'react';
import { Box, Typography, Button, Container, Stack, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const backgroundImage = `${import.meta.env.BASE_URL}banner.webp`;

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
        <Container id="blogs-banner" 
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
                        Stay Connected
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            color: 'text.secondary',
                            width: '70%',
                            mb: 2,
                        }}
                    >
                    Want to stay updated with new posts and tips for your recovery journey? Subscribe to our newsletter and never miss an article!
                    </Typography>
                <Stack direction="row" spacing={1} useFlexGap>
                    <TextField
                        id="email-newsletter-blogpost"
                        hiddenLabel
                        size="small"
                        variant="outlined"
                        fullWidth
                        aria-label="Enter your email address"
                        placeholder="Your email address"
                        slotProps={{
                        htmlInput: {
                            autoComplete: 'off',
                            'aria-label': 'Enter your email address',
                        },
                        }}
                        sx={{ width: '250px' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ flexShrink: 0 }}
                    >
                        Subscribe
                    </Button>
                </Stack>
            </motion.div>
        </Container>
    </Box>
  );
};