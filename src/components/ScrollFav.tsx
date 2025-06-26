
import React, { useEffect, useState } from 'react';

// @mui
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import { ArrowUpward, CalendarMonth, HelpCenterOutlined } from '@mui/icons-material';

import { useLocation } from 'react-router-dom';

/***************************  COMMON - SCROLL TO TOP BUTTON  ***************************/

export default function ScrollFab(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // if the user scrolls down, show the button
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);

    // attach scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // remove event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]);

  // handles the animation when scrolling to the top
  const scrollToTop = (): void => {
    if (isVisible) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
          sx={{
            position: 'fixed',
            zIndex: 1,
            left: { xs: 30, md: 40 },
            bottom: { xs: 100, md: 40 },
          }}
          title="Ready to Begin? Book Now!"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            style={{ position: 'relative' }}
          >
            <Fab
              className="glow-on-hover"
              rel="noopener noreferrer"
              aria-label="Ready to Begin? Book Now!"
              href='/appointment'
              sx={{ 
                width: { xs: 50, lg: 62 }, 
                height: { xs: 50, lg: 62 }, 
                backgroundColor: '#183871', 
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                    backgroundColor: '#102b5e',
                }, 
            }}
            >
              <CalendarMonth name="Book an appointment" sx={{ mr: 1 }} />
              Ready to Begin? Book Now!
            </Fab>
          </motion.div>
        </Box>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 1,
          right: { xs: 20, md: 40 },
          bottom: { xs: 20, md: 40 },
        }}
        title="Not Quite Ready? Learn How We Can Help"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ position: 'relative' }}
        >
          <Fab
            className="glow-on-hover"
            rel="noopener noreferrer"
            aria-label="Not Quite Ready? Learn How We Can Help"
            href='/faq'
            sx={{ 
              width: { xs: 50, lg: 62 }, 
              height: { xs: 50, lg: 62 }, 
              backgroundColor: '#183871', 
              color: 'white',
              fontWeight: 600,
              '&:hover': {
                  backgroundColor: '#102b5e',
              }, 
          }}
          >
            <HelpCenterOutlined name="Book an appointment" sx={{ mr: 1 }} />
            Not Quite Ready? Learn How We Can Help
          </Fab>
        </motion.div>
      </Box>
      {isVisible && (
        <Box
          sx={{
            position: 'fixed',
            zIndex: 1,
            right: { xs: 20, md: 40 },
            bottom: { xs: 20, md: 120 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Fab
              rel="noopener noreferrer"
              aria-label="scroll to top"
              onClick={scrollToTop}
              sx={{ 
                width: { xs: 40, lg: 52 }, 
                height: { xs: 40, lg: 52 }, 
                backgroundColor: '#183871', 
                color: 'white',
                '&:hover': {
                    backgroundColor: '#102b5e',
                }, 
                boxShadow: '0px 0px 5px rgba(255, 255, 255, 0.5)',
            }}
            >
              <ArrowUpward name="tabler-arrow-up" />
            </Fab>
          </motion.div>
        </Box>
      )}
    </>
  );
}
