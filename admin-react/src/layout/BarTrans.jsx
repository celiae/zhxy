import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";

export default function BarTrans() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={"切换语言"}>
        <IconButton color="inherit" onClick={handleOpenMenu}>
          <TranslateIcon />
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
          <Typography textAlign="center">中文</Typography>
        </MenuItem>
        <MenuItem>
          <Typography textAlign="center">English</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
