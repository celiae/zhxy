import React from "react";
import { Card, CardContent, Grid, TextField } from "@mui/material";
import SelectClasses from "../../components/form/SelectClasses";
export default function ApartmentForm({ form, setForm }) {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <SelectClasses form={form} setForm={setForm} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.buildingNum}
              onChange={(e) => {
                setForm({ ...form, buildingNum: e.target.value });
              }}
              label="楼号"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.roomNum}
              onChange={(e) => {
                setForm({ ...form, roomNum: e.target.value });
              }}
              label="房号"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.location}
              onChange={(e) => {
                setForm({ ...form, location: e.target.value });
              }}
              label="地点"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.waterFee}
              onChange={(e) => {
                setForm({ ...form, waterFee: e.target.value });
              }}
              label="水费余额"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.electricityBill}
              onChange={(e) => {
                setForm({ ...form, electricityBill: e.target.value });
              }}
              label="电费余额"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.description}
              onChange={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
              label="备注"
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
