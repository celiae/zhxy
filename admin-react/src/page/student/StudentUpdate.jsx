import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { studentOne, studentUpdateOne } from "../../server/student";
import StudentForm from "./StudentForm";
import Grid from "@mui/material/Grid";
import { Button, Stack } from "@mui/material";
import {
  studentDetailUpdateOne,
  studentOneDetail,
} from "../../server/studentdetail";
import {
  studentMediaCreateOne,
  studentMediaDeleteByStudentId,
} from "../../server/studentmedia";
import Media from "../../components/form/Media";
import RouteButton from "../../components/button/RouteButton";
export default function StudentUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const studentBrief = useQuery(["studentOne", id], () => studentOne(id));
  const studentDetail = useQuery(["studentOneDetail", id], () =>
    studentOneDetail(id)
  );
  const [brief, setBrief] = useState(studentBrief.data);
  const [detail, setDetail] = React.useState(studentDetail.data);
  const [media, setMedia] = React.useState([]);
  let formData = new FormData();
  const handleSubmit = async () => {
    //?学生概要信息
    await studentUpdateOne(brief);
    //?学生详细信息
    await studentDetailUpdateOne(detail);
    //?学生媒体信息
    await studentMediaDeleteByStudentId(id);
    media.forEach((m) => {
      formData.append("file", m);
    });
    formData.append("studentId", id);
    studentMediaCreateOne(formData);
    navigate(-1);
  };
  if (studentBrief.status === "loading" || studentDetail.status === "loading")
    return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack direction={"row"} spacing={2}>
          <RouteButton msg={"返回"} path={-1} />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            提交
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <StudentForm
            student={brief}
            setStudent={setBrief}
            studentDetail={detail}
            setStudentDetail={setDetail}
          />
          <Media media={media} setMedia={setMedia} />
        </Stack>
      </Grid>
    </Grid>
  );
}
