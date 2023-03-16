import { Button, Card, CardContent, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Media from "../../components/form/Media";
import StudentForm from "./StudentForm";
import { studentCreateOne } from "../../api/student";
import { studentDetailCreateOne } from "../../api/studentdetail";
import { studentMediaCreateOne } from "../../api/studentmedia";
import getUUID from "../../util/useUUID";
import { randomStudent } from "../../lib/random/student";
import { randomStudentDetail } from "../../lib/random/studentDetail";
import RouteButton from "../../components/button/RouteButton";

export default function StudentCreate() {
  const navigate = useNavigate();
  const [student, setStudent] = React.useState(randomStudent);
  const [studentDetail, setStudentDetail] = React.useState(randomStudentDetail);
  const [media, setMedia] = React.useState([]);
  const student_uuid = getUUID();
  let formData = new FormData();
  const handleSubmit = async () => {
    media.forEach((m) => {
      formData.append("file", m);
    });
    formData.append("studentId", student_uuid);
    await studentCreateOne(student, student_uuid);
    await studentDetailCreateOne(studentDetail, student_uuid);
    await studentMediaCreateOne(formData);
    navigate(-1);
  };
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
            student={student}
            setStudent={setStudent}
            studentDetail={studentDetail}
            setStudentDetail={setStudentDetail}
          />
          <Media media={media} setMedia={setMedia} />
        </Stack>
      </Grid>
    </Grid>
  );
}
