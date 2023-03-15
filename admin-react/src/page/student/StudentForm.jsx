import React from "react";
import { Grid, TextField, Avatar, Autocomplete, Box } from "@mui/material";
import { labList } from "../../server/lab";
import Loading from "../../components/progress/Loading";
import { useQuery } from "react-query";
import { classesList } from "../../server/classes";

export default function StudentForm({
  student,
  setStudent,
  studentDetail,
  setStudentDetail,
}) {
  const [value_lab, setValueLab] = React.useState(null);
  const [value_classes, setValueClasses] = React.useState(null);

  let allLab = [];
  let allClasses = [];
  const lab = useQuery("labList", labList);
  const classes = useQuery("classesList", classesList);

  if (lab.status === "loading" || classes.status === "loading")
    return <Loading />;
  lab.data.forEach((element) => {
    allLab.push({
      id: element.id,
      name: element.name,
    });
  });
  classes.data.forEach((element) => {
    allClasses.push({
      id: element.id,
      name: element.name,
    });
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Avatar src={student.avatar} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={student.firstname}
          onChange={(e) => {
            setStudent({ ...student, firstname: e.target.value });
          }}
          label="姓"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={student.lastname}
          onChange={(e) => {
            setStudent({ ...student, lastname: e.target.value });
          }}
          label="名"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.gender}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, gender: e.target.value });
          }}
          label="性别"
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
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
          value={value_classes}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueClasses({
                name: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              setValueClasses({
                name: newValue.inputValue,
              });
            } else {
              setValueClasses(newValue);
            }
            setStudent({ ...student, classes: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} size="small" label="班级" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.birthDate}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, birthDate: e.target.value });
          }}
          label="出生日期"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={student.password}
          onChange={(e) => {
            setStudent({ ...student, password: e.target.value });
          }}
          label="密码"
          size="small"
          type={"password"}
        />
      </Grid>
      <Grid item xs={12}>
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
          value={value_lab}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueLab({
                name: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              setValueLab({
                name: newValue.inputValue,
              });
            } else {
              setValueLab(newValue);
            }
            setStudent({ ...student, lab: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} size="small" label="实验室" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.phone}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, phone: e.target.value });
          }}
          label="电话"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.email}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, email: e.target.value });
          }}
          label="邮箱"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.wechat}
          onChange={(e) => {
            setStudentDetail({
              ...studentDetail,
              wechat: e.target.value,
            });
          }}
          label="微信"
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={studentDetail.qq}
          onChange={(e) => {
            setStudentDetail({
              ...studentDetail,
              qq: e.target.value,
            });
          }}
          label="QQ"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.studyNum}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, studyNum: e.target.value });
          }}
          label="学习"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.sportNum}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, sportNum: e.target.value });
          }}
          label="运动"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.communicationNum}
          onChange={(e) => {
            setStudentDetail({
              ...studentDetail,
              communicationNum: e.target.value,
            });
          }}
          label="沟通"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.competitionNum}
          onChange={(e) => {
            setStudentDetail({
              ...studentDetail,
              competitionNum: e.target.value,
            });
          }}
          label="竞赛"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.licenseNum}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, licenseNum: e.target.value });
          }}
          label="证书"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={studentDetail.handsNum}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, handsNum: e.target.value });
          }}
          label="动手"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={studentDetail.description}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, description: e.target.value });
          }}
          label="简介"
          size="small"
          multiline
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
