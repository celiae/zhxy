import React from "react";
import { Grid } from "@mui/material";
import ItemNumber from "./ItemNumber";
import TeacherSalary from "./TeacherSalary";
export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4} lg={3}>
        <ItemNumber />
      </Grid>
      <Grid item xs={6} md={4} lg={3}></Grid>
      <Grid item xs={12}>
        <TeacherSalary />
      </Grid>
    </Grid>
  );
}
