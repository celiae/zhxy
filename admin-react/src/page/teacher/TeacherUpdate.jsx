import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Stack, Grid } from "@mui/material";
import Loading from "../../components/progress/Loading";
import { teacherOne, teacherUpdateOne } from "../../api/teacher";
import TeacherForm from "./TeacherForm";
import {
  teacherOneDetail,
  teacherDetailUpdateOne,
} from "../../api/teacherdetail";
export default function TeacherUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const teacherBrief = useQuery(["teacherOne", id], () => teacherOne(id));
  const teacherDetail = useQuery(["teacherOneDetail", id], () =>
    teacherOneDetail(id)
  );
  const [brief, setBrief] = React.useState(teacherBrief.data);
  const [Detail, setDetail] = React.useState(teacherDetail.data);
  const handleSubmit = () => {
    teacherUpdateOne(brief);
    teacherDetailUpdateOne(Detail);
    navigate(-1, { replace: true });
  };
  if (teacherBrief.status === "loading" || teacherDetail.status === "loading")
    return <Loading />;
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
          teacherBrief={brief}
          setTeacherBrief={setBrief}
          teacherDetail={Detail}
          setTeacherDetail={setDetail}
        />
      </Grid>
    </Grid>
  );
}
