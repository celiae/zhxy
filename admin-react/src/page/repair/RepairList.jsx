import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { repairDeleteAll, repairList } from "../../api/repair";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/datagrid/CusDataGrid";
function getClassroom(params) {
  return params.row.classroom.name;
}
export default function RepairList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("repairList", repairList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    repairDeleteAll();
    setRows([]);
  };
  const columns = [
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
