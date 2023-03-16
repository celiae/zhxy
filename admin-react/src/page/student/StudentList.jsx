import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import StudentTable from "./StudentTable";
import { studentList } from "../../api/student";

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
    </Box>
  );
}