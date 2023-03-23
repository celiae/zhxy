import React from "react";
import LabForm from "./LabForm";
import { labCreateOne } from "../../api/lab";
import { Button, Grid } from "@mui/material";
import { randomLab } from "../../lib/random/lab";
import { useNavigate } from "react-router-dom";

export default function LabCreate() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState(randomLab);
  const handleSubmit = () => {
    labCreateOne(form);
    navigate(-1, { replace: true });
  };
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
      <Grid item>
        <LabForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
