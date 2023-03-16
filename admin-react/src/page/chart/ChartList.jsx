import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import ChartPie from "../../components/chart/ChartPie";
import { labList } from "../../api/lab";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { teacherGroupJobTitle } from "../../api/teacher";
import ChartBar from "../../components/chart/ChartBar";
import { departmentList } from "../../api/department";

export default function ChartList() {
  const lab = useQuery("labList", labList);
  const department = useQuery("departmentList", departmentList);
  const teacher = useQuery("teacherGroupJobTitle", teacherGroupJobTitle);
  const chartData = (name, value) => {
    return { name: name, value: value };
  };
  const teacherList = [];
  const labSucNumChart = [];
  const labDevCostChar = [];
  const departmentBudgetChar = [];
  if (lab.status === "loading" || teacher.status === "loading")
    return <Loading />;
  teacher.data.forEach((element) => {
    teacherList.push(chartData(element[0], element[1]));
  });
  lab.data.forEach((element) => {
    labSucNumChart.push(chartData(element.name, element.successNum));
  });
  lab.data.forEach((element) => {
    labDevCostChar.push(chartData(element.name, element.deviceCost));
  });
  department.data.forEach((element) => {
    departmentBudgetChar.push(chartData(element.name, element.budget));
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="实验室资金占比" subheader="单位：元" />
          <CardContent>
            <ChartPie data={lab.data} dataKey={"projectCost"} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="实验室设备预算占比" subheader="单位：元" />
          <CardContent>
            <ChartPie data={labDevCostChar} dataKey={"value"} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="实验室产出项目" />
          <CardContent>
            <ChartBar data={labSucNumChart} dataKey={"value"} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="教师各职称占比" />
          <CardContent>
            <ChartPie data={teacherList} dataKey={"value"} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="部门资金预算" />
          <CardContent>
            <ChartBar data={departmentBudgetChar} dataKey={"value"} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}