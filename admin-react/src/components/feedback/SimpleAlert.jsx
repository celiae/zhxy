import React from "react";
import { Alert, Collapse } from "@mui/material";

export default function SimpleAlert({ alert, setAlert }) {
  if (alert.open === true) {
    setTimeout(() => {
      setAlert({ ...alert, open: false });
    }, 4000);
  }
  return (
    <Collapse in={alert.open}>
      <Alert severity={alert.type}>{alert.msg}</Alert>
    </Collapse>
  );
}
