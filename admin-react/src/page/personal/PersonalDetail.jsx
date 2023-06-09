import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginInfo, setLogin, setLogout } from "../../store/loginSlice";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../components/form/PasswordInput";
import changePassword from "../../api/admin";
import SimpleAlert from "../../components/feedback/SimpleAlert";
import Greeting from "./Greeting";
export default function PersonalDetail() {
  const navigate = useNavigate();
  const loginInfo = useSelector(selectLoginInfo);
  const [old_pass, setOld] = React.useState("");
  const [new_pass, setNew] = React.useState("");
  const [alert, setAlert] = React.useState({
    open: false,
    msg: "",
    type: "warning",
  });
  const dispatch = useDispatch();
  const username = useSelector((state) => state.login.username);
  const logout = () => {
    dispatch(setLogout());
    navigate("/", { replace: true });
  };
  const handleSubmit = async () => {
    setAlert({ ...alert, open: true });
    const res = await changePassword(
      { oldPass: old_pass, newPass: new_pass },
      username
    );
    if (res.status === 200) {
      setAlert({ msg: "修改成功", open: true, type: "warning" });
    } else {
      setAlert({ msg: "修改失败", open: true, type: "error" });
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Greeting loginInfo={loginInfo} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SimpleAlert alert={alert} setAlert={setAlert} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">修改密码</Typography>
              </Grid>
              <Grid item xs={12}>
                <PasswordInput
                  label={"旧密码"}
                  password={old_pass}
                  setPassword={setOld}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput
                  label={"新密码"}
                  password={new_pass}
                  setPassword={setNew}
                />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={handleSubmit} variant="contained">
                  更改密码
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
