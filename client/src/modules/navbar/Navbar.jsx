import React from 'react';
import NavbarListDrawer from './NavbarListDrawer.jsx';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { navLink } from '../../helpers/navLinks.js';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logos/iconoSun.png'

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  
  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={{ bgcolor: '#333', maxWidth :'100vw' }}>

        <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
             
              flexGrow: 1,
            }}
          >
            <img src={logo} alt='Logo' style={{ height: '5rem', }} />
          </Box>

          <IconButton
            color='inherit'
            size='large'
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLink.map((item) => (
              <Typography
                key={item.title}
                component={NavLink}
                to={item.path}
                variant='body1'
                sx={{
                  mx: '10px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: ' color 0.5s ease-in-out',
                 
                  '&:hover': {
                  color: '#9c9c9c', // Cambiar el color en hover
                  },
                  ...(location.pathname === item.path && {
                    borderBottom: '2px solid #695D5D', 
                  }),
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor='left' onClick={() => setOpen(false)}>
        <NavbarListDrawer navLinks={navLink} />
      </Drawer>
    </>
  );
}

export default Navbar;
