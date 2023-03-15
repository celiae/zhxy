import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import TeacherTable from "./TeacherTable";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { teacherList } from "../../server/teacher";
import RouteButton from "../../components/button/RouteButton";
export default function TeacherList() {
  const { data, status } = useQuery("teacherList", teacherList);
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
      <TeacherTable data={rows} setData={setRows} />
      <RouteButton color={"secondary"} msg="添加" path={"create"} />
    </Box>
  );
}
