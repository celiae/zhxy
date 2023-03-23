import React from "react";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentDeleteAll } from "../../api/student";
import CusDataGrid from "../../components/table/CusDataGrid";
import { studentDetailList } from "../../api/studentdetail";
function getFullNameAvatar(params) {
  return {
    fullname: `${params.row.student.firstname || ""} ${
      params.row.student.lastname || ""
    }`,
    avatar: params.row.student.avatar,
    id: params.row.id,
  };
}
function getclassesName(params) {
  return `${params.row.student.classes.name}`;
}
function getLastLogin(params) {
  return params.row.student.lastLogin;
}
function getPhone(params) {
  return params.row.phone;
}
function getEmail(params) {
  return params.row.email;
}
function getWechat(params) {
  return params.row.wechat;
}
function getAge(params) {
  return (
    new Date().getFullYear() - new Date(params.row.birthDate).getFullYear()
  );
}
export default function StudentList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("studentDetailList", studentDetailList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    studentDeleteAll();
    setRows([]);
  };
  const columns = [
    {
      field: "fullname",
      headerName: "姓名",
      width: 150,
      valueGetter: getFullNameAvatar,
      renderCell: (params) => (
        <Stack spacing={1} direction={"row"} alignItems="center">
          <IconButton
            onClick={() => {
              navigate(`/${username}/student/${params.value.id}`);
            }}
          >
            <Avatar src={params.value.avatar} />
          </IconButton>
          <Typography>{params.value.fullname}</Typography>
        </Stack>
      ),
    },
    {
      field: "classes",
      headerName: "班级",
      width: 150,
      valueGetter: getclassesName,
    },
    {
      field: "lastLogin",
      headerName: "最近登录",
      width: 200,
      valueGetter: getLastLogin,
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
      field: "wechat",
      headerName: "微信",
      width: 130,
      valueGetter: getWechat,
    },
    {
      field: "age",
      headerName: "年龄",
      width: 90,
      valueGetter: getAge,
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
