import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material/";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/**
 * @param alertDialog
 * @param {open,title,dialogContentText,buttonDisagree,buttonAgree}
 */
export default function CeAlertDialog({
  alertDialog,
  setAlertDialog,
  handleSubmit,
}) {
  const handleClose = () => {
    setAlertDialog({ ...alertDialog, open: false });
  };
  const handleAgree = () => {
    handleClose();
    handleSubmit();
  };
  return (
    <Dialog
      open={alertDialog.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{alertDialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {alertDialog.dialogContentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          {alertDialog.buttonDisagree}
        </Button>
        <Button variant="outlined" onClick={handleAgree}>
          {alertDialog.buttonAgree}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
