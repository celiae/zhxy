import React from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { departmentDeleteAll, departmentList } from "../../api/department";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/table/CusDataGrid";

export default function DepartmentList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("departmentList", departmentList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    departmentDeleteAll();
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
            navigate(`/${username}/department/${params.id}`);
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "manager",
      headerName: "管理者",
      width: 150,
    },
    {
      field: "budget",
      headerName: "部门预算",
      width: 200,
    },
  ];
  return (
    <Box>
      <CusDataGrid
        columns={columns}
        rows={rows}
        handleDeleteAll={handleDeleteAll}
      />
    </Box>
  );
}
