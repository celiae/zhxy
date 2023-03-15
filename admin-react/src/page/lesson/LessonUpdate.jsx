import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import LessonForm from "./LessonForm";
import { lessonDetail, lessonUpdateOne } from "../../server/lesson";
import RSButton from "../../components/button/RSButton";
import { Grid } from "@mui/material";
export default function LessonUpdate() {
  const { id } = useParams();
  const { data, status } = useQuery(["lessonDetail", id], () =>
    lessonDetail(id)
  );
  const [form, setForm] = useState(null);
  React.useEffect(() => {
    setForm(data);
  }, [data]);
  if (status === "loading" || !form) return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RSButton submitData={form} handleSubmit={lessonUpdateOne} />
      </Grid>
      <Grid item>
        <LessonForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
