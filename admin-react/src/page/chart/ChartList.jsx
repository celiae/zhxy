import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import ShadowBox from "../../components/shadowbox/ShadowBox";
import ChartPie from "../../components/chart/ChartPie";
import { labList } from "../../server/lab";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { teacherGroupJobTitle } from "../../server/teacher";
import SimpleBar from "../../components/chart/SimpleBar";
import { departmentList } from "../../server/department";

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
    <ShadowBox>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardHeader title="实验室资金占比" subheader="单位：元" />
            <CardContent>
              <ChartPie data={lab.data} dataKey={"projectCost"} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title="实验室设备预算占比" subheader="单位：元" />
            <CardContent>
              <ChartPie data={labDevCostChar} dataKey={"value"} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="实验室产出项目" />
            <CardContent>
              <SimpleBar data={labSucNumChart} dataKey={"value"} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardHeader title="教师各职称占比" />
            <CardContent>
              <ChartPie data={teacherList} dataKey={"value"} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardHeader title="部门资金预算" />
            <CardContent>
              <SimpleBar data={departmentBudgetChar} dataKey={"value"} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShadowBox>
  );
}
