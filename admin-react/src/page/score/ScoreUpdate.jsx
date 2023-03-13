import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import Grid from "@mui/material/Grid";
import { Button, Stack } from "@mui/material";
import { scoreGetNameByIds, scoreUpdateOne } from "../../server/score";
import ScoreForm from "../../components/form/ScoreForm";
import ShadowBox from "../../components/shadowbox/ShadowBox";
export default function ScoreUpdate() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const studentId = searchParams.get("studentId");
  const lessonId = searchParams.get("lessonId");
  const score = useQuery(["scoreGetNameByIds", studentId, lessonId], () =>
    scoreGetNameByIds(studentId, lessonId)
  );
  const [form, setForm] = React.useState(null);
  const handleBack = () => {
    navigate(-1);
  };
  const handleSubmit = async () => {
    await scoreUpdateOne(form);
    handleBack();
  };
  React.useEffect(() => {
    setForm(score.data);
  }, []);
  if (score.status === "loading" || !form) return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack direction={"row"} spacing={2}>
          <Button onClick={handleBack} variant="outlined" color="primary">
            返回
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            提交
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <ShadowBox>
          <ScoreForm form={form} setForm={setForm} />
        </ShadowBox>
      </Grid>
    </Grid>
  );
}
