import { Button } from "@mui/material";
import React from "react";

export default function SubmitButton({ color, event, msg }) {
  return (
    <Button color={color} variant="contained" onClick={event}>
      {msg}
    </Button>
  );
}
