import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import LessonForm from "./LessonForm";
import { lessonDetail, lessonUpdateOne } from "../../api/lesson";
import { Button, Grid } from "@mui/material";
export default function LessonUpdate() {
  const { id } = useParams();
  const { data, status } = useQuery(["lessonDetail", id], () =>
    lessonDetail(id)
  );
  const [form, setForm] = useState(null);
  const handleSubmit = () => {
    lessonUpdateOne(form);
    navigate(-1, { replace: true });
  };
  React.useEffect(() => {
    setForm(data);
  }, [data]);
  if (status === "loading" || !form) return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleSubmit}>提交</Button>
      </Grid>
      <Grid item>
        <LessonForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
