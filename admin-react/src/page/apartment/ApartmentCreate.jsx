import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ApartmentForm from "./ApartmentForm";
import { apartmentCreateOne } from "../../api/apartment";

export default function ApartmentCreate() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({});
  const handleSubmit = () => {
    apartmentCreateOne(form);
    navigate(-1, { replace: true });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
      <Grid item>
        <ApartmentForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
