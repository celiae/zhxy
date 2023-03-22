import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Media from "../../components/form/Media";
import StudentForm from "./StudentForm";
import { studentCreateOne } from "../../api/student";
import { studentDetailCreateOne } from "../../api/studentdetail";
import { studentMediaCreateOne } from "../../api/studentmedia";
import { randomStudent } from "../../lib/random/student";
import { randomStudentDetail } from "../../lib/random/studentDetail";

export default function StudentCreate() {
  const navigate = useNavigate();
  const [student, setStudent] = React.useState(randomStudent);
  const [studentDetail, setStudentDetail] = React.useState(randomStudentDetail);
  const [media, setMedia] = React.useState([]);
  let formData = new FormData();
  const handleSubmit = async () => {
    const student_json = await studentCreateOne(student);
    await studentDetailCreateOne(studentDetail, student_json.id);
    if (media.length > 0) {
      media.forEach((m) => {
        formData.append("file", m);
      });
      formData.append("studentId", student_json.id);
      await studentMediaCreateOne(formData);
    }
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
