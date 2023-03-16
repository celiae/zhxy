import {
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";

export default function BarMail() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={"邮箱"}>
        <IconButton color="inherit" onClick={handleOpenMenu}>
          <Badge badgeContent={7} color="error">
            <EmailIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem>
          <Typography textAlign="center">arstars</Typography>
        </MenuItem>
        <MenuItem>
          <Typography textAlign="center">arsasrt</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
