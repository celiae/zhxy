import React from "react";
import LessonForm from "./LessonForm";
import { lesson } from "../../constant/initial";
import { lessonCreateOne } from "../../api/lesson";
import { Button, Grid } from "@mui/material";

export default function LessonCreate() {
  const [form, setForm] = React.useState(lesson);
  const handleSubmit = () => {
    lessonCreateOne(form);
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
        <LessonForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
