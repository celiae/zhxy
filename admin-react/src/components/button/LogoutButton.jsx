import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin, setUsername } from "../../store/loginSlice";
import CeAlertDialog from "../feedback/CeAlertDialog";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alertDialog, setAlertDialog] = React.useState({
    open: false,
    title: "确认退出吗",
    dialogContentText: "如果确认，您即将退出登录。再次登录需重输密码",
    buttonDisagree: "算了，不退",
    buttonAgree: "坚持退出",
  });
  const handleLogout = () => {
    dispatch(setUsername(""));
    dispatch(setLogin(false));
    navigate("/");
    setAlertDialog({ ...alertDialog, open: false });
  };
  return (
    <Box>
      <CeAlertDialog
        alertDialog={alertDialog}
        setAlertDialog={setAlertDialog}
        handleSubmit={handleLogout}
      />
      <Button
        onClick={() => {
          setAlertDialog({ ...alertDialog, open: true });
        }}
        variant="contained"
      >
        退出登录
      </Button>
    </Box>
  );
}
