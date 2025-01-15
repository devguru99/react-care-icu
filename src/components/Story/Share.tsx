import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const backgroundImage =`${import.meta.env.BASE_URL}share.png`;

export default function Share () {
    return (
    <Container id="share-banner" 
        sx={{
        pt: { xs: 4, sm: 5 },
        pb: { xs: 8, sm: 8 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        WebkitAlignItems: 'flex-start',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                height: { xs: 'auto', sm: 600},
                width: '100%',
                borderRadius: 4,
                gap: { xs: 2, sm: 6 },
                p: 3,
            }}
        >
        
            <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', width: '100%', pt: 2 }}
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
                variant="h2"
                sx={{  textAlign: 'center', mb: { xs: 2, sm: 1 }, marginTop: '1rem' }}
            >
                Your Recovery Story Could Be Next
            </Typography>
            <Typography
                sx={{
                textAlign: 'left',
                color: 'text.secondary',
                width: '100%',
                }}
            >
                At Care Beyond ICU, we are honored to help so many individuals on their journey to better health after an ICU stay. We are proud of our patients and their success, and we would love to help you achieve the same positive outcomes.
            </Typography>
            <Typography
                sx={{
                textAlign: 'left',
                color: 'text.secondary',
                width: '100%',
                }}
            >
                Whether you are recovering from an ICU stay or helping a loved one through their recovery, we are here to support you. With our personalized care, virtual consultations, and commitment to improving patient outcomes, we aim to reduce readmissions and ensure your journey toward recovery is as smooth and successful as possible.
            </Typography>
            </motion.div>
            </Stack>
            <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', width: '100%', pt: 2 }}
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
                variant="h2"
                sx={{  textAlign: 'center', mb: { xs: 2, sm: 1 }, marginTop: '1rem' }}
            >
                Share Your Story
            </Typography>
            <Typography
                sx={{
                textAlign: 'left',
                color: 'text.secondary',
                width: '100%',
                }}
            >
                Have you experienced success with our services? We&apos;d love to hear from you! Sharing your story can inspire others who are facing similar challenges. If you&apos;d like to share your recovery journey, please reach out to us at <b>admin@carebeyondicu.com</b> or click below to submit your testimonial.
            </Typography>
            </motion.div>
            <Button
                variant="contained"
                color="primary"
                size="small"
                component={Link}
                to="/contact"
                sx={{ flexShrink: 0, mt: 2 }}
            >
            Submit Your Story
            </Button>
            </Stack>
        </Box>
    </Container>
  );
};