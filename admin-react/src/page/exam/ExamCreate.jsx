import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { examCreateOne } from "../../api/exam";
import ExamForm from "./ExamForm";

export default function ExamCreate() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({});
  const handleSubmit = async () => {
    console.log(form);
    // await examCreateOne(form);
    navigate(-1);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <ExamForm form={form} setForm={setForm} />
        </Stack>
      </Grid>
    </Grid>
  );
}
