import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import RepairForm from "./RepairForm";
import { repairDetail, repairUpdateOne } from "../../api/repair";
import { Button, Grid } from "@mui/material";
export default function RepairUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, status } = useQuery(["repairDetail", id], () =>
    repairDetail(id)
  );
  const [form, setForm] = useState(data);
  useEffect(() => {
    setForm(data);
  }, [data]);
  const handleSubmit = () => {
    repairUpdateOne(form);
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
        <RepairForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
