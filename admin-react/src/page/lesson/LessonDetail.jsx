import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { useParams } from "react-router-dom";
import { lessonDelete, lessonDetail } from "../../server/lesson";
import TitleValue from "../../components/box/TitleValue";
import RouteButton from "../../components/button/RouteButton";
import DeleteButton from "../../components/button/DeleteButton";
export default function LessonDetail() {
  const { id } = useParams();
  const { data, status } = useQuery(["lessonDetail", id], () =>
    lessonDetail(id)
  );
  if (status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <RouteButton msg={"更改"} path="update" />
          </Grid>
          <Grid item xs={9}>
            <DeleteButton id={id} handleDelete={lessonDelete} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TitleValue title={"课程名"} value={data.name} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TitleValue title={"课学时程名"} value={data.hours} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TitleValue title={"类型"} value={data.type} />
          </Grid>
          <Grid item xs={4}>
            <TitleValue
              title={"教师"}
              value={data.teacher.firstname + " " + data.teacher.lastname}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
