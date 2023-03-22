import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { studentNumber } from "../../api/student";
import { teacherEntryDate, teacherNumber } from "../../api/teacher";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { labNumber } from "../../api/lab";
import { departmentNumber } from "../../api/department";
import HomeData from "./HomeData";
import ChartArea from "../../components/chart/ChartArea";
import RouteButton from "../../components/button/RouteButton";
export default function Home() {
  const studentNum = useQuery("studentNumber", studentNumber);
  const teacherNum = useQuery("teacherNumber", teacherNumber);
  const teacherEntry = useQuery("teacherEntryDate", teacherEntryDate);
  const labNum = useQuery("labNumber", labNumber);
  const departmentNum = useQuery("departmentNumber", departmentNumber);
  const chartData = (firstname, lastname, entry, salary, reward) => {
    return {
      name: firstname + " " + lastname,
      entryDate: entry,
      salary: salary,
      reward: reward,
    };
  };
  const teacherEntryChart = [];

  if (studentNum.status === "loading" || teacherNum.status === "loading")
    return <Loading />;
  teacherEntry.data.forEach((element) => {
    teacherEntryChart.push(
      chartData(element[0], element[1], element[2], element[3], element[4])
    );
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4} lg={3}>
        <HomeData>
          <Typography variant="body1" color={"info.light"}>
            学生总数
          </Typography>
          <Typography variant="h4" color={"info.light"}>
            {studentNum.data}
          </Typography>
          <Typography variant="body1" color={"info.dark"}>
            部门总数
          </Typography>
          <Typography variant="h4" color={"info.dark"}>
            {departmentNum.data}
          </Typography>
          <Typography color={"warning.dark"} variant="body1">
            拥有座实验室
          </Typography>
          <Typography variant="h4" color={"warning.dark"}>
            {labNum.data}
          </Typography>
          <Typography color={"warning.main"} variant="body1">
            教师在职数
          </Typography>
          <Typography variant="h4" color={"warning.main"}>
            {teacherNum.data}
          </Typography>
        </HomeData>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <RouteButton path={"table"} msg={"所有表"} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={{ overflow: "auto" }}>
            <Typography variant="body1">教师入职时薪资与奖金</Typography>
            <ChartArea data={teacherEntryChart} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
