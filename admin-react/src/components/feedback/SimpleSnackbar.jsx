import React from "react";
import { Button, IconButton, Snackbar } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SimpleSnackbar({ snackbar, setSnackbar }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };
  const action = (
    <React.Fragment>
      <Button variant="contained" size="small" onClick={handleClose}>
        撤销
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <AiOutlineCloseCircle />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbar.msg}
        action={action}
      />
    </div>
  );
}
