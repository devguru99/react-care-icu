
import React, { useEffect, useState } from 'react';

// @mui
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';
import { ArrowUpward } from '@mui/icons-material';

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
      {isVisible && (
        <Box
          sx={{
            position: 'fixed',
            zIndex: 1,
            right: { xs: 20, md: 40 },
            bottom: { xs: 20, md: 40 },
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
