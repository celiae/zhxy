import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "react-query";
import { classroomList } from "../../api/classroom";
import Loading from "../progress/Loading";

export default function SelectClassroom({ form, setForm }) {
  const { data, status } = useQuery("classroomList", classroomList);
  const [classroom, setClassroom] = React.useState(null);
  let allClassroom = [];
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    allClassroom.push({
      id: element.id,
      name: element.name,
    });
  });
  return (
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
      value={classroom}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setClassroom({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setClassroom({
            name: newValue.inputValue,
          });
        } else {
          setClassroom(newValue);
        }
        setForm({ ...form, classroom: newValue });
      }}
      renderInput={(params) => (
        <TextField {...params} size="small" label="教室" />
      )}
    />
  );
}
