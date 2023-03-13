import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectLoginInfo } from "../store/loginSlice";
import ResponsiveDrawer from "./ResponsiveDrawer";

export default function Layout() {
  const login = useSelector(selectLoginInfo);
  if (login.login && login.system === "zhxy") {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(-125deg,#212121 30rem,white 30rem)",
        }}
      >
        <ResponsiveDrawer>
          <Outlet />
        </ResponsiveDrawer>
      </Box>
    );
  }
  return <Outlet />;
}
