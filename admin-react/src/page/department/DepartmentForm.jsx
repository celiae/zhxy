import React from "react";
import { Grid, TextField, Button, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { departmentList } from "../../api/department";
import Loading from "../../components/progress/Loading";
import ShadowBox from "../../components/shadowbox/ShadowBox";
export default function DepartmentForm({ form, setForm, submit }) {
  const [value, setValue] = React.useState(null);
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
          <Autocomplete
            sx={{ width: 300 }}
            disablePortal
            options={allDepartment}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            )}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.name;
            }}
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                setValue({
                  name: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                setValue({
                  name: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
              setForm({ ...form, parentDepartmentId: newValue.id });
            }}
            renderInput={(params) => (
              <TextField {...params} size="small" label="上级部门" />
            )}
          />
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
    </ShadowBox>
  );
}
