import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ toggleSidebar }) => {
  const handleGoGreenClick = () => {
    // Navigate to the landing page
    window.location.href = '/landing-page'; // Replace with the actual landing page URL
  };

  return (
    <AppBar sx={{ backgroundColor: 'green' }} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <h1 style={{ cursor: 'pointer' }} onClick={handleGoGreenClick}>
          GoGreen Grocery
        </h1>
        {/* Add your header content here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
