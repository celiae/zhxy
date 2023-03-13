import { Box, Card, CardContent } from "@mui/material";
import React from "react";

export default function LightBlue({ children }) {
  return (
    <Card
      sx={{
        boxShadow: " .5px .5px 15px #bbdefb,  -0.5px -0.5px 15px #bbdefb",
      }}
    >
      <CardContent>
        <Box p={3}>{children}</Box>
      </CardContent>
    </Card>
  );
}
