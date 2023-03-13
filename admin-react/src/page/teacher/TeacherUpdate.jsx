import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Stack, Grid } from "@mui/material";
import Loading from "../../components/progress/Loading";
import { teacherOne, teacherUpdateOne } from "../../server/teacher";
import TeacherForm from "../../components/form/TeacherForm";
import {
  teacherOneDetail,
  teacherDetailUpdateOne,
} from "../../server/teacherdetail";
import ShadowBox from "../../components/shadowbox/ShadowBox";
export default function TeacherUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const teacherBrief = useQuery(["teacherOne", id], () => teacherOne(id));
  const teacherDetail = useQuery(["teacherOneDetail", id], () =>
    teacherOneDetail(id)
  );
  const [brief, setBrief] = React.useState(teacherBrief.data);
  const [Detail, setDetail] = React.useState(teacherDetail.data);
  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  const handleSubmit = () => {
    teacherUpdateOne(brief);
    teacherDetailUpdateOne(Detail);
    handleBack();
  };
  if (teacherBrief.status === "loading" || teacherDetail.status === "loading")
    return <Loading />;
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
            teacherBrief={brief}
            setTeacherBrief={setBrief}
            teacherDetail={Detail}
            setTeacherDetail={setDetail}
          />
        </ShadowBox>
      </Grid>
    </Grid>
  );
}
