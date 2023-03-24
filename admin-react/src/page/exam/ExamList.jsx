import React from "react";
import { Avatar, Button, IconButton, Stack, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentDeleteAll } from "../../api/student";
import CusDataGrid from "../../components/datagrid/CusDataGrid";
import { examList } from "../../api/exam";
import RouteButton from "../../components/button/RouteButton";
function getTeacherName(params) {
  return params.row.teacher.firstname + " " + params.row.teacher.lastname;
}
function getClassroom(params) {
  return params.row.classroom.name;
}
export default function ExamList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("examList", examList);
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
      field: "name",
      headerName: "考试科目",
      width: 150,
    },
    {
      field: "teacher",
      headerName: "负责人",
      width: 150,
      valueGetter: getTeacherName,
    },
    {
      field: "classroom",
      headerName: "考试教室",
      width: 200,
      valueGetter: getClassroom,
    },
    {
      field: "testTime",
      headerName: "考试时长",
      width: 150,
    },
    {
      field: "startTime",
      headerName: "开考日期时间",
      width: 190,
    },
    {
      field: "type",
      headerName: "考试类型",
      width: 130,
    },
    {
      field: "",
      headerName: "操作",
      width: 130,
      renderCell: (params) => (
        <Stack spacing={1} direction={"row"} alignItems="center">
          <RouteButton path={`/${username}/exam/${params.row.id}`} />
        </Stack>
      ),
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
