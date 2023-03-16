import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { labDetail, labUpdateOne } from "../../api/lab";
import LabForm from "./LabForm";
import { Grid } from "@mui/material";
import RSButton from "../../components/button/RSButton";
export default function LabUpdate() {
  const { id } = useParams();
  const { data, status } = useQuery(["labDetail", id], () => labDetail(id));
  const [form, setForm] = useState(null);
  React.useEffect(() => {
    setForm(data);
  }, [data]);
  if (status === "loading" || !form) return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item>
        <RSButton submitData={form} handleSubmit={labUpdateOne} />
      </Grid>
      <Grid item>
        <LabForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
