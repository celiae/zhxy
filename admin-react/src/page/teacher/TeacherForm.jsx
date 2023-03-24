import React from "react";
import {
  Avatar,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SelectLab from "../../components/form/SelectLab";
import SelectDepartment from "../../components/form/SelectDepartment";

export default function TeacherForm({
  teacherBrief,
  setTeacherBrief,
  teacherDetail,
  setTeacherDetail,
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Avatar src={teacherBrief.avatar} />
      </Grid>
      <Grid item xs={12}>
        <SelectLab form={teacherBrief} setForm={setTeacherBrief} />
      </Grid>
      <Grid item xs={12}>
        <SelectDepartment form={teacherBrief} setForm={setTeacherBrief} />
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
        <FormControl variant="outlined">
          <InputLabel>密码</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            value={teacherBrief.password}
            onChange={(e) => {
              setTeacherBrief({ ...teacherBrief, password: e.target.value });
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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
        <Typography>教学质量 {teacherDetail.teachingQuality}</Typography>
        <Slider
          value={teacherDetail.teachingQuality}
          onChange={(e) => {
            setTeacherDetail({
              ...teacherDetail,
              teachingQuality: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>教研水平 {teacherDetail.research}</Typography>
        <Slider
          value={teacherDetail.research}
          onChange={(e) => {
            setTeacherDetail({
              ...teacherDetail,
              research: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>政治思想 {teacherDetail.politicalIdeology}</Typography>
        <Slider
          value={teacherDetail.politicalIdeology}
          onChange={(e) => {
            setTeacherDetail({
              ...teacherDetail,
              politicalIdeology: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>动手能力 {teacherDetail.practical}</Typography>
        <Slider
          value={teacherDetail.practical}
          onChange={(e) => {
            setTeacherDetail({
              ...teacherDetail,
              practical: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>纪律 {teacherDetail.discipline}</Typography>
        <Slider
          value={teacherDetail.discipline}
          onChange={(e) => {
            setTeacherDetail({
              ...teacherDetail,
              discipline: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Typography>评价 {teacherDetail.comment}</Typography>
        <Slider
          value={teacherDetail.comment}
          onChange={(e) => {
            setTeacherDetail({
              ...teacherDetail,
              comment: e.target.value,
            });
          }}
          valueLabelDisplay="auto"
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
