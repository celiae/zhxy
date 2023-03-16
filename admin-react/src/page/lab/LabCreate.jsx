import React from "react";
import LabForm from "./LabForm";
import { labCreateOne } from "../../api/lab";
import { Grid } from "@mui/material";
import { randomLab } from "../../lib/random/lab";
import RSButton from "../../components/button/RSButton";

export default function LabCreate() {
  const [form, setForm] = React.useState(randomLab);
  return (
    <Grid container spacing={2}>
      <Grid item>
        <RSButton submitData={form} handleSubmit={labCreateOne} />
      </Grid>
      <Grid item>
        <LabForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
