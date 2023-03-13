import React from "react";
import TeacherForm from "../../components/form/TeacherForm";
import { teacherCreateOne } from "../../server/teacher";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import ShadowBox from "../../components/shadowbox/ShadowBox";
import { teacherDetailCreateOne } from "../../server/teacherdetail";
import getUUID from "../../util/useUUID";
import { randomTeacher } from "../../lib/random/teacher";
import { randomTeacherDetail } from "../../lib/random/teacherDetail";
export default function TeacherCreate() {
  const navigate = useNavigate();
  const [teacherBrief, setTeacherBrief] = React.useState(randomTeacher);
  const [teacherDetail, setTeacherDetail] = React.useState(randomTeacherDetail);
  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  const handleSubmit = () => {
    const teacher_uuid = getUUID();
    teacherCreateOne(teacherBrief, teacher_uuid);
    teacherDetailCreateOne(teacherDetail, teacher_uuid);
    handleBack();
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack spacing={2} direction="row">
          <Button onClick={handleBack} variant="outlined" color="primary">
            返回
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            提交
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <ShadowBox>
          <TeacherForm
            teacherBrief={teacherBrief}
            setTeacherBrief={setTeacherBrief}
            teacherDetail={teacherDetail}
            setTeacherDetail={setTeacherDetail}
          />
        </ShadowBox>
      </Grid>
    </Grid>
  );
}
