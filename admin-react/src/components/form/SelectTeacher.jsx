import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { teacherList } from "../../api/teacher";
import Loading from "../progress/Loading";

export default function SelectTeacher({ form, setForm }) {
  const { data, status } = useQuery("teacherList", teacherList);
  const [teacher, setTeacher] = React.useState(null);
  let allTeacher = [];
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    allTeacher.push({
      id: element.id,
      name: element.firstname + " " + element.lastname,
    });
  });
  return (
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
      value={teacher}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setTeacher({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setTeacher({
            name: newValue.inputValue,
          });
        } else {
          setTeacher(newValue);
        }
        setForm({ ...form, teacher: newValue });
      }}
      renderInput={(params) => (
        <TextField {...params} size="small" label="教师" />
      )}
    />
  );
}
