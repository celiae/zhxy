import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { teacherEntryDate } from "../../api/teacher";
import { Card, CardContent, Typography } from "@mui/material";
import ChartArea from "../../components/chart/ChartArea";
export default function TeacherSalary() {
  const teacherEntry = useQuery("teacherEntryDate", teacherEntryDate);
  const chartData = (firstname, lastname, entry, salary, reward) => {
    return {
      name: firstname + " " + lastname,
      entryDate: entry,
      salary: salary,
      reward: reward,
    };
  };
  const teacherEntryChart = [];
  if (teacherEntry.status === "loading") return <Loading />;
  teacherEntry.data.forEach((element) => {
    teacherEntryChart.push(
      chartData(element[0], element[1], element[2], element[3], element[4])
    );
  });
  return (
    <Card>
      <CardContent sx={{ overflow: "auto" }}>
        <Typography variant="body1">教师入职时薪资与奖金</Typography>
        <ChartArea
          data={teacherEntryChart}
          XdataKey="entryDate"
          dataKey={["salary", "reward"]}
          width={1000}
          height={400}
        />
      </CardContent>
    </Card>
  );
}
