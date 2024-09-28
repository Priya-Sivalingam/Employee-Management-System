import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Ensure this import works after installation
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect to check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token"); // Replace with your token key
    setIsLoggedIn(!!token); // Set login state based on token existence
  }, []);

  // Handle opening and closing the menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token from local storage
    setIsLoggedIn(false); // Update login status
    navigate("/login"); // Navigate to login page
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar className="container mx-auto">
        {/* Menu button on the left */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Title or branding in the center */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {isLoggedIn ? "Welcome Back!" : "Employee Management System"}
        </Typography>

        {/* Menu dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => { navigate("/profile"); handleMenuClose(); }}>
            Profile
          </MenuItem>
          <MenuItem onClick={() => { navigate("/settings"); handleMenuClose(); }}>
            Settings
          </MenuItem>
        </Menu>

        {/* Conditional rendering based on login status */}
        {isLoggedIn ? (
          <Button
            color="inherit"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button
              color="inherit"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
