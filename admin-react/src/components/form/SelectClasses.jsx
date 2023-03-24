import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "react-query";
import { classesList } from "../../api/classes";
import Loading from "../progress/Loading";

export default function SelectClasses({ form, setForm }) {
  const { data, status } = useQuery("classesList", classesList);
  const [classes, setClasses] = React.useState(null);
  let allClasses = [];
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    allClasses.push({
      id: element.id,
      name: element.name,
    });
  });
  return (
    <Autocomplete
      sx={{ width: 300 }}
      disablePortal
      options={allClasses}
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
      value={classes}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setClasses({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setClasses({
            name: newValue.inputValue,
          });
        } else {
          setClasses(newValue);
        }
        setForm({ ...form, classes: newValue });
      }}
      renderInput={(params) => (
        <TextField {...params} size="small" label="班级" />
      )}
    />
  );
}
