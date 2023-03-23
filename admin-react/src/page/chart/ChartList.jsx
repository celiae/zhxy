import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ChartPie from "../../components/chart/ChartPie";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { teacherGroupJobTitle } from "../../api/teacher";
import ChartBar from "../../components/chart/ChartBar";
import { departmentList } from "../../api/department";
import RouteButton from "../../components/button/RouteButton";

export default function ChartList() {
  const department = useQuery("departmentList", departmentList);
  const teacher = useQuery("teacherGroupJobTitle", teacherGroupJobTitle);
  const chartData = (name, value) => {
    return { name: name, value: value };
  };
  const teacherList = [];
  const departmentBudgetChar = [];
  if (teacher.status === "loading") return <Loading />;
  teacher.data.forEach((element) => {
    teacherList.push(chartData(element[0], element[1]));
  });

  department.data.forEach((element) => {
    departmentBudgetChar.push(chartData(element.name, element.budget));
  });
  return (
    <Grid container spacing={2} p>
      <Grid item xs={12}>
        <RouteButton path={"./student"} msg={"学生"} variant="text" />
        <RouteButton path={"./teacher"} msg={"教师"} variant="text" />
        <RouteButton path={"./classes"} msg={"班级"} variant="text" />
        <RouteButton path={"./lesson"} msg={"课程"} variant="text" />
        <RouteButton path={"./lab"} msg={"实验室"} variant="text" />
        <RouteButton path={"./department"} msg={"部门"} variant="text" />
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="教师各职称占比" />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12} md={8} lg={6}>
                <ChartPie data={teacherList} dataKey={"value"} />
              </Grid>
              <Grid item xs={12} md={8} lg={6}>
                <Typography variant="h5">部门资金预算</Typography>
                <ChartBar data={departmentBudgetChar} dataKey={"value"} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
