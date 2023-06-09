import { Grid } from "@mui/material";
import React from "react";
import ScoreForm from "./ScoreForm";
import { SCORE } from "../../constant/initial";
import { scoreCreateOne } from "../../api/score";
import RSButton from "../../components/button/RSButton";

export default function ScoreCreate() {
  const [form, setForm] = React.useState(SCORE);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RSButton submitData={form} handleSubmit={scoreCreateOne} />
      </Grid>
      <Grid item>
        <ScoreForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
