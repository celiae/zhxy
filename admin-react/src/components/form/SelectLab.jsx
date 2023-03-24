import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "react-query";
import { labList } from "../../api/lab";
import Loading from "../progress/Loading";

export default function SelectLab({ form, setForm }) {
  const { data, status } = useQuery("labList", labList);
  const [lab, setLab] = React.useState(null);
  let allLab = [];
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    allLab.push({
      id: element.id,
      name: element.name,
    });
  });
  return (
    <Autocomplete
      sx={{ width: 300 }}
      disablePortal
      options={allLab}
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
      value={lab}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setLab({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setLab({
            name: newValue.inputValue,
          });
        } else {
          setLab(newValue);
        }
        setForm({ ...form, lab: newValue });
      }}
      renderInput={(params) => (
        <TextField {...params} size="small" label="实验室" />
      )}
    />
  );
}
