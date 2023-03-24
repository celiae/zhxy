import {
  Stack,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { useNavigate, useParams } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { classroomDelete, classroomDetail } from "../../api/classroom";
export default function ClassroomDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const classroom = useQuery(["classroomDetail", id], () => classroomDetail(id));
  const handleClick = () => {
    navigate("update");
  };
  const handleDelete = () => {
    classroomDelete(id);
    handleBack();
  };
  const handleBack = () => {
    navigate(-1);
  };
  if (classroom.status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h4">{classroom.data.name}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Stack direction={"row"} spacing={1}>
              <Button onClick={handleClick} variant="outlined">
                <BorderColorIcon />
                更改
              </Button>
              <Button onClick={handleDelete} color="error">
                删除
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">年级</Typography>
            <Typography variant="h6">{classroom.data.grade}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">专业</Typography>
            <Typography variant="h6">{classroom.data.speciality}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">班级描述</Typography>
            <Typography variant="h6">{classroom.data.description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
