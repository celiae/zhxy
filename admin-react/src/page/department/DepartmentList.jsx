import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import DepartmentTable from "../../components/table/DepartmentTable";
import { departmentList } from "../../server/department";

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
      <Button onClick={handleClick} variant="contained" color="secondary">
        添加
      </Button>
    </Box>
  );
}
