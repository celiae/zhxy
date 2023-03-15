import { Box, Typography } from "@mui/material";
import React from "react";

export default function TitleValue({ title, value }) {
  return (
    <Box>
      <Typography variant="caption">{title}</Typography>
      <Typography variant="h6"> {value}</Typography>
    </Box>
  );
}
