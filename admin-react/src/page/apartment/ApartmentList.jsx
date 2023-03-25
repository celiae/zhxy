import React from "react";
import { Stack, Typography, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { apartmentDeleteAll, apartmentList } from "../../api/apartment";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/datagrid/CusDataGrid";
import RouteButton from "../../components/button/RouteButton";
import TopApartment from "./TopApartment";
function getclassesName(params) {
  return `${params.row.classes.name}`;
}
export default function ApartmentList() {
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("apartmentList", apartmentList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    apartmentDeleteAll();
    setRows([]);
  };
  const columns = [
    {
      field: "buildingNum",
      headerName: "楼号",
      width: 150,
      renderCell: (params) => (
        <Stack direction={"row"} alignItems="center" spacing={2}>
          <Typography>{params.value}</Typography>
          <RouteButton
            path={`/${username}/apartment/${params.id}`}
            msg={"查看"}
          />
        </Stack>
      ),
    },
    {
      field: "roomNum",
      headerName: "房号",
      width: 100,
    },
    {
      field: "classes",
      headerName: "班级",
      width: 200,
      valueGetter: getclassesName,
    },
    {
      field: "location",
      headerName: "地点",
      width: 200,
    },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <TopApartment />
      </Grid>
      <Grid item xs={12}>
        <CusDataGrid
          columns={columns}
          rows={rows}
          handleDeleteAll={handleDeleteAll}
        />
      </Grid>
    </Grid>
  );
}
