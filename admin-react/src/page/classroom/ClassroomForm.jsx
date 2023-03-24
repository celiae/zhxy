import React from "react";
import { Card, CardContent, Grid, TextField } from "@mui/material";
export default function ClassroomForm({ form, setForm }) {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.grade}
              onChange={(e) => {
                setForm({ ...form, grade: e.target.value });
              }}
              label="年级"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.speciality}
              onChange={(e) => {
                setForm({ ...form, speciality: e.target.value });
              }}
              label="专业"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              label="全称"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.description}
              onChange={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
              label="描述"
              size="small"
              fullWidth
              multiline
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
