import { Grid, TextField } from "@mui/material";
import React from "react";
import ConDatePicker from "../../../components/form/ConDatePicker";

export default function DepartmentFinanceForm({ form, setForm }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.budget}
          onChange={(e) => {
            setForm({ ...form, budget: e.target.value });
          }}
          label="部门预算"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.cost}
          onChange={(e) => {
            setForm({ ...form, cost: e.target.value });
          }}
          label="部门消耗"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ConDatePicker label={"时间"} form={form} setForm={setForm} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={form.description}
          onChange={(e) => {
            setForm({ ...form, description: e.target.value });
          }}
          fullWidth
          multiline
          label="备注"
          size="small"
        />
      </Grid>
    </Grid>
  );
}
