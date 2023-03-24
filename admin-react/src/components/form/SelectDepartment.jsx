import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "react-query";
import { departmentList } from "../../api/department";
import Loading from "../progress/Loading";

export default function SelectDepartment({ form, setForm }) {
  const { data, status } = useQuery("departmentList", departmentList);
  const [department, setDepartment] = React.useState(null);
  let allDepartment = [];
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    allDepartment.push({
      id: element.id,
      name: element.name,
    });
  });
  return (
    <Autocomplete
      sx={{ width: 300 }}
      disablePortal
      options={allDepartment}
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
      value={department}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setDepartment({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setDepartment({
            name: newValue.inputValue,
          });
        } else {
          setDepartment(newValue);
        }
        setForm({ ...form, department: newValue });
      }}
      renderInput={(params) => (
        <TextField {...params} size="small" label="部门" />
      )}
    />
  );
}
