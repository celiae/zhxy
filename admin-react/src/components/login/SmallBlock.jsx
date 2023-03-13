import { Box, Grid } from "@mui/material";
import React from "react";
import { block, normal, success } from "../../constant/loginBlockStyle";

const uppercaseReg = new RegExp("[A-Z]", "g");
const numberReg = new RegExp("[0-9]", "g");

export default function SmallBlock({ password }) {
  let lengthStyle = {};
  let numberStyle = {};
  let upperStyle = {};
  if (password.length >= 8) {
    lengthStyle = {};
    Object.assign(lengthStyle, block, success);
  } else {
    lengthStyle = {};
    Object.assign(lengthStyle, block, normal);
  }
  if (numberReg.test(password)) {
    numberStyle = {};
    Object.assign(numberStyle, block, success);
  } else {
    numberStyle = {};
    Object.assign(numberStyle, block, normal);
  }
  if (uppercaseReg.test(password)) {
    upperStyle = {};
    Object.assign(upperStyle, block, success);
  } else {
    upperStyle = {};
    Object.assign(upperStyle, block, normal);
  }
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Box sx={lengthStyle} />
      </Grid>
      <Grid item>
        <Box sx={numberStyle} />
      </Grid>
      <Grid item>
        <Box sx={upperStyle} />
      </Grid>
    </Grid>
  );
}
