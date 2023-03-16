import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { studentOne, studentUpdateOne } from "../../api/student";
import StudentForm from "./StudentForm";
import Grid from "@mui/material/Grid";
import { Button, Stack } from "@mui/material";
import {
  studentDetailUpdateOne,
  studentOneDetail,
} from "../../api/studentdetail";
import {
  studentMediaCreateOne,
  studentMediaDeleteByStudentId,
} from "../../api/studentmedia";
import Media from "../../components/form/Media";
export default function StudentUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [brief, setBrief] = useState(null);
  const [detail, setDetail] = React.useState(null);
  const [media, setMedia] = React.useState([]);
  const studentBrief = useQuery(["studentOne", id], () => studentOne(id));
  const studentDetail = useQuery(["studentOneDetail", id], () =>
    studentOneDetail(id)
  );
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
  React.useEffect(() => {
    setBrief(studentBrief.data);
    setDetail(studentDetail.data);
  }, []);
  if (
    !brief ||
    !detail ||
    studentBrief.status === "loading" ||
    studentDetail.status === "loading"
  )
    return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
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
