import React from "react";
import TeacherForm from "./TeacherForm";
import { teacherCreateOne } from "../../api/teacher";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { teacherDetailCreateOne } from "../../api/teacherdetail";
import { randomTeacher } from "../../lib/random/teacher";
import { randomTeacherDetail } from "../../lib/random/teacherDetail";
export default function TeacherCreate() {
  const navigate = useNavigate();
  const [teacherBrief, setTeacherBrief] = React.useState(randomTeacher);
  const [teacherDetail, setTeacherDetail] = React.useState(randomTeacherDetail);
  const handleSubmit = async () => {
    const teacher_json = await teacherCreateOne(teacherBrief);
    await teacherDetailCreateOne(teacherDetail, teacher_json.id);
    navigate(-1, { replace: true });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack spacing={2} direction="row">
          <Button onClick={handleSubmit} variant="contained" color="primary">
            提交
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <TeacherForm
          teacherBrief={teacherBrief}
          setTeacherBrief={setTeacherBrief}
          teacherDetail={teacherDetail}
          setTeacherDetail={setTeacherDetail}
        />
      </Grid>
    </Grid>
  );
}
