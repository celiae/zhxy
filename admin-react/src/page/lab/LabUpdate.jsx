import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { labDetail, labUpdateOne } from "../../server/lab";
import LabForm from "../../components/form/LabForm";
import { Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
export default function LabUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, status } = useQuery(["labDetail", id], () => labDetail(id));
  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  const handleSubmit = () => {
    labUpdateOne(form);
    handleBack();
  };
  const [form, setForm] = useState(null);
  React.useEffect(() => {
    setForm(data);
  }, [data]);
  if (status === "loading" || !form) return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" color={"secondary"}>
          添加实验室
        </Typography>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Stack direction={"row"} spacing={3}>
              <Button onClick={handleBack} variant="outlined" color="primary">
                返回
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                提交
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <LabForm form={form} setForm={setForm} />
      </Grid>
    </Grid>
  );
}
