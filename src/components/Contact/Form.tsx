import React from 'react';
import { Box, Typography, Button, Container, Card, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const backgroundImage = '/contact_form.png';

export default function Form () {
    return (
        
    <Box
        sx={{
            display: 'flex',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            height: { xs: '100%', sm: '100%' },
        }}
    >
        <Container id="contactform" 
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
                display: 'flex',
                width: 'inherit',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                alignItems: {xs: 'center'},
                }}
            >
                <Box
                sx={{
                    display: 'flex',
                    width: { xs: '100%', md: '50%' },
                    height: 'var(--items-image-height)',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    textAlign: 'center',
                    gap: 1,
                }}
                >
                    <Box
                        component="img"
                        src='/contact_phone.png'
                        sx={{
                        width: 40,
                        height: 40,
                        }}
                    />
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
                        sx={{
                            textAlign: 'left',
                            width: '100%',
                            fontWeight: 'bold',
                        }}
                        >
                        Phone:
                    </Typography>
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
                        <Typography
                        sx={{
                            textAlign: 'left',
                            width: '100%',
                        }}
                        >
                        Call us at +1 (732) 724-9644 for any immediate questions or assistance. Our team is available during business hours to provide you with the support you need.
                        </Typography>
                    </motion.div>
                    <Box
                        component="img"
                        src='/contact_mail.png'
                        sx={{
                        width: 40,
                        height: 40,
                        }}
                    />
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
                        sx={{
                            textAlign: 'left',
                            width: '100%',
                            fontWeight: 'bold',
                        }}
                        >
                        Email:
                    </Typography>
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
                        <Typography
                        sx={{
                            textAlign: 'left',
                            width: '100%',
                        }}
                        >
                        For general inquiries or to learn more about our services, email us at admin@carebeyondicu.com. We typically respond right away!
                        </Typography>
                    </motion.div>
                    <Box
                        component="img"
                        src='/contact_chat.png'
                        sx={{
                        width: 40,
                        height: 40,
                        }}
                    />
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
                        sx={{
                            textAlign: 'left',
                            width: '100%',
                            fontWeight: 'bold',
                        }}
                        >
                        Book an Appointment
                    </Typography>
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
                        <Typography
                        sx={{
                            textAlign: 'left',
                            width: '100%',
                        }}
                        >
                        Ready to take the next step in your recovery? <br />You can easily book a virtual consultation with one of our experts.
                        </Typography>
                    </motion.div>
                    <Button color="primary" variant="contained" size="small"
                        sx={{
                            marginTop: '1rem',
                        }}
                    >
                        Book Now
                    </Button>
                </Box>
                <Box
                sx={{
                    display: 'flex',
                    width: { xs: '100%', md: '50%' },
                    height: 'var(--items-image-height)',
                }}
                >
                <Card
                    variant="outlined"
                    sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: 'none',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    padding: 3.5,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{  textAlign: 'center', mb: { xs: 2, sm: 1 }, marginTop: '1rem' }}
                    >
                        Send Us a Message
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            width: '100%',
                            marginBottom: '1rem',
                        }}
                        >
                    If you prefer, you can fill out the form below, and one of our team members will get back to you promptly.
                    </Typography>
                    <Grid container spacing={3}>
                        <FormGrid size={{ xs: 12, md: 6 }}>
                        <FormLabel htmlFor="name" required>
                            Name
                        </FormLabel>
                        <OutlinedInput
                            id="name"
                            name="name"
                            aria-label="Enter your full name"
                            type="text"
                            placeholder="John Doe"
                            autoComplete="name"
                            required
                            size="small"
                            sx={{ backgroundColor: 'white'}}
                        />
                        </FormGrid>

                        <FormGrid size={{ xs: 12, md: 6 }}>
                        <FormLabel htmlFor="email" required>
                            Email
                        </FormLabel>
                        <OutlinedInput
                            id="email"
                            name="email"
                            type="email"
                            aria-label="Enter your email address"
                            placeholder="john.doe@example.com"
                            autoComplete="email"
                            required
                            size="small"
                            sx={{ backgroundColor: 'white'}}
                        />
                        </FormGrid>

                        <FormGrid size={{ xs: 12 }}>
                        <FormLabel htmlFor="message" required>
                            Message
                        </FormLabel>
                        <OutlinedInput
                            id="standard-multiline-static"
                            name="message"
                            placeholder="Write your message here..."
                            autoComplete="off"
                            required
                            multiline
                            rows={8}
                            sx={{ height: 200 , backgroundColor: 'white'}}
                        />
                        </FormGrid>
                    </Grid>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                        <Button color="primary" variant="contained" size="small">
                            Submit&nbsp;
                            <Box
                                component="img"
                                src='/submit_vector.png'
                                sx={{
                                width: 20,
                                height: 20,
                                }}
                            />
                        </Button>
                    </CardActions>
                </Card>
                </Box>
            </Box>
        </Container>
    </Box>
        
    );
};