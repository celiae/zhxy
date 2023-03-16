import { CardContent, CardHeader, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectLoginInfo,
  setLogin,
  setSystem,
  setUsername,
} from "../../store/loginSlice";
import signin from "../../api/signin";
import SimpleAlert from "../../components/feedback/SimpleAlert";
import LightBlue from "../../components/shadowbox/LightBlue";
import Outter from "../../components/login/Outter";
import RouteButton from "../../components/button/RouteButton";
import SubmitButton from "../../components/button/SubmitButton";
import PasswordInput from "../../components/form/PasswordInput";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = React.useState({
    open: false,
    type: "info",
    msg: "",
  });
  const loginInfo = useSelector(selectLoginInfo);
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
  const [i_username, setIUsername] = React.useState("");
  const [i_password, setIPassword] = React.useState("");
  const login = async () => {
    const res = await signin({
      username: i_username,
      password: i_password,
    });
    if (res.status === 200) {
      navigate(`/${i_username}`);
      dispatch(setLogin(true));
      dispatch(setUsername(i_username));
      dispatch(setSystem("zhxy"));
      setAlert({ open: true, type: "success", msg: "登录成功" });
    } else if (res.status === 400) {
      setAlert({ open: true, type: "error", msg: "登录失败" });
    }
  };
  return (
    <Outter>
      <LightBlue>
        <CardHeader subheader="请登录进入系统" />
        <CardContent>
          <Grid width={400} container spacing={2}>
            <SimpleAlert alert={alert} setAlert={setAlert} />
            <Grid item xs={12}>
              <TextField
                value={i_username}
                onChange={(e) => {
                  setIUsername(e.target.value);
                }}
                label="用户名"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput
                label={"密码"}
                password={i_password}
                setPassword={setIPassword}
              />
            </Grid>
            <Grid item xs={4}>
              <SubmitButton msg={"登录"} event={login} />
            </Grid>
            <Grid item xs={5}>
              <RouteButton msg="注册" path="/signup" />
            </Grid>
          </Grid>
        </CardContent>
      </LightBlue>
    </Outter>
  );
}
