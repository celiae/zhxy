import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import ClassroomForm from "./ClassroomForm";
import { classroomDetail, classroomUpdateOne } from "../../api/classroom";
import { Button, Grid } from "@mui/material";
export default function ClassroomUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, status } = useQuery(["classroomDetail", id], () =>
    classroomDetail(id)
  );
  const [form, setForm] = useState(data);
  useEffect(() => {
    setForm(data);
  }, [data]);
  const handleSubmit = () => {
    classroomUpdateOne(form);
    navigate(-1, { replace: true });
  };
  if (status === "loading") return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
      <Grid item>
        <ClassroomForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
