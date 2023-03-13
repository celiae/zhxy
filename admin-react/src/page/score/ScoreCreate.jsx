import { Button, Card, CardContent, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ShadowBox from "../../components/shadowbox/ShadowBox";
import ScoreForm from "../../components/form/ScoreForm";
import { SCORE } from "../../constant/initial";
import { scoreCreateOne } from "../../server/score";

export default function ScoreCreate() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState(SCORE);
  const handleBack = () => {
    navigate(-1);
  };
  const handleSubmit = async () => {
    console.log(form);
    scoreCreateOne(form);
    handleBack();
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Stack direction={"row"} spacing={2}>
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
        <ShadowBox>
          <ScoreForm form={form} setForm={setForm} />
        </ShadowBox>
      </Grid>
    </Grid>
  );
}
