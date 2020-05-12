import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/search" label="Search" onClick={handleClose}>Search</MenuItem>
        <MenuItem component={Link} to="/bookings" label="Bookings" onClick={handleClose}>Bookings</MenuItem>
        <MenuItem component={Link} to="/listings" label="Listings" onClick={handleClose}>Listings</MenuItem>
        <MenuItem component={Link} to="/profile" label="Profile" onClick={handleClose}>Profile</MenuItem>
      </Menu>
    </div>
  );
}