import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import TeacherTable from "../../components/table/TeacherTable";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { teacherList } from "../../server/teacher";
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
      <Button color="secondary" variant="contained" onClick={handleClick}>添加</Button>
    </Box>
  );
}
