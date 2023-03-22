import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { labDetail, labUpdateOne } from "../../api/lab";
import LabForm from "./LabForm";
import { Button, Grid } from "@mui/material";
export default function LabUpdate() {
  const { id } = useParams();
  const { data, status } = useQuery(["labDetail", id], () => labDetail(id));
  const [form, setForm] = useState(null);
  const handleSubmit = () => {
    labUpdateOne(form);
    navigate(-1, { replace: true });
  };
  React.useEffect(() => {
    setForm(data);
  }, [data]);
  if (status === "loading" || !form) return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button onClick={handleSubmit}>提交</Button>
      </Grid>
      <Grid item>
        <LabForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
