import React from "react";
import { Grid, TextField } from "@mui/material";
import ShadowBox from "../../components/shadowbox/ShadowBox";
export default function LabForm({ form, setForm }) {
  return (
    <ShadowBox>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            label="名称"
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            value={form.failedNum}
            onChange={(e) => {
              setForm({ ...form, failedNum: e.target.value });
            }}
            label="失败项目数"
            size="small"
            type={"number"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            value={form.successNum}
            onChange={(e) => {
              setForm({ ...form, successNum: e.target.value });
            }}
            label="成功项目数"
            size="small"
            type={"number"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            value={form.deviceCondition}
            onChange={(e) => {
              setForm({ ...form, deviceCondition: e.target.value });
            }}
            label="设备情况"
            size="small"
            type={"number"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            value={form.deviceCost}
            onChange={(e) => {
              setForm({ ...form, deviceCost: e.target.value });
            }}
            label="设备资金"
            size="small"
            type={"number"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            value={form.projectCost}
            onChange={(e) => {
              setForm({ ...form, projectCost: e.target.value });
            }}
            label="项目资金"
            size="small"
            type={"number"}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            value={form.workload}
            onChange={(e) => {
              setForm({ ...form, workload: e.target.value });
            }}
            label="工作量"
            size="small"
            type={"number"}
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
            value={form.description}
            onChange={(e) => {
              setForm({ ...form, description: e.target.value });
            }}
            label="简介"
            size="small"
            multiline
            fullWidth
          />
        </Grid>
      </Grid>
    </ShadowBox>
  );
}
