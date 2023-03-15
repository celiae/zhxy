import { Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";

export default function HomeData({ children }) {
  return (
    <Card>
      <CardActionArea>
        <CardContent>{children}</CardContent>
      </CardActionArea>
    </Card>
  );
}
