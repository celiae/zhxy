import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { lessonDelete, lessonDetail } from "../../server/lesson";

import BorderColorIcon from "@mui/icons-material/BorderColor";
export default function LessonDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, status } = useQuery(["lessonDetail", id], () =>
    lessonDetail(id)
  );
  const handleClick = () => {
    navigate("update");
  };
  const handleDelete = () => {
    lessonDelete(id);
    navigate(-1);
  };
  if (status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button onClick={handleClick} variant="outlined">
              <BorderColorIcon />
              更改
            </Button>
            <Button onClick={handleDelete} color="error">
              删除
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">课程名</Typography>
            <Typography variant="h6">{data.name}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">学时</Typography>
            <Typography variant="h6">{data.hours}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">类型</Typography>
            <Typography variant="h6">{data.type}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="caption">教师</Typography>
            <Typography variant="h6">
              {data.teacher.firstname}
              {data.teacher.lastname}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
