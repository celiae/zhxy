import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import DepartmentTable from "./DepartmentTable";
import { departmentList } from "../../api/department";

export default function DepartmentList() {
  const { data, status } = useQuery("departmentList", departmentList);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("create");
  };
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <Box>
      <DepartmentTable data={rows} setData={setRows} />
    </Box>
  );
}