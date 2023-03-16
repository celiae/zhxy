import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import Grid from "@mui/material/Grid";
import { scoreGetNameByIds, scoreUpdateOne } from "../../api/score";
import ScoreForm from "./ScoreForm";
import RSButton from "../../components/button/RSButton";
export default function ScoreUpdate() {
  const [searchParams, setSearchParams] = useSearchParams();
  const studentId = searchParams.get("studentId");
  const lessonId = searchParams.get("lessonId");
  const score = useQuery(["scoreGetNameByIds", studentId, lessonId], () =>
    scoreGetNameByIds(studentId, lessonId)
  );
  const [form, setForm] = React.useState(null);
  React.useEffect(() => {
    setForm(score.data);
  }, []);
  if (score.status === "loading" || !form) return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RSButton submitData={form} handleSubmit={scoreUpdateOne} />
      </Grid>
      <Grid item>
        <ScoreForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
