import React from "react";
import { useQuery } from "react-query";
import { lessonDeleteAll, lessonList } from "../../api/lesson";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/table/CusDataGrid";
import { Typography } from "@mui/material";
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
      field: "type",
      headerName: "类型",
      width: 150,
    },
    {
      field: "hours",
      headerName: "学时",
      width: 200,
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
