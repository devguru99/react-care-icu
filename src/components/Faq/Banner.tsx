import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const backgroundImage = '/banner.webp';

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
        <Container id="faq-banner" 
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
                        Still Have Questions?
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'left',
                            color: 'text.secondary',
                            width: '70%',
                        }}
                    >
                    If you have a question that isn&apos;t answered here, don&apos;t hesitate to reach out to us. Our team is always ready to help and guide you through your recovery process.
                    </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to="/contact"
                    sx={{ flexShrink: 0, mr: 2, mt: 2 }}
                >
                Book a Consultation Now
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to="/contact"
                    sx={{ flexShrink: 0, mt: 2 }}
                >
                Contact Us
                </Button>
            </motion.div>
        </Container>
    </Box>
  );
};