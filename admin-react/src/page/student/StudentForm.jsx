import React from "react";
import {
  Grid,
  TextField,
  Avatar,
  Slider,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import SelectClasses from "../../components/form/SelectClasses";
import SelectLab from "../../components/form/SelectLab";
import ConDatePicker from "../../components/form/ConDatePicker";
export default function StudentForm({
  student,
  setStudent,
  studentDetail,
  setStudentDetail,
}) {
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
        <FormControl
          value={studentDetail.gender}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, gender: e.target.value });
          }}
        >
          <FormLabel>性别</FormLabel>
          <RadioGroup row>
            <FormControlLabel value="男" control={<Radio />} label="男" />
            <FormControlLabel value="女" control={<Radio />} label="女" />
            <FormControlLabel value="其他" control={<Radio />} label="其他" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <SelectClasses form={student} setForm={setStudent} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ConDatePicker
          label={"出生日期"}
          form={studentDetail}
          setForm={setStudentDetail}
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
        <SelectLab form={student} setForm={setStudent} />
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
        <Typography>学习 {studentDetail.studyNum}</Typography>
        <Slider
          value={studentDetail.studyNum}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, studyNum: e.target.value });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>运动 {studentDetail.sportNum}</Typography>
        <Slider
          value={studentDetail.sportNum}
          onChange={(e) => {
            setStudentDetail({ ...studentDetail, sportNum: e.target.value });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>沟通 {studentDetail.communicationNum}</Typography>
        <Slider
          value={studentDetail.communicationNum}
          onChange={(e) => {
            setStudentDetail({
              ...studentDetail,
              communicationNum: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>竞赛 {studentDetail.competitionNum}</Typography>
        <Slider
          value={studentDetail.competitionNum}
          onChange={(e) => {
            setStudentDetail({
              ...studentDetail,
              competitionNum: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>证书 {studentDetail.licenseNum}</Typography>
        <Slider
          value={studentDetail.licenseNum}
          onChange={(e) => {
            setStudentDetail({
              ...studentDetail,
              licenseNum: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>动手 {studentDetail.handsNum}</Typography>
        <Slider
          value={studentDetail.handsNum}
          onChange={(e) => {
            setStudentDetail({
              ...studentDetail,
              handsNum: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
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
