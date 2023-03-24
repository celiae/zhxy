import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { examList } from "../../api/exam";
import Loading from "../progress/Loading";

export default function SelectExam({ form, setForm }) {
  const { data, status } = useQuery("examList", examList);
  const [exam, setExam] = React.useState(null);
  let allExam = [];
  if (status === "loading") return <Loading />;
  data.forEach((element) => {
    allExam.push({
      id: element.id,
      name: element.name,
    });
  });
  return (
    <Autocomplete
      sx={{ width: 300 }}
      disablePortal
      options={allExam}
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
      value={exam}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          setExam({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setExam({
            name: newValue.inputValue,
          });
        } else {
          setExam(newValue);
        }
        setForm({ ...form, exam: newValue });
      }}
      renderInput={(params) => (
        <TextField {...params} size="small" label="考试科目" />
      )}
    />
  );
}
