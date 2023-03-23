import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import DepartmentFinanceForm from "./DepartmentFinanceForm";
import { departmentFinanceCreateOne } from "../../../api/departmentfinance";

export default function DepartmentFinanceCreate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = React.useState({ department: { id: id } });
  const handleSubmit = () => {
    departmentFinanceCreateOne(form);
    navigate(-1, { replace: true });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
      <Grid item>
        <DepartmentFinanceForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
