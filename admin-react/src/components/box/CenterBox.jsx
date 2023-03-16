import { Box } from "@mui/material";
import React from "react";

export default function CenterBox({ children }) {
  return (
    <Box sx={{ display: "grid", height: "90vh", placeItems: "center" }}>
      {children}
    </Box>
  );
}
