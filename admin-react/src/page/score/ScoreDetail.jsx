import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { scoreGetNameByIds } from "../../server/score";
export default function ScoreDetail() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const studentId = searchParams.get("studentId");
  const lessonId = searchParams.get("lessonId");
  const score = useQuery(["scoreGetNameByIds", studentId, lessonId], () =>
    scoreGetNameByIds(studentId, lessonId)
  );
  const handleClick = () => {
    navigate(`../update?studentId=${studentId}&lessonId=${lessonId}`);
  };
  const handleBack = () => {
    navigate(-1);
  };
  const toStudent = (studentId) => {
    const initialPath = location.pathname.split("/").slice(0, -2).join("/");
    navigate(`${initialPath}/student/detail/${studentId}`);
  };
  const handleDelete = async () => {
    handleBack();
  };
  if (score.status === "loading") return <Loading />;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="学生成绩详情" subheader="" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button onClick={handleBack} variant="contained">
                  返回成绩表
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">课程</Typography>
                <Typography variant="h4">{score.data.lesson.name}</Typography>
                <Typography variant="caption">学生</Typography>
                <Typography variant="h4">{`${score.data.student.firstname} ${score.data.student.lastname}`}</Typography>
                <Typography variant="caption">成绩</Typography>
                <Typography variant="h4">{score.data.score}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={3} direction={"row"}>
                  <Button onClick={handleClick} variant="outlined">
                    <BorderColorIcon />
                    更改
                  </Button>
                  <Button
                    onClick={handleDelete}
                    variant="contained"
                    color="error"
                  >
                    删除
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
