import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import StudentTable from "./StudentTable";
import { studentList } from "../../server/student";
import RouteButton from "../../components/button/RouteButton";

export default function StudentList() {
  const { data, status } = useQuery("studentList", studentList);
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <Box>
      <StudentTable data={rows} setData={setRows} />
      <RouteButton color={"secondary"} msg="添加" path={"create"} />
    </Box>
  );
}
