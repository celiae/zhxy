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
import StudentRadar from "./StudentRadar";
import Loading from "../../components/progress/Loading";
import { studentDelete, studentOne } from "../../api/student";
import { useNavigate, useParams } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { studentDetailDelete, studentOneDetail } from "../../api/studentdetail";
import {
  studentMediaDeleteByStudentId,
  studentOneByStudentId,
} from "../../api/studentmedia";
import TitleValue from "../../components/box/TitleValue";
export default function StudentDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const studentBrief = useQuery(["studentOne", id], () => studentOne(id));
  const studentDetail = useQuery(["studentOneDetail", id], () =>
    studentOneDetail(id)
  );
  const studentMedia = useQuery(["studentOneByStudentId", id], () =>
    studentOneByStudentId(id)
  );
  const handleClick = () => {
    navigate("update");
  };
  const handleBack = () => {
    navigate(-1);
  };
  const gotoLab = (labId) => {
    const labPath = location.pathname.split("/").slice(0, -2).join("/");
    navigate(`${labPath}/lab/${labId}`);
  };
  const handleDelete = async () => {
    await studentMediaDeleteByStudentId(id);
    await studentDetailDelete(id);
    await studentDelete(id);
    handleBack();
  };

  if (
    studentBrief.status === "loading" ||
    studentDetail.status === "loading" ||
    studentMedia.status === "loading"
  )
    return <Loading />;
  const age =
    new Date().getFullYear() -
    new Date(studentDetail.data.birthDate).getFullYear();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader
            title={`${studentBrief.data.firstname} ${studentBrief.data.lastname}`}
            subheader=""
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack spacing={3} direction={"row"}>
                  <Avatar src={studentBrief.data.avatar} />
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
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="概要" subheader="" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="caption">班级</Typography>
                {studentBrief.data.classes && (
                  <Typography variant="h6">
                    {studentBrief.data.classes.name}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={4}>
                <TitleValue title={"性别"} value={studentDetail.data.gender} />
              </Grid>
              <Grid item xs={4}>
                <TitleValue title={"电话"} value={studentDetail.data.phone} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="基本信息" subheader="详细" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TitleValue title={"年龄"} value={age} />
              </Grid>
              <Grid item xs={4}>
                <TitleValue
                  title={"出生日期"}
                  value={studentDetail.data.birthDate}
                />
              </Grid>
              <Grid item xs={4}>
                <TitleValue title={"年级"} value={studentDetail.data.grade} />
              </Grid>
              <Grid item xs={4}>
                <TitleValue
                  title={"最近登录时间"}
                  value={studentDetail.data.lastLogin}
                />
              </Grid>
              <Grid item xs={4}>
                <TitleValue title={"邮箱"} value={studentDetail.data.email} />
              </Grid>
              <Grid item xs={4}>
                <TitleValue title={"微信"} value={studentDetail.data.wechat} />
              </Grid>
              <Grid item xs={4}>
                <TitleValue title={"QQ"} value={studentDetail.data.qq} />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption">参与实验室</Typography>
                {studentBrief.data.lab && (
                  <Typography variant="h6">
                    <Link
                      onClick={() => {
                        gotoLab(studentBrief.data.lab.id);
                      }}
                      href="#"
                    >
                      {studentBrief.data.lab.name}
                    </Link>
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TitleValue
                  title={"简介"}
                  value={studentDetail.data.description}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="风格" subheader="图片/视频" />
          <CardContent>
            <Grid container spacing={2}>
              {studentMedia.data.map((d) => (
                <Grid key={d.id} item xs={4}>
                  <img width={"100%"} src={`http://localhost:30060/${d.id}`} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="能力" subheader="图表化展示" />
          <CardContent>
            <StudentRadar data={studentDetail.data} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
