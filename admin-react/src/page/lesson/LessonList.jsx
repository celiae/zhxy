import React from "react";
import { useQuery } from "react-query";
import { lessonDeleteAll, lessonList } from "../../api/lesson";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/table/CusDataGrid";
import { Typography } from "@mui/material";
function getTeacherName(params) {
  return params.row.teacher.firstname + " " + params.row.teacher.lastname;
}
export default function LessonList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("lessonList", lessonList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    lessonDeleteAll();
    setRows([]);
  };
  const columns = [
    {
      field: "name",
      headerName: "名称",
      width: 150,
      renderCell: (params) => (
        <Typography
          onClick={() => {
            navigate(`/${username}/lesson/${params.id}`);
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "teacher",
      headerName: "课任老师",
      width: 150,
      valueGetter: getTeacherName,
    },
    {
      field: "type",
      headerName: "类型",
      width: 150,
    },
    {
      field: "hours",
      headerName: "学时",
      width: 200,
    },
    {
      field: "level",
      headerName: "难度指数",
      width: 200,
    },
  ];
  console.log(data);
  return (
    <CusDataGrid
      columns={columns}
      rows={rows}
      handleDeleteAll={handleDeleteAll}
    />
  );
}
