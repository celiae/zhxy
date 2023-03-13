import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { teacherDelete, teacherOne } from "../../server/teacher";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  teacherDetailDelete,
  teacherOneDetail,
} from "../../server/teacherdetail";
import TeacherRadar from "../../components/chart/TeacherRadar";

export default function TeacherDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const teacherBrief = useQuery(["teacherOne", id], () => teacherOne(id));
  const teacherDetail = useQuery(["teacherOneDetail", id], () =>
    teacherOneDetail(id)
  );
  const handleClick = () => {
    navigate("update");
  };
  const handleDelete = async () => {
    await teacherDetailDelete(id);
    await teacherDelete(id);
    navigate(-1);
  };
  if (teacherBrief.status === "loading" || teacherDetail.status === "loading")
    return <Loading />;
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Card>
          <CardContent>
            <Stack direction={"row"} spacing={3} p={2}>
              <Avatar src={teacherBrief.data.avatar} />
              <Typography variant="h4">
                {teacherBrief.data.firstname} {teacherBrief.data.lastname}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="caption">性别</Typography>
                <Typography variant="h6">
                  {teacherDetail.data.gender}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">职称</Typography>
                <Typography variant="h6">
                  {teacherBrief.data.jobTitle}
                </Typography>
              </Grid>
              {teacherBrief.data.department && (
                <Grid item>
                  <Typography variant="caption">所属部门</Typography>
                  <Typography variant="h6">
                    {teacherBrief.data.department.name || "未参加"}
                  </Typography>
                </Grid>
              )}
              {teacherBrief.data.lab && (
                <Grid item>
                  <Typography variant="caption">参与实验室</Typography>
                  <Typography variant="h6">
                    {teacherBrief.data.lab.name || "未参加"}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={"row"} spacing={2}>
          <Button onClick={handleClick} variant="outlined">
            <BorderColorIcon />
            更改
          </Button>
          <Button onClick={handleDelete} variant="contained" color="error">
            删除
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="简介" />
          <CardContent>
            <Typography variant="h6">
              {teacherDetail.data.description}
            </Typography>
            <Divider />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="详细信息" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="caption">出生日期</Typography>
                <Typography variant="h6">
                  {teacherDetail.data.birthDate}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Typography variant="caption">入职日期</Typography>
                <Typography variant="h6">
                  {teacherDetail.data.entryDate}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Typography variant="caption">邮件</Typography>
                <Typography variant="h6">{teacherDetail.data.email}</Typography>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Typography variant="caption">电话</Typography>
                <Typography variant="h6">{teacherDetail.data.phone}</Typography>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Typography variant="caption">薪水</Typography>
                <Typography variant="h6">
                  {teacherDetail.data.salary}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Typography variant="caption">奖金</Typography>
                <Typography variant="h6">
                  {teacherDetail.data.reward}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <TeacherRadar data={teacherDetail.data} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
