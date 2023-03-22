import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import RouteButton from "../components/button/RouteButton";
import SubmitButton from "../components/button/SubmitButton";
import SimpleAlert from "../components/feedback/SimpleAlert";
import Outter from "../components/login/Outter";
import { API_ADMIN } from "../constant/api";
import { getDateTime } from "../util/useDate";
import getUUID from "../util/useUUID";
let jsonHeaders = new Headers();
jsonHeaders.append("Content-Type", "application/json");
export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [toLogin, setToLogin] = React.useState(false);
  const [alert, setAlert] = React.useState({
    open: false,
    type: "info",
    msg: "",
  });
  const [form, setForm] = React.useState({
    id: getUUID(),
    avatar: "",
    username: "",
    password: "",
    phone: "",
    contribution: 0,
    createDate: getDateTime(new Date()),
    lastLogin: getDateTime(new Date()),
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const back = () => {
    navigate(-1, { replace: true });
  };

  const signup = async () => {
    const res = await fetch(`${API_ADMIN}/createOne`, {
      headers: jsonHeaders,
      method: "POST",
      body: JSON.stringify(form),
    });
    if (res.status === 200) {
      setAlert({ open: true, type: "success", msg: "注册成功" });
      setToLogin(true);
    } else if (res.status === 400) {
      setAlert({ open: true, type: "error", msg: "注册失败" });
    }
  };
  return (
    <Outter>
      <Card>
        <CardContent>
          <SimpleAlert alert={alert} setAlert={setAlert} />
          <Grid container width={400} spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={3} direction="row">
                <RouteButton path={-1} msg={toLogin ? "去登录" : "返回"} />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={form.username}
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
                label="用户名"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                variant="outlined"
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
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
            <Grid item xs={12}>
              <TextField
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                }}
                label="手机号"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton event={signup} msg="注册" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Outter>
  );
}
