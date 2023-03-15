import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import CenterBox from "../../layout/CenterBox";

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
