import React from "react";
import { Grid, TextField } from "@mui/material";
import { useQuery } from "react-query";
import { departmentList } from "../../api/department";
import Loading from "../../components/progress/Loading";
import SelectDepartment from "../../components/form/SelectDepartment";
export default function DepartmentForm({ form, setForm }) {
  let allDepartment = [];
  const { data, status } = useQuery("departmentList", departmentList);
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    if (form.id !== element.id) {
      allDepartment.push({
        id: element.id,
        name: element.name,
      });
    }
  });
  return (
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
          value={form.manager}
          onChange={(e) => {
            setForm({ ...form, manager: e.target.value });
          }}
          label="负责人"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.budget}
          onChange={(e) => {
            setForm({ ...form, budget: e.target.value });
          }}
          label="部门预算"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SelectDepartment form={form} setForm={setForm} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.description}
          onChange={(e) => {
            setForm({ ...form, description: e.target.value });
          }}
          label="简介"
          size="small"
          fullWidth
          multiline
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.createTime}
          label="创建时间"
          size="small"
          disabled
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.modifyTime}
          label="修改时间"
          size="small"
          disabled
        />
      </Grid>
    </Grid>
  );
}
