import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { labList } from "../../api/lab";
import ChartPie from "../../components/chart/ChartPie";
import Loading from "../../components/progress/Loading";
const chartData = (name, value) => {
  return { name: name, value: value };
};
export default function ChartLab() {
  const lab = useQuery("labList", labList);
  const labDevCostChar = [];
  if (lab.status === "loading") return <Loading />;
  lab.data.forEach((element) => {
    labDevCostChar.push(chartData(element.name, element.deviceCost));
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
          <CardHeader title="实验室设备预算占比" subheader="单位：元" />
          <CardContent>
            <ChartPie data={labDevCostChar} dataKey={"value"} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
