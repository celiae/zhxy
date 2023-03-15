import React from "react";
import TeacherForm from "./TeacherForm";
import { teacherCreateOne } from "../../server/teacher";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import ShadowBox from "../../components/shadowbox/ShadowBox";
import { teacherDetailCreateOne } from "../../server/teacherdetail";
import getUUID from "../../util/useUUID";
import { randomTeacher } from "../../lib/random/teacher";
import { randomTeacherDetail } from "../../lib/random/teacherDetail";
import RouteButton from "../../components/button/RouteButton";
export default function TeacherCreate() {
  const navigate = useNavigate();
  const [teacherBrief, setTeacherBrief] = React.useState(randomTeacher);
  const [teacherDetail, setTeacherDetail] = React.useState(randomTeacherDetail);
  const handleSubmit = () => {
    const teacher_uuid = getUUID();
    teacherCreateOne(teacherBrief, teacher_uuid);
    teacherDetailCreateOne(teacherDetail, teacher_uuid);
    navigate(-1, { replace: true });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack spacing={2} direction="row">
          <RouteButton msg={"返回"} path={-1} />
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
