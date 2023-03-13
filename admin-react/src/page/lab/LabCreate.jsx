import React from "react";
import LabForm from "../../components/form/LabForm";
import { labCreateOne } from "../../server/lab";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { randomLab } from "../../lib/random/lab";

export default function LabCreate() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState(randomLab);
  const handleBack = () => {
    navigate(-1, { replace: true });
  };
  const handleSubmit = () => {
    labCreateOne(form);
    handleBack();
  };
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
