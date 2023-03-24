import { Box, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectLoginInfo } from "../store/loginSlice";
import ResponsiveDrawer from "./ResponsiveDrawer";
export default function Layout() {
  const login = useSelector(selectLoginInfo);
  const theme = createTheme({
    palette: {
      mode: login.themeMode,
    },
  });
  if (login.login && login.system === "zhxy") {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: "100vh",
          }}
        >
          <ResponsiveDrawer>
            <Outlet />
          </ResponsiveDrawer>
        </Box>
      </ThemeProvider>
    );
  }
  return <Outlet />;
}
