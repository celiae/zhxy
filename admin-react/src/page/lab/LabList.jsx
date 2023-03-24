import React from "react";
import { Typography } from "@mui/material";
import { useQuery } from "react-query";
import { labDeleteAll, labList } from "../../api/lab";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/datagrid/CusDataGrid";

export default function LabList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("labList", labList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    labDeleteAll();
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
            navigate(`/${username}/lab/${params.id}`);
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "location",
      headerName: "地点",
      width: 200,
    },
    {
      field: "projectCost",
      headerName: "项目资金",
      width: 150,
    },
    {
      field: "deviceCost",
      headerName: "设备资金",
      width: 150,
    },
    {
      field: "workload",
      headerName: "工作量指数",
      width: 150,
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
