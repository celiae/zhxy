import React from "react";
import { useNavigate } from "react-router-dom";
import DepartmentForm from "./DepartmentForm";
import { randomDepartment } from "../../lib/random/department";
import { departmentCreateOne } from "../../server/department";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

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
      <Grid item xs={12}>
        <Typography variant="h4" color={"secondary"}>
          添加部门
        </Typography>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Stack direction={"row"} spacing={3}>
              <Button onClick={handleBack} variant="outlined" color="primary">
                返回
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                提交
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <DepartmentForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
