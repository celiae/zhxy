import React from "react";
import { Grid, TextField, Autocomplete, Typography } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { lessonList } from "../../api/lesson";
import { studentList } from "../../api/student";
export default function ScoreForm({ form, setForm }) {
  const [value_teacher, setValueTeacher] = React.useState(null);
  const [value_student, setValueStudent] = React.useState(null);
  const student = useQuery("studentList", studentList);
  const lesson = useQuery("lessonList", lessonList);
  let allTeacher = [];
  let allStudent = [];
  React.useEffect(() => {
    if (form.student && form.lesson) {
      setValueTeacher(`${form.lesson.name}`);
    }
  }, [form]);
  if (lesson.status === "loading" || student.status === "loading")
    return <Loading />;
  lesson.data.forEach((element) => {
    allTeacher.push({
      id: element.id,
      name: element.name,
    });
  });
  student.data.forEach((element) => {
    allStudent.push({
      id: element.id,
      firstname: element.firstname,
      lastname: element.lastname,
    });
  });
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography>
          {form.student.firstname} {form.student.lastname}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
          disablePortal
          options={allStudent}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.firstname} {option.lastname}
            </li>
          )}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.firstname + " " + option.lastname;
          }}
          value={value_student}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueStudent({
                name: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              setValueStudent({
                name: newValue.inputValue,
              });
            } else {
              setValueStudent(newValue);
            }
            setForm({ ...form, student: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} size="small" label="学生" />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Autocomplete
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
            setForm({ ...form, lesson: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} size="small" label="课程" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={form.score}
          onChange={(e) => {
            setForm({ ...form, score: e.target.value });
          }}
          label="分数"
          type={"number"}
          size="small"
        />
      </Grid>
    </Grid>
  );
}
