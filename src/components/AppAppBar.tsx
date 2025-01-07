import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';
import { NavLink } from 'react-router-dom';
import NavButton from '@/components/NavButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import { ExpandLess } from '@mui/icons-material';
import { Collapse } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [submenuOpen, setSubmenuOpen] = React.useState(false);

  const handleToggleSubmenu = () => {
    setSubmenuOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NavButton to="/">Home</NavButton>
              <NavButton to="/services">Services</NavButton>
              <NavButton to="/about">About</NavButton>
              <NavButton to="/blogs">Blog</NavButton>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}
                id="demo-customized-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                disableElevation
                onClick={handleClick}
                endIcon={openMenu ? <ExpandLess /> : <ExpandMoreIcon />}
              >
                Pages
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem component={NavLink} to="/resource" onClick={handleClose}>Resources</MenuItem>
                <MenuItem component={NavLink} to="/story" onClick={handleClose}>Testimonials & Success Stories</MenuItem>
                <MenuItem component={NavLink} to="/faq" onClick={handleClose}>FAQ</MenuItem>
              </Menu>
              <NavButton to="/contact" sx={{ minWidth: 0 }}>Contact</NavButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button component={NavLink} to="/contact" color="primary" variant="contained" size="small">
              Start Now
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem component={NavLink} to="/">Home</MenuItem>
                <MenuItem component={NavLink} to="/services">Services</MenuItem>
                <MenuItem component={NavLink} to="/about">About</MenuItem>
                <MenuItem component={NavLink} to="/blogs">Blog</MenuItem>
                <Box>
                  <MenuItem onClick={handleToggleSubmenu} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Pages
                    {submenuOpen ? <ExpandLess /> : <ExpandMoreIcon />}
                  </MenuItem>
                  <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                    <MenuItem component={NavLink} to="/resource" onClick={handleClose} sx={{ pl: 4 }}>
                      Resources
                    </MenuItem>
                    <MenuItem component={NavLink} to="/story" onClick={handleClose} sx={{ pl: 4 }}>
                      Testimonials & Success Stories
                    </MenuItem>
                    <MenuItem component={NavLink} to="/faq" onClick={handleClose} sx={{ pl: 4 }}>
                      FAQ
                    </MenuItem>
                  </Collapse>
                </Box>
                <MenuItem component={NavLink} to="/contact">Contact</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button component={NavLink} to="/contact" color="primary" variant="contained" fullWidth>
                    Start Now
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
