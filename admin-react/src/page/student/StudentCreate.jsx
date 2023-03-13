import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ShadowBox from "../../components/shadowbox/ShadowBox";
import Media from "../../components/form/Media";
import StudentForm from "../../components/form/StudentForm";
import { studentCreateOne } from "../../server/student";
import { studentDetailCreateOne } from "../../server/studentdetail";
import { studentMediaCreateOne } from "../../server/studentmedia";
import getUUID from "../../util/useUUID";
import { randomStudent } from "../../lib/random/student";
import { randomStudentDetail } from "../../lib/random/studentDetail";

export default function StudentCreate() {
  const navigate = useNavigate();

  const [student, setStudent] = React.useState(randomStudent);
  const [studentDetail, setStudentDetail] = React.useState(randomStudentDetail);
  const [media, setMedia] = React.useState([]);
  const student_uuid = getUUID();
  const handleBack = () => {
    navigate(-1);
  };
  let formData = new FormData();
  const handleSubmit = async () => {
    media.forEach((m) => {
      formData.append("file", m);
    });
    formData.append("studentId", student_uuid);
    await studentCreateOne(student, student_uuid);
    await studentDetailCreateOne(studentDetail, student_uuid);
    await studentMediaCreateOne(formData);
    handleBack();
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent="center"
              alignItems={"center"}
            >
              <Button onClick={handleBack} variant="outlined" color="primary">
                返回
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                提交
              </Button>
              <Typography variant="h5" color={"primary"}>
                添加学生
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <ShadowBox>
          <Stack spacing={2}>
            <StudentForm
              student={student}
              setStudent={setStudent}
              studentDetail={studentDetail}
              setStudentDetail={setStudentDetail}
            />
            <Media media={media} setMedia={setMedia} />
          </Stack>
        </ShadowBox>
      </Grid>
    </Grid>
  );
}
