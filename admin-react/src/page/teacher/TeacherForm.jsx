import React from "react";
import { Autocomplete, Avatar, Grid, TextField } from "@mui/material";
import { useQuery } from "react-query";
import { labList } from "../../server/lab";
import Loading from "../../components/progress/Loading";
import { departmentList } from "../../server/department";

export default function TeacherForm({
  teacherBrief,
  setTeacherBrief,
  teacherDetail,
  setTeacherDetail,
}) {
  const [lab, setLab] = React.useState(null);
  const [department, setDepartment] = React.useState(null);

  let allLab = [];
  const lab_list = useQuery("labList", labList);

  let allDepartment = [];
  const department_list = useQuery("departmentList", departmentList);

  if (lab_list.status === "loading" || department_list.status === "loading")
    return <Loading />;
  lab_list.data.forEach((element) => {
    allLab.push({
      id: element.id,
      name: element.name,
    });
  });
  department_list.data.forEach((element) => {
    allDepartment.push({
      id: element.id,
      name: element.name,
    });
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Avatar src={teacherBrief.avatar} />
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
            setTeacherBrief({ ...teacherBrief, lab: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} size="small" label="实验室" />
          )}
        />
      </Grid>
      <Grid item xs={12}>
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
            setTeacherBrief({ ...teacherBrief, department: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} size="small" label="部门" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherBrief.firstname}
          onChange={(e) => {
            setTeacherBrief({ ...teacherBrief, firstname: e.target.value });
          }}
          label="姓"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherBrief.lastname}
          onChange={(e) => {
            setTeacherBrief({ ...teacherBrief, lastname: e.target.value });
          }}
          label="名"
          size="small"
        />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherBrief.password}
          onChange={(e) => {
            setTeacherBrief({ ...teacherBrief, password: e.target.value });
          }}
          label="密码"
          size="small"
          type={"password"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherBrief.jobTitle}
          onChange={(e) => {
            setTeacherBrief({ ...teacherBrief, jobTitle: e.target.value });
          }}
          label="职称"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.birthDate}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, birthDate: e.target.value });
          }}
          label="出生日期"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.gender}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, gender: e.target.value });
          }}
          label="性别"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.entryDate}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, entryDate: e.target.value });
          }}
          label="入职日期"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.email}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, email: e.target.value });
          }}
          label="邮箱"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.phone}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, phone: e.target.value });
          }}
          label="电话"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.salary}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, salary: e.target.value });
          }}
          label="薪水"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.reward}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, reward: e.target.value });
          }}
          label="奖金"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.teachingQuality}
          onChange={(e) => {
            setTeacherDetail({
              ...teacherDetail,
              teachingQuality: e.target.value,
            });
          }}
          label="教学质量"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.research}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, research: e.target.value });
          }}
          label="教研水平"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.politicalIdeology}
          onChange={(e) => {
            setTeacherDetail({
              ...teacherDetail,
              politicalIdeology: e.target.value,
            });
          }}
          label="政治思想"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.practical}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, practical: e.target.value });
          }}
          label="动手能力"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.discipline}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, discipline: e.target.value });
          }}
          label="纪律"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <TextField
          value={teacherDetail.comment}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, comment: e.target.value });
          }}
          label="评价"
          size="small"
          type={"number"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={teacherDetail.description}
          onChange={(e) => {
            setTeacherDetail({ ...teacherDetail, description: e.target.value });
          }}
          label="个人简介"
          size="small"
          multiline
          fullWidth
        />
      </Grid>
    </Grid>
  );
}
