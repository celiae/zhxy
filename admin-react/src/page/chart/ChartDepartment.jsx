import React from "react";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import ChartBar from "../../components/chart/ChartBar";
import { departmentList } from "../../api/department";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
const chartData = (name, value) => {
  return { name: name, value: value };
};
const bar = {
  width: 400,
  height: 300,
};
export default function ChartDepartment() {
  const department = useQuery("departmentList", departmentList);
  const departmentBudgetChar = [];
  if (department.status === "loading") return <Loading />;
  department.data.forEach((element) => {
    departmentBudgetChar.push(chartData(element.name, element.budget));
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="部门资金预算" />
          <CardContent>
            <ChartBar
              data={departmentBudgetChar}
              dataKey={"value"}
              width={bar.width}
              height={bar.height}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
