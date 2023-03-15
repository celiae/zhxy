import React from "react";
import LessonForm from "./LessonForm";
import { lesson } from "../../constant/initial";
import { lessonCreateOne } from "../../server/lesson";
import { Grid } from "@mui/material";
import RSButton from "../../components/button/RSButton";

export default function LessonCreate() {
  const [form, setForm] = React.useState(lesson);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RSButton submitData={form} handleSubmit={lessonCreateOne} />
      </Grid>
      <Grid item>
        <LessonForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
