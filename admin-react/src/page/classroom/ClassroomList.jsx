import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { classroomDeleteAll, classroomList } from "../../api/classroom";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/datagrid/CusDataGrid";

export default function ClassroomList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("classroomList", classroomList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    classroomDeleteAll();
    setRows([]);
  };
  const columns = [
    {
      field: "location",
      headerName: "didian",
      width: 150,
      renderCell: (params) => (
        <Typography
          onClick={() => {
            navigate(`/${username}/classroom/${params.id}`);
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "roomNumber",
      headerName: "年级",
      width: 150,
    },
    {
      field: "speciality",
      headerName: "专业",
      width: 200,
    },
    {
      field: "description",
      headerName: "简述",
      width: 400,
    },
  ];
  console.log(rows);
  return (
    <CusDataGrid
      columns={columns}
      rows={rows}
      handleDeleteAll={handleDeleteAll}
    />
  );
}
