import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function IconPopover({ title, icon, menu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClick = (path) => {
    navigate(path, { replace: true });
    handleCloseMenu();
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={title}>
        <IconButton color="inherit" onClick={handleOpenMenu}>
          {icon}
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
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClick(item.href);
            }}
          >
            <Typography textAlign="center">{item.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
