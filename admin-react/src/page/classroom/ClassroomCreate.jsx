import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClassroomForm from "./ClassroomForm";
import { classroomCreateOne } from "../../api/classroom";
import { getDateTime } from "../../util/useDate";

export default function ClassroomCreate() {
  const [form, setForm] = React.useState({});
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  const handleSubmit = () => {
    classroomCreateOne(form);
    handleBack();
  };
  useEffect(() => {
    const date = getDateTime();
    setForm({ ...form, createTime: date, modifyTime: date });
  }, []);

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
