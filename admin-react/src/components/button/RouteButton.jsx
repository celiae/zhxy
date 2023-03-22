import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RouteButton({ color, path, msg, variant }) {
  const navigate = useNavigate();

  return (
    <Button
      color={color}
      variant={variant ? variant : "outlined"}
      onClick={() => {
        navigate(path);
      }}
    >
      {msg}
    </Button>
  );
}
