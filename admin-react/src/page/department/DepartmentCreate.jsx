import React from "react";
import { useNavigate } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";
import { randomDepartment } from "../../lib/random/department";
import { departmentCreateOne } from "../../api/department";
import { Button, Card, CardContent, Grid, Stack } from "@mui/material";

export default function DepartmentCreate() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState(randomDepartment);
  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  const handleSubmit = () => {
    departmentCreateOne(form);
    handleBack();
  };
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
      <Grid item>
        <DepartmentForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
