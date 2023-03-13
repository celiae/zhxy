import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import CenterBox from "../../layout/CenterBox";

export default function Outter({ children }) {
  return (
    <Box
      sx={{
        background: "linear-gradient(125deg,#212121 45rem,white 30rem)",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <CenterBox>
        <Box
          bgcolor={"#2196f3"}
          p={3}
          sx={{ borderRadius: "10px" }}
          pl={6}
          pr={6}
        >
          <Typography color={"white"} variant="h4">
            智慧校园运维管理系统
          </Typography>
        </Box>
        {children}
      </CenterBox>
    </Box>
  );
}
