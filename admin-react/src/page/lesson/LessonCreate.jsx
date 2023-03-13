import React from "react";
import { useNavigate } from "react-router-dom";
import LessonForm from "../../components/form/LessonForm";
import { lesson } from "../../constant/initial";
import { lessonCreateOne } from "../../server/lesson";
import { Grid, Button, Box } from "@mui/material";

export default function LessonCreate() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState(lesson);
  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  const handleSubmit = () => {
    lessonCreateOne(form);
    handleBack();
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleBack} variant="outlined" color="primary">
          返回
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
      <Grid item>
        <LessonForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
