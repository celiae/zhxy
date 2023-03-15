import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RouteButton({ color, path, msg }) {
  const navigate = useNavigate();

  return (
    <Button
      color={color}
      variant="outlined"
      onClick={() => {
        navigate(path);
      }}
    >
      {msg}
    </Button>
  );
}
