import { DatePicker, LocalizationProvider, zhCN } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import { getDateTime } from "../../util/useDate";

export default function ConDatePicker({ label, form, setForm }) {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        zhCN.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DatePicker
        value={dayjs(form.birthDate)}
        onChange={(newValue) => {
          setForm({
            ...form,
            birthDate: getDateTime(newValue),
          });
        }}
        label={label}
      />
    </LocalizationProvider>
  );
}
