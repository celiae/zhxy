import React from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import SelectTeacher from "../../components/form/SelectTeacher";
export default function LessonForm({ form, setForm }) {
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
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">类型</InputLabel>
              <Select
                value={form.type}
                onChange={(e) => {
                  setForm({ ...form, type: e.target.value });
                }}
              >
                <MenuItem value={"选修"}>选修</MenuItem>
                <MenuItem value={"必修"}>必修</MenuItem>
                <MenuItem value={"公共课程"}>公共课程</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={form.hours}
              onChange={(e) => {
                setForm({ ...form, hours: e.target.value });
              }}
              label="学时"
              size="small"
              type={"number"}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>难度指数</Typography>
            <Rating
              value={form.level}
              onChange={(event, newValue) => {
                setForm({ ...form, level: newValue });
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
