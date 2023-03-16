import { Box, CssBaseline } from "@mui/material";
import React from "react";
import CenterBox from "../box/CenterBox";

export default function Outter({ children }) {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <CssBaseline />
      <CenterBox>{children}</CenterBox>
    </Box>
  );
}
