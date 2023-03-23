import React from "react";
import {
  Grid,
  TextField,
  Autocomplete,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import { teacherList } from "../../api/teacher";
import Loading from "../../components/progress/Loading";
import { useQuery } from "react-query";
export default function LessonForm({ form, setForm }) {
  const [value, setValue] = React.useState(null);
  let allTeacher = [];
  const { data, status } = useQuery("teacherList", teacherList);
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    allTeacher.push({
      id: element.id,
      name: element.firstname + element.lastname,
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
              value={value}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setValue({
                    name: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  setValue({
                    name: newValue.inputValue,
                  });
                } else {
                  setValue(newValue);
                }
                setForm({ ...form, teacher: { id: newValue.id } });
              }}
              renderInput={(params) => (
                <TextField {...params} size="small" label="任课教师" />
              )}
            />
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
