import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { studentList } from "../../api/student";
import Loading from "../progress/Loading";

export default function SelectStudent({ form, setForm }) {
  const { data, status } = useQuery("studentList", studentList);
  const [student, setStudent] = React.useState(null);
  let allStudent = [];
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    allStudent.push({
      id: element.id,
      name: element.firstname + " " + element.lastname,
    });
  });
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={allStudent}
      disabled
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
      value={student}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setStudent({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setStudent({
            name: newValue.inputValue,
          });
        } else {
          setStudent(newValue);
        }
        setForm({ ...form, student: newValue });
      }}
      renderInput={(params) => (
        <TextField {...params} size="small" label="学生" />
      )}
    />
  );
}
