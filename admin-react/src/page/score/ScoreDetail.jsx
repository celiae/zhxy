import { Stack, Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { useSearchParams } from "react-router-dom";
import { scoreGetNameByIds } from "../../api/score";
import RouteButton from "../../components/button/RouteButton";
import TitleValue from "../../components/box/TitleValue";
import DeleteButton from "../../components/button/DeleteButton";
export default function ScoreDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const studentId = searchParams.get("studentId");
  const lessonId = searchParams.get("lessonId");
  const score = useQuery(["scoreGetNameByIds", studentId, lessonId], () =>
    scoreGetNameByIds(studentId, lessonId)
  );
  if (score.status === "loading") return <Loading />;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="学生成绩详情" subheader="" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RouteButton msg={"返回成绩表"} path={-1} />
              </Grid>
              <Grid item xs={12}>
                <TitleValue title="课程" value={score.data.lesson.name} />
                <TitleValue
                  title="学生"
                  value={`${score.data.student.firstname} ${score.data.student.lastname}`}
                />
                <TitleValue title="成绩" value={score.data.score} />
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={3} direction={"row"}>
                  <RouteButton
                    msg={"更改"}
                    path={`../update?studentId=${studentId}&lessonId=${lessonId}`}
                  />
                  {/* <DeleteButton id={id} /> */}
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
