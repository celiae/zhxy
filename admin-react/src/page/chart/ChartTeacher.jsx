import React from "react";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import ChartPie from "../../components/chart/ChartPie";
import { useQuery } from "react-query";
import { teacherGroupJobTitle } from "../../api/teacher";
import Loading from "../../components/progress/Loading";
const chartData = (name, value) => {
  return { name: name, value: value };
};
const pie = {
  width: 460,
  height: 300,
};
export default function ChartTeacher() {
  const teacher = useQuery("teacherGroupJobTitle", teacherGroupJobTitle);
  const teacherList = [];
  if (teacher.status === "loading") return <Loading />;
  teacher.data.forEach((element) => {
    teacherList.push(chartData(element[0], element[1]));
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardHeader title="教师各职称占比" />
          <CardContent>
            <ChartPie
              data={teacherList}
              dataKey={"value"}
              width={pie.width}
              height={pie.height}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
