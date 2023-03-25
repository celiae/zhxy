import React from "react";
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
export default function RepairForm({ form, setForm }) {
  const [type, setType] = React.useState("");
  const changeType = (e) => {
    setType(e.target.value);
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>目标类型</InputLabel>
              <Select value={type} onChange={changeType}>
                <MenuItem value={"教室"}>教室</MenuItem>
                <MenuItem value={"部门"}>部门</MenuItem>
                <MenuItem value={"实验室"}>实验室</MenuItem>
                <MenuItem value={"学生公寓"}>学生公寓</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.grade}
              onChange={(e) => {
                setForm({ ...form, grade: e.target.value });
              }}
              label="年级"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.speciality}
              onChange={(e) => {
                setForm({ ...form, speciality: e.target.value });
              }}
              label="专业"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              label="全称"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.description}
              onChange={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
              label="描述"
              size="small"
              fullWidth
              multiline
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
