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
import {
  teacherDetailDelete,
  teacherOneDetail,
} from "../../server/teacherdetail";
import TeacherRadar from "./TeacherRadar";
import TitleValue from "../../components/box/TitleValue";
import RouteButton from "../../components/button/RouteButton";

export default function TeacherDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const teacherBrief = useQuery(["teacherOne", id], () => teacherOne(id));
  const teacherDetail = useQuery(["teacherOneDetail", id], () =>
    teacherOneDetail(id)
  );
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
      <Grid item xs={12}>
        <Stack direction={"row"} spacing={2}>
          <RouteButton msg={"更改"} path={"update"} />
          <Button onClick={handleDelete} variant="contained" color="error">
            删除
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item>
                <TitleValue title={"性别"} value={teacherDetail.data.gender} />
              </Grid>
              <Grid item>
                <TitleValue title={"职称"} value={teacherBrief.data.jobTitle} />
              </Grid>
              {teacherBrief.data.department && (
                <Grid item>
                  <TitleValue
                    title={"所属部门"}
                    value={teacherBrief.data.department.name || "未参加"}
                  />
                </Grid>
              )}
              {teacherBrief.data.lab && (
                <Grid item>
                  <TitleValue
                    title={"参与实验室"}
                    value={teacherBrief.data.lab.name || "未参加"}
                  />
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
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
                <TitleValue
                  title={"出生日期"}
                  value={teacherDetail.data.birthDate}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <TitleValue
                  title={"入职日期"}
                  value={teacherDetail.data.entryDate}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <TitleValue title={"邮件"} value={teacherDetail.data.email} />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <TitleValue title={"电话"} value={teacherDetail.data.phone} />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <TitleValue title={"薪水"} value={teacherDetail.data.salary} />
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <TitleValue title={"奖金"} value={teacherDetail.data.reward} />
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
