import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  Card,
  CardContent,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ConDatePicker from "../../components/form/ConDatePicker";
import SelectTeacher from "../../components/form/SelectTeacher";
import SelectClassroom from "../../components/form/SelectClassroom";
export default function ExamForm({ form, setForm }) {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              label="名称"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <SelectTeacher form={form} setForm={setForm} />
          </Grid>
          <Grid item xs={12}>
            <SelectClassroom form={form} setForm={setForm} />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth size="small">
              <InputLabel>考试类型</InputLabel>
              <Select
                value={form.type}
                onChange={(e) => {
                  setForm({ ...form, type: e.target.value });
                }}
              >
                <MenuItem value={"开卷"}>开卷</MenuItem>
                <MenuItem value={"闭卷"}>闭卷</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ConDatePicker label={"开考时间"} form={form} setForm={setForm} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.testTime}
              onChange={(e) => {
                setForm({ ...form, testTime: e.target.value });
              }}
              label="考试时长"
              size="small"
              type={"number"}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
