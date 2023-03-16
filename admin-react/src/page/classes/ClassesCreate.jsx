import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClassesForm from "./ClassesForm";
import { randomClasses } from "../../lib/random/classes";
import { classesCreateOne } from "../../api/classes";
import { getDateTime } from "../../util/useDate";

export default function ClassesCreate() {
  const [form, setForm] = React.useState(randomClasses);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  const handleSubmit = () => {
    classesCreateOne(form);
    handleBack();
  };
  useEffect(() => {
    const date = getDateTime();
    setForm({ ...form, createTime: date, modifyTime: date });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleBack} variant="outlined" color="primary">
          返回
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          提交
        </Button>
      </Grid>
      <Grid item>
        <ClassesForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
