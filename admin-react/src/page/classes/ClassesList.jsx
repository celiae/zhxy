import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { classesDeleteAll, classesList } from "../../api/classes";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/table/CusDataGrid";

export default function ClassesList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("classesList", classesList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    classesDeleteAll();
    setRows([]);
  };
  const columns = [
    {
      field: "name",
      headerName: "班级",
      width: 150,
      renderCell: (params) => (
        <Typography
          onClick={() => {
            navigate(`/${username}/classes/${params.id}`);
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "grade",
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
  return (
    <CusDataGrid
      columns={columns}
      rows={rows}
      handleDeleteAll={handleDeleteAll}
    />
  );
}
