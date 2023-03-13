import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectLoginInfo,
  setLogin,
  setSystem,
  setUsername,
} from "../../store/loginSlice";
import signin from "../../server/signin";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SimpleAlert from "../../components/feedback/SimpleAlert";
import CenterBox from "../../layout/CenterBox";
import LightBlue from "../../components/shadowbox/LightBlue";
import Outter from "../../components/login/Outter";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = React.useState({
    open: false,
    type: "info",
    msg: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const loginInfo = useSelector(selectLoginInfo);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  React.useEffect(() => {
    if (
      loginInfo.login === true &&
      loginInfo.username !== "" &&
      loginInfo.system === "zhxy"
    ) {
      navigate(`/${loginInfo.username}`);
    } else {
      dispatch(setUsername(""));
      dispatch(setLogin(false));
      dispatch(setSystem(""));
    }
  });
  const [loginForm, setLoginForm] = React.useState({
    username: "",
    password: "",
  });
  const handleClick = async () => {
    const res = await signin(loginForm);
    if (res.status === 200) {
      navigate(`/${loginForm.username}`);
      dispatch(setLogin(true));
      dispatch(setUsername(loginForm.username));
      dispatch(setSystem("zhxy"));
      setAlert({ open: true, type: "success", msg: "登录成功" });
    } else if (res.status === 400) {
      setAlert({ open: true, type: "error", msg: "登录失败" });
    }
  };
  const toSignUp = () => {
    navigate("/signup");
  };
  return (
    <Outter>
      <LightBlue>
        <Card>
          <CardHeader subheader="请登录进入系统" />
          <CardContent>
            <Grid width={400} container spacing={2}>
              <SimpleAlert alert={alert} setAlert={setAlert} />
              <Grid item xs={12}>
                <TextField
                  value={loginForm.username}
                  onChange={(e) => {
                    setLoginForm({
                      ...loginForm,
                      username: e.target.value,
                    });
                  }}
                  label="用户名"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  value={loginForm.password}
                  onChange={(e) => {
                    setLoginForm({
                      ...loginForm,
                      password: e.target.value,
                    });
                  }}
                >
                  <InputLabel>密码</InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="密码"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={handleClick} variant="contained">
                  登录
                </Button>
              </Grid>
              <Grid item xs={5}>
                <Button onClick={toSignUp} variant="outlined">
                  注册
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </LightBlue>
    </Outter>
  );
}
