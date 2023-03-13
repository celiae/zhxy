import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import StudentTable from "../../components/table/StudentTable";
import { studentList } from "../../server/student";

export default function StudentList() {
  const { data, status } = useQuery("studentList", studentList);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("create");
  };
  const toScore = () => {
    navigate("score");
  };
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={toScore} variant="contained">
          学生成绩管理
        </Button>
      </Grid>
      <Grid item xs={12}>
        <StudentTable data={rows} setData={setRows} />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleClick} color="secondary" variant="contained">
          添加
        </Button>
      </Grid>
    </Grid>
  );
}
