import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  List,
  ListItem,
  Box,
} from "@mui/material";
export default function SearchDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton color="inherit" variant="outlined" onClick={handleClickOpen}>
        <SearchIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>搜索</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="关键词"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <List>
          <ListItem>ata</ListItem>
          <ListItem>ata</ListItem>
          <ListItem>ata</ListItem>
        </List>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleClose}>搜索</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
