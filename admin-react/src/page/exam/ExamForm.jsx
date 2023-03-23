import React from "react";
import {
  Grid,
  TextField,
  Avatar,
  Autocomplete,
  Slider,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { labList } from "../../api/lab";
import Loading from "../../components/progress/Loading";
import { useQuery } from "react-query";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { teacherList } from "../../api/teacher";
import { classroomList } from "../../api/classroom";
import { zhCN } from "@mui/x-data-grid";
import { LocalizationProvider } from "@mui/x-date-pickers";
export default function ExamForm({ form, setForm }) {
  let allTeacher = [];
  let allClassroom = [];
  const [value_teacher, setValueTeacher] = React.useState(null);
  const [value_classroom, setValueClassroom] = React.useState(null);
  const teacher = useQuery("teacherList", teacherList);
  const classroom = useQuery("classroomList", classroomList);
  if (teacher.status === "loading" || classroom.status === "loading")
    return <Loading />;
  teacher.data.forEach((element) => {
    allTeacher.push({
      id: element.id,
      name: element.firstname + element.lastname,
    });
  });
  classroom.data.forEach((element) => {
    allClassroom.push({
      id: element.id,
      name: element.name,
    });
  });
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
            <Autocomplete
              sx={{ width: 300 }}
              disablePortal
              options={allTeacher}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  {option.name}
                </li>
              )}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.name;
              }}
              value={value_teacher}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setValueTeacher({
                    name: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  setValueTeacher({
                    name: newValue.inputValue,
                  });
                } else {
                  setValueTeacher(newValue);
                }
                setForm({ ...form, teacher: { id: newValue.id } });
              }}
              renderInput={(params) => (
                <TextField {...params} size="small" label="负责人（教师）" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              sx={{ width: 300 }}
              disablePortal
              options={allClassroom}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  {option.name}
                </li>
              )}
              getOptionLabel={(option) => {
                if (typeof option === "string") {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.name;
              }}
              value={value_classroom}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setValueClassroom({
                    name: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  setValueClassroom({
                    name: newValue.inputValue,
                  });
                } else {
                  setValueClassroom(newValue);
                }
                setForm({ ...form, classroom: { id: newValue.id } });
              }}
              renderInput={(params) => (
                <TextField {...params} size="small" label="考试教室" />
              )}
            />
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dayjs(form.startTime)}
                onChange={(newValue) => {
                  console.log(form.startTime);
                  setForm({
                    ...form,
                    startTime: newValue,
                  });
                }}
                label="开考时间"
              />
            </LocalizationProvider>
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
