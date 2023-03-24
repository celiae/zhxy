import React from "react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { teacherDeleteAll, teacherList } from "../../api/teacher";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/datagrid/CusDataGrid";
import { teacherDetailList } from "../../api/teacherdetail";
function getFullNameAvatar(params) {
  return {
    fullname: `${params.row.teacher.firstname || ""} ${
      params.row.teacher.lastname || ""
    }`,
    avatar: params.row.teacher.avatar,
    id: params.row.id,
  };
}
function getLastLogin(params) {
  return params.row.teacher.lastLogin;
}
function getJobTitle(params) {
  return params.row.teacher.jobTitle;
}
function getPhone(params) {
  return params.row.phone;
}
function getEmail(params) {
  return params.row.email;
}
function getEntryDate(params) {
  return params.row.entryDate;
}
function getSalary(params) {
  return params.row.salary;
}
function getReward(params) {
  return params.row.reward;
}
export default function TeacherList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("teacherDetailList", teacherDetailList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    teacherDeleteAll();
    setRows([]);
  };
  const columns = [
    {
      field: "fullname",
      headerName: "姓名",
      width: 190,
      valueGetter: getFullNameAvatar,
      renderCell: (params) => (
        <Stack spacing={1} direction={"row"} alignItems="center">
          <IconButton
            onClick={() => {
              navigate(`/${username}/teacher/${params.value.id}`);
            }}
          >
            <Avatar src={params.value.avatar} />
          </IconButton>
          <Typography>{params.value.fullname}</Typography>
        </Stack>
      ),
    },
    {
      field: "lastLogin",
      headerName: "最近登录",
      width: 200,
      valueGetter: getLastLogin,
    },
    {
      field: "jobTitle",
      headerName: "职称",
      width: 100,
      valueGetter: getJobTitle,
    },
    {
      field: "phone",
      headerName: "电话",
      width: 150,
      valueGetter: getPhone,
    },
    {
      field: "email",
      headerName: "邮箱",
      width: 190,
      valueGetter: getEmail,
    },
    {
      field: "entryDate",
      headerName: "入职时期",
      width: 190,
      valueGetter: getEntryDate,
    },
    {
      field: "salary",
      headerName: "薪水",
      width: 100,
      valueGetter: getSalary,
    },
    {
      field: "reward",
      headerName: "奖金",
      width: 130,
      valueGetter: getReward,
    },
  ];
  return (
    <CusDataGrid
      columns={columns}
      rows={rows}
      handleDeleteAll={handleDeleteAll}
    />
  );
}
