import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

export const UserMenu = () => {
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    auth.signOut();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <>
      <Box sx={{ display: "flex" }} onClick={handleOpenMenu}>
        <Typography>{displayName}</Typography>
        <Avatar
          alt="avatar"
          src={photoURL}
          sx={{ width: 30, height: 30, marginLeft: "5px" }}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </>
  );
};
