import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function FormDialog({
  formDialog,
  setFormDialog,
  idList,
  handleSubmit,
}) {
  const handleClose = () => {
    setFormDialog({ ...formDialog, open: false });
  };
  return (
    <Dialog open={formDialog.open} onClose={handleClose}>
      <DialogTitle>{formDialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{formDialog.msg}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          variant="standard"
          fullWidth
          value={formDialog.inputValue}
          label={formDialog.label}
          type={formDialog.inputType}
          color={formDialog.type}
          onChange={(e) => {
            setFormDialog({ ...formDialog, inputValue: e.target.value });
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button
          color={formDialog.type}
          disabled={formDialog.inputValue === "确定" ? false : true}
          onClick={() => {
            handleSubmit(idList);
            handleClose();
          }}
        >
          {formDialog.buttonMsg}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
