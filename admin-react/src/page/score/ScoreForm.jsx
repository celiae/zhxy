import React from "react";
import { Grid, TextField } from "@mui/material";
import SelectStudent from "../../components/form/SelectStudent";
import SelectExam from "../../components/form/SelectExam";
import SelectClasses from "../../components/form/SelectClasses";
export default function ScoreForm({ form, setForm }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SelectClasses form={form} setForm={setForm} />
      </Grid>
      <Grid item xs={12}>
        <SelectStudent form={form} setForm={setForm} />
      </Grid>
      <Grid item xs={12}>
        <SelectExam form={form} setForm={setForm} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.score}
          onChange={(e) => {
            setForm({ ...form, score: e.target.value });
          }}
          label="平时分数"
          type={"number"}
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.score}
          onChange={(e) => {
            setForm({ ...form, score: e.target.value });
          }}
          label="考试分数"
          type={"number"}
          size="small"
        />
      </Grid>
    </Grid>
  );
}
