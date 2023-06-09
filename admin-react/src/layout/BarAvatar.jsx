import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CeAlertDialog from "../components/feedback/CeAlertDialog";
import { setLogout } from "../store/loginSlice";

export default function BarAvatar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.login.username);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [alert, setAlert] = React.useState({
    open: false,
    title: "",
    dialogContentText: "",
  });
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const toPersonal = () => {
    navigate(`${username}/personal`, { replace: true });
    handleCloseMenu();
  };
  const toSettings = () => {
    navigate(`${username}/setting`, { replace: true });
    handleCloseMenu();
  };
  const prepareLogout = () => {
    handleCloseMenu();
    setAlert({
      open: true,
      title: "退出登录",
      dialogContentText: "确定退出登录吗",
    });
  };
  const logout = () => {
    dispatch(setLogout());
    navigate("/", { replace: true });
    handleCloseMenu();
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <CeAlertDialog
        alertDialog={alert}
        setAlertDialog={setAlert}
        handleSubmit={logout}
      />
      <Tooltip title={"打开设置"}>
        <IconButton color="inherit" onClick={handleOpenMenu}>
          <Avatar alt="Remy Sharp" />
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
        <MenuItem onClick={toPersonal}>
          <Typography textAlign="center">个人中心</Typography>
        </MenuItem>
        <MenuItem onClick={toSettings}>
          <Typography textAlign="center">设置</Typography>
        </MenuItem>
        <MenuItem onClick={prepareLogout}>
          <Typography textAlign="center">退出登录</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
