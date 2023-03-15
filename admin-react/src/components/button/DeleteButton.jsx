import { Button } from "@mui/material";
import React from "react";

export default function DeleteButton({ id, handleDelete }) {
  return (
    <Button
      color={"error"}
      variant="contained"
      onClick={() => {
        handleDelete(id);
      }}
    >
      删除
    </Button>
  );
}
